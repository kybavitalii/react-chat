import React from 'react';
import Header from '../../header/Header';
import ChatsTitle from './chatsTitle/ChatsTitle';
import Chats from './chats/Chats';
import './leftComponent.css';

const LeftComponent = (user) => {
  user = user;
  return (
    <div className="left-component">
      <Header user={user} />
      <ChatsTitle />
      <Chats />
    </div>
  );
};
export default LeftComponent;
