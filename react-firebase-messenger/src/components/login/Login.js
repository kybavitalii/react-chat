import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Context } from '../../index';
import './login.css';

const Login = () => {
  const { useContext } = React;
  const { auth } = useContext(Context);
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        throw new Error(errorCode, errorMessage);
      });
  };

  return (
    <div className="login">
      <h2 className="login__title">Login with Google:</h2>
      <button className="login__button" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
