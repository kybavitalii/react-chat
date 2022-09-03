import React from 'react';
import { Context } from '../../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, getDocs, addDoc, query, serverTimestamp } from 'firebase/firestore/lite';
import './footerChat.css';

const FooterChat = () => {
  const { useState } = React;
  const { useContext } = React;
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const sendMessage = async () => {
     
    const docRef = await addDoc(collection(firestore, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      timestamp: serverTimestamp(),
    });
    setValue('');
  };
  return (
    <div className="footerChat">
      <div className="wrapper-pseudo">
        <input
          type="text"
          className="typeMessege"
          placeholder="  Type your messege"
          tabIndex={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="sendMessege" onClick={sendMessage}>
          &#11162;
        </button>
      </div>
    </div>
  );
};

export default FooterChat;
