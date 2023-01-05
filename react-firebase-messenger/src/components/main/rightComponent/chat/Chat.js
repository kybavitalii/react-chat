import React, { useEffect } from 'react';
import { Context } from '../../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore/lite';
import josefina from '../../../../images/josefina.jpg';
import Message from '../../message/Message';
import { auth, db } from '../../../../common/firebaseConfig';
import { AuthContext } from '../../../../context/authContext/AuthContext';
import './chat.css';

const Chat = () => {
  const { useContext, useState } = React;
  // const { auth, firestore } = useContext(Context);
  // const [user] = useAuthState(auth);
  const { currentUser } = useContext(AuthContext);
  // const [list, setList] = useState([]);
  let messages = [];

  // useEffect((list) => {
  //   messageRenderer(list);
  // });

  // async function getMessages(db) {
  //   const messagesCol = collection(db, 'messages');
  //   const messagesSnapshot = await getDocs(messagesCol);
  //   const messagesList = messagesSnapshot.docs.map((doc) => doc.data());
  //   messagesList.forEach((el) => messages.push(el.text));

  //   // setList(messages);
  //   console.log(messages);
  //   messageRenderer(messagesList);
  // }

  // const messageRenderer = (list) => {
  //   // console.log(currentUser.uid);
  //   const SRC = josefina;
  //   const chat = document.getElementById('chat');
  //   list.map((item) => {
  //     const date = item.timestamp.toDate().toString();
  //     const time = date.slice(4, 25);

  //     const message = document.createElement('div');
  //     if (currentUser.uid === item.uid) {
  //       message.className = 'message right';
  //       message.innerHTML = `
  //     <p class='message-text'>${item.text}</p>
  //     <p class='message-time-right'>${time}</p>
  //     `;
  //     } else {
  //       message.className = 'message';
  //       message.innerHTML = `
  //     <img src="${SRC}" class='message-img'></img>
  //     <p class='message-text'>${item.text}</p>
  //     <p class='message-time'>${time}</p>
  //     `;
  //     }

  //     // console.log(message);
  //     chat.appendChild(message);
  //   });
  // };
  // getMessages(db);
  return (
    <div className="chat" id="chat">
      CHAT
      {/* <Message /> */}
    </div>
  );
};
export default Chat;
