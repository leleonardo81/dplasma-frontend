import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Home = props => {
  const [auth, setAuth] = useState();
  const [token, setToken] = useState();

  useEffect(()=> {
    const au = getAuth();
    console.log(au);
    setAuth(au);
  }, [])
  const clicked = () => {
    signInWithEmailAndPassword(auth, 'leonardo81@ui.ac.id', 'pokmnjiuhb').then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
      setToken(user.accessToken)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const signup = () => {
    createUserWithEmailAndPassword(auth, 'leonardo81@ui.ac.id', 'pokmnjiuhb').then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
      setToken(user.accessToken)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div>
      <div>Halo</div>
      <button onClick={clicked}>CLICK</button>
      <button onClick={signup}>SIGNUP</button>
      <br></br>
      <p>{token}</p>
    </div>
  )
};

export default Home;                                                                                                                                                                                
