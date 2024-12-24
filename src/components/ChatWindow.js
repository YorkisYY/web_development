import React from 'react';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`message ${message.sender}`}
        >
          <div className="message-content">
            <p>{message.text}</p>
            <span className="timestamp">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow; 