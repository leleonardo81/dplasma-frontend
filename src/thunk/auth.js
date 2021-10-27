import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { appLogin, appRegister } from "api/index";

export const signin = createAsyncThunk('auth/signin', async ({auth, email, password}) => {
  console.log(auth, email, password)
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      const {accessToken} = user;
      const loginRes = await appLogin(accessToken);

      console.log({...loginRes.data.data, accessToken})
      return {...loginRes.data.data, accessToken};
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage, err);
    throw err;
    // return err
  }
});

export const signup = createAsyncThunk('auth/signup', async ({auth, email, password, name, nik, phoneNumber}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      const {accessToken} = user;
      const signUpRes = await appRegister(accessToken, {name, nik, phoneNumber});
      console.log({...signUpRes.data.data, accessToken});

      return ({...signUpRes.data.data, accessToken});
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage, err);
    throw err;
    // return err
  }
});