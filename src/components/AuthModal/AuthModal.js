import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/Button";
import TextField from "components/TextField";
import CloseButton from "components/CloseButton/index";

const AuthModal = ({open, setShow, loading, signin, signup}) => {
  const [auth, setAuth] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [signUpMode, setSignUpMode] = useState(false);

  useEffect(()=> {
      const au = getAuth();
      // console.log(au);
      setAuth(au);
      setSignUpMode(false);
      setPassword('');
      setPasswordConfirm('');
  }, [open]);

  // const signin = () => {
  //     signInWithEmailAndPassword(auth, '','').then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log(userCredential);
  //       setToken(user.accessToken)
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  //   }
  
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
    <Dialog open={open} onClose={()=>setShow(false)} maxWidth="sm" fullWidth>
      <div className="absolute right-0">
        <CloseButton onClick={()=>setShow(false)} />
      </div>
      <DialogContent>
        <div className="text-center p-8 flex flex-col lg:w-3/4 m-auto">
          <h2 className="font-bold text-xl mb-6">{signUpMode ? 'SignUp':'Login'}</h2>
          <TextField
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          {signUpMode && 
            <TextField
              label="Password Confirmation"
              type="password"
              value={passwordConfirm}
              onChange={e=>setPasswordConfirm(e.target.value)}
            />
          }
          { signUpMode ? 
            <div className="mt-4 w-full flex flex-col">
              <Button disabled={loading || passwordConfirm !== password || !password || !email} onClick={()=>signup(auth, email, password)}>SignUp</Button>
              <p className="mt-2 mb-0">Sudah punya akun?&nbsp;
                <span className="text-red-500 cursor-pointer hover:underline" onClick={()=>setSignUpMode(false)}>Login</span>
              </p>
            </div>
          :
            <div className="mt-4 w-full flex flex-col">
              <Button disabled={loading || !password || !email} onClick={()=>signin(auth, email, password)}>Login</Button>
              <p className="mt-2 mb-0">Belum punya akun?&nbsp;
                <span className="text-red-500 cursor-pointer hover:underline" onClick={()=>setSignUpMode(true)}>Signup</span>
              </p>
            </div>
          }
        </div> 
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;