// components/ContactForm/ContactForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
