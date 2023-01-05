import React from 'react';

import './message.css';

const Message = () => {
  return (
    <div className="message">
      message
      {/* <img src={SRC} class="message-img"></img>
      <p class="message-text">${item.text}</p>
      <p class="message-time">${time}</p> */}
    </div>
  );
};

export default Message;

// export const Message = ({text, isCurrentUser}) => (
//     <div className={`message ${isCurrentUser ? '' : 'message_second'}`}>
//         <div className="message__avatar">
//             <img
//                 className="message__image"
//                 src={isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL}
//                 alt="lego"
//             />
//         </div>
//         <div className="message__bubble">{text}</div>
//     </div>
// );
