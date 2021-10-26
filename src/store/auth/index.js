import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "thunk/auth";

const formSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    loading: false
  },
  reducers: {
    logout(state) {
      state.token = null;
      window.location = '/';
    }
  },
  extraReducers: {
    [signin.pending]: state => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.token = action.payload.accessToken;
    },
    [signin.rejected]: state => {
      state.loading = false;
    },
    [signup.pending]: state => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.token = action.payload.accessToken;
    },
    [signup.rejected]: state => {
      state.loading = false;
    },
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = formSlice;
// Extract and export each action creator by name
export const { logout } = actions;
// Export the reducer, either as a default or named export
export default reducer;