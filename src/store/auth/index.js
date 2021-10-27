import { createSlice } from "@reduxjs/toolkit";
import { setupAuthToken } from "api/config";
import { signin, signup } from "thunk/auth";

const formSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    loading: false
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      setTimeout(()=>setupAuthToken(null), 500);
    },
  },
  extraReducers: {
    [signin.pending]: state => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      setupAuthToken(action.payload.accessToken);
    },
    [signin.rejected]: state => {
      state.loading = false;
    },
    [signup.pending]: state => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      setupAuthToken(action.payload.accessToken);
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