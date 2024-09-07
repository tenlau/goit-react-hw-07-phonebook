import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const duplicate = this.state.contacts.find(contact => contact.name === name);

    if (duplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
          addContact={this.addContact} 
        />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
