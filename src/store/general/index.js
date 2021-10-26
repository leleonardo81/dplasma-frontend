import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "thunk/auth";

const formSlice = createSlice({
  name: 'general',
  initialState: {
    showLogin: false
  },
  reducers: {
    showLoginModal(state, action) {
      console.log(action)
      state.showLogin = action.payload;
    }
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      if (action.payload.accessToken) state.showLogin = false;
    },
    [signup.fulfilled]: (state, action) => {
      if (action.payload.accessToken) state.showLogin = false;
    },
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = formSlice;
// Extract and export each action creator by name
export const { showLoginModal } = actions;
// Export the reducer, either as a default or named export
export default reducer;