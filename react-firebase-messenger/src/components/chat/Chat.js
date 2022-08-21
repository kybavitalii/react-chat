import React from 'react';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Chat = () => {
  const { useContext } = React;
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);
  return <div>Chat</div>;
};
// export default Chat;
