import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://6702ca9bbd7c8c1ccd3fdc06.mockapi.io/contacts';

// Fetch contacts operation
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      console.log('Contacts fetched:', response.data); // Log API response
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
      return thunkAPI.rejectWithValue('Failed to fetch contacts');
    }
  }
);

// Add contact operation
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, newContact);
      console.log('Contact added:', response.data); // Log API response
      return response.data;
    } catch (error) {
      console.error('Error adding contact:', error.message);
      return thunkAPI.rejectWithValue('Failed to add contact');
    }
  }
);

// Delete contact operation
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${contactId}`);
      console.log(`Contact with ID ${contactId} deleted`); // Log deletion
      return contactId;
    } catch (error) {
      console.error('Error deleting contact:', error.message);
      return thunkAPI.rejectWithValue('Failed to delete contact');
    }
  }
);
