import React from 'react';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'components/Button/index';
import { Link } from 'react-router-dom';

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
    <div className="p-8">
      <div>
        <h1 className="text-3xl md:text-6xl font-semibold mb-4">Ayo donorkan plasma darah-mu bantu lawan covid-19!</h1>
        <h2 className="mt-24 text-2xl lg:mr-80 mb-4">Cari tahu apakah kamu bisa mendonorkan plasma darah kamu melalui pre-assesment kami</h2>
        <Link to="/assesment"><Button size="large">Cari Tahu</Button></Link>
        <h2 className="mt-36 text-4xl lg:mr-80 mb-4 font-bold">Orang-orang ini butuh bantuan-mu</h2>
        <h2 className="text-2xl lg:mr-80 mb-4">Bantu donorkan plasma darah-mu ke mereka yang membutuhkan</h2>
        <div>
          
        </div>

      </div>
      {/* <button onClick={clicked}>CLICK</button>
      <button onClick={signup}>SIGNUP</button> */}
      <br></br>
      {/* <textarea>{token}</textarea>
      <Button onClick={showLoginModal}>Login</Button> */}
    </div>
  )
};

export default Home;                                                                                                                                                                                
