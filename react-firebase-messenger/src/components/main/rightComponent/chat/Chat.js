import React from 'react';
import { Context } from '../../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore/lite';
import './chat.css';

const Chat = () => {
  const { useContext, useState } = React;
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  // const [list, setList] = useState();
  // let list = [];

  async function getMessages(firestore) {
    const messagesCol = collection(firestore, 'messages');
    const messagesSnapshot = await getDocs(messagesCol);
    const messagesList = messagesSnapshot.docs.map((doc) => doc.data());
    // const messages = (messagesList) => {
    //   messagesList.forEach((el) => list.push(el.text));
    // };
    console.log(messagesList.length);
    return messagesList[0].text;
  }

  // getMessages(firestore);
  return <div className="chat"></div>;
};
export default Chat;
