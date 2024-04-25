import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact, deleteContact } from "./operations";
import toast from "react-hot-toast";

 export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
		name: ""
   },
   
}
const handleRejected = (state, action) => {
  state.loading = false;
  state.items = action.payload;
}

const handlePending = (state) => {
  state.loading = true;
}

const slice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,


  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending,handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
           toast('You add a new contact!', {
      style: {
        borderRadius: '10px',
        background: 'rgb(144, 26, 228)',
        color: '#fff',
      }
    });
      })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      
        toast(`You deleted ${action.payload.name}!`, {
      style: {
        borderRadius: '10px',
        background: 'rgb(144, 26, 228)',
        color: '#fff',
      }
    });
    })
    .addCase(deleteContact.rejected, handleRejected)
  },
});



export const contactsReducer = slice.reducer;

