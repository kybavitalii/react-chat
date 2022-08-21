import React from 'react';
import Header from '../../header/Header';
import './leftComponent.css';

const LeftComponent = (user) => {
  user = user;
  console.log(user);
  return (
    <div className="left-component">
      <Header user={user} />
    </div>
  );
};
export default LeftComponent;
