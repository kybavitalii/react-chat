import React from 'react';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import LeftComponent from './leftComponent/LeftComponent';
import RightComponent from './rightComponent/RightComponent';
import './main.css';

export const Main = () => {
  const { useContext } = React;
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const username = user.displayName;
  const avatar = user.photoURL;
  return (
    <div className="main">
      <LeftComponent user={[username, avatar]} />
      <RightComponent />
    </div>
  );
};
