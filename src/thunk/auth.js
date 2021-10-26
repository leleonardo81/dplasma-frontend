import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signin = createAsyncThunk('auth/signin', async ({auth, email, password}) => {
  console.log(auth, email, password)
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
      return user;
      // setToken(user.accessToken)
      // ...
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage, err);
    throw err;
    // return err
  }
});

export const signup = createAsyncThunk('auth/signup', async ({auth, email, password}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
      return user;
      // setToken(user.accessToken)
      // ...
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage, err);
    throw err;
    // return err
  }
});