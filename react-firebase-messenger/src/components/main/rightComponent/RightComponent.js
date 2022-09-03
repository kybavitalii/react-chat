import React from 'react';
import FooterChat from './footerChat/FooterChat';
import TitleChat from './titleChat/TitleChat';
import Chat from './chat/Chat';
import './rightComponent.css';

const RightComponent = () => {
  // const src = 'src';
  // const username = 'username';
  return (
    <div className="right-component">
      <TitleChat />
      <Chat />
      <FooterChat />
    </div>
  );
};
export default RightComponent;
