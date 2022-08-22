import React from 'react';
import './titleChat.css';
// import josefina from '../../../../images/josefina.jpg';

const TitleChat = () => {
  const SRC = 'src';
  const username = 'name';
  return (
    <div className="titleChat">
      <img src={SRC} alt="Avatar" className="titleChat__avatar" />
      <h4 className="titleChat__username">{username}</h4>
    </div>
  );
};
export default TitleChat;
