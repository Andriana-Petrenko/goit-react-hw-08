import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

export const AUTH_INITIAL_STATE={
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const handleRejected = (state, action) => {
//   state.loading = false;
//     state.items = action.payload;
    console.log(action.payload)
}

const handlePending = (state) => {
  state.loading = true;
}

const slice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
    extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        // state.isLoading = true;
        // state.isError = false;
      })
        .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        // state.isLoading = false;
        // state.isError = true;
      })

        
        
      .addCase(login.pending,handlePending)
      .addCase(login.fulfilled, (state, action) => {
        // state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
    .addCase(login.rejected, handleRejected)

    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
          state.isRefreshing = false;
          
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

    .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
  },

  
);

export const authReducer = slice.reducer;