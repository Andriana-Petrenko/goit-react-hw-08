import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../auth/operations'
// import {setToken} from '../auth/operations'
// axios.defaults.baseURL = "https://661d3da998427bbbef013b97.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await instance.get('/contacts');
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (finalContact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts',  finalContact );
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
        const response = await instance.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);