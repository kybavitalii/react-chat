import React from 'react';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import LeftComponent from './leftComponent/LeftComponent';
import RightComponent from './rightComponent/RightComponent';
// import { auth } from '../../common/firebaseConfig';
import { AuthContext } from '../../context/authContext/AuthContext';
import './main.css';

export const Main = () => {
  const { useContext } = React;
  const { currentUser } = useContext(AuthContext);
  // const [user] = useAuthState(auth);
  const username = currentUser.displayName;
  const avatar = currentUser.photoURL;
  return (
    <div className="main">
      <LeftComponent user={[username, avatar]} />
      <RightComponent />
    </div>
  );
};
