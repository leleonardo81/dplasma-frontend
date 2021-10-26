import React from 'react';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'components/Button/index';

const Home = ({showLoginModal, token}) => {
  // const [auth, setAuth] = useState();
  // const [token, setToken] = useState();

  // useEffect(()=> {
  //   const au = getAuth();
  //   console.log(au);
  //   setAuth(au);
  // }, [])
  // const clicked = () => {
  //   signInWithEmailAndPassword(auth, '','').then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log(userCredential);
  //     setToken(user.accessToken)
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   });
  // }

  // const signup = () => {
  //   createUserWithEmailAndPassword(auth, '','').then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log(userCredential);
  //     setToken(user.accessToken)
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //     // ..
  //   });
  // }
  return (
    <div>
      <div>{"Halo ".repeat(2000)}</div>
      {/* <button onClick={clicked}>CLICK</button>
      <button onClick={signup}>SIGNUP</button> */}
      <br></br>
      <textarea>{token}</textarea>
      <Button onClick={showLoginModal}>Login</Button>
    </div>
  )
};

export default Home;                                                                                                                                                                                
