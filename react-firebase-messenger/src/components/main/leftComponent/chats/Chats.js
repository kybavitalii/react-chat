import React from 'react';
import './chats.css';
import josefina from '../../../../images/josefina.jpg';
import alice from '../../../../images/alice.jpg';
import velazques from '../../../../images/Velazques.jpg';

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img className="" src={alice} alt=""></img>
        <div className="userChatInfo">
          <span>Alice</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className="" src={josefina} alt=""></img>
        <div className="userChatInfo">
          <span>Josefina</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className="" src={velazques} alt=""></img>
        <div className="userChatInfo">
          <span>Velazques</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};
export default Chats;
