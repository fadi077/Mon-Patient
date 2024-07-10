import React from 'react'
import '../styles/chat.css'; // Assuming this is your CSS file

function Messages() {
  return (
    
    <div className="chat-container">
    <div className="chat-header">
      <img src="MonPatient.png" alt="MonPatient" className="logo" />
      <span className="chat-title">Chat</span>
    </div>
    <div className="chat-body">
      <div className="chat-message doctor">
        <div className="message-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        </div>
        <img src="avatar1.png" alt="Dr. Erica" className="avatar" />
      </div>
      <div className="chat-message user">
        <div className="message-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        </div>
        <img src="avatar2.png" alt="You" className="avatar" />
      </div>
    </div>
    <div className="chat-footer">
      <input type="text" className="message-input" placeholder="Type your message" />
      <img src="send.png" alt="Send" className="send-icon" />
    </div>
  </div>
    
  )
}

export default Messages
