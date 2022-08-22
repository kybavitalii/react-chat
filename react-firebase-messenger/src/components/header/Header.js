import React from 'react';
import { Context } from '../../index';
import './header.css';

const Header = (user) => {
  const { useContext } = React;
  const { auth } = useContext(Context);
  // console.log(user.user.user[0], user.user.user[1]);
  const src = user.user.user[1];
  return (
    <header className="header">
      <div className="header__title">
        <div className="avatar__title">
          <img src={src} alt="Avatar" className="avatar" />
          <h4>{user.user.user[0]}</h4>
        </div>

        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
      <input
        type="text"
        tabIndex={0}
        placeholder=" &#128269; Search or start new chat"
      ></input>
    </header>
  );
};
export default Header;
