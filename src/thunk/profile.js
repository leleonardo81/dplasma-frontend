import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProfile, getProfile } from "api/index";

export const updateProfile = createAsyncThunk('profile/edit', async ({name, phoneNumber}) => {
  try {
      await editProfile({name, phoneNumber});
      const res = await getProfile();
      return res.data;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage, err);
    throw err;
    // return err
  }
});