import React from 'react';
import FooterChat from './footerChat/FooterChat';
import './rightComponent.css';
import TitleChat from './titleChat/TitleChat';

const RightComponent = () => {
  // const src = 'src';
  // const username = 'username';
  return (
    <div className="right-component">
      <TitleChat />
      <FooterChat />
    </div>
  );
};
export default RightComponent;
