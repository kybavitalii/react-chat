import React from 'react';
import './footerChat.css';

const FooterChat = () => {
  return (
    <div className="footerChat">
      <div className="wrapper-pseudo">
        <input
          type="text"
          className="typeMessege"
          placeholder="  Type your messege"
          tabIndex={1}
        />
        <button className="sendMessege">&#11162;</button>
      </div>
    </div>
  );
};

export default FooterChat;
