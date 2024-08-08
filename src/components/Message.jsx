import React from 'react';
import '../styles/Message.scss';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <div className="message-text">{message.text}</div>
    </div>
  );
};

export default Message;
