import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../main/utils/constants.js';
import { privateRoutes, publicRoutes } from './routes.js';
// import { Context } from '../../index';
import { AuthContext } from '../../context/authContext/AuthContext.js';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../common/firebaseConfig';

const AppRouter = () => {
  const { useContext } = React;
  const { currentUser } = useContext(AuthContext);
  // const [user] = useAuthState(auth);

  return currentUser ? (
    <Routes>
      {privateRoutes.map(({ path, Component }, index) => (
        <Route path={path} key={index} element={Component} exac={true} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }, index) => (
        <Route path={path} key={index} element={Component} exac={true} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRouter;
