import React from 'react'
import '../styles/chat.css'; // Assuming this is your CSS file
import { IoMdMic } from "react-icons/io";

function Messages() {
  return (
    <div className="chat-container">

      <div className="chat-header">
        <img src="logo.png" alt="MonPatient" className="logo" />
        <span className="chat-title"><span className='text-red-500'>Mon</span><span className='text-[#31517a]'>Patient</span><span className='font-thin'> Chat</span></span>
      </div>

      <div className="chat-body">

        <div className="chat-message doctor">
          <div className='message-container'>
            <div className='text-lg text-[#2a3556] font-semibold'>Dr. Erica</div>
            <div className="text-white text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </div>
          </div>
          <img src="avatar1.png" alt="Dr. Erica" className="h-16 w-16 rounded-full " />
        </div>
        <div className="chat-message user">
          <div className='message-container'>
            <div className='text-lg text-[#2a3556] font-semibold'>You</div>
            <div className=" text-white text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </div>
          </div>
          <img src="avatar2.png" alt="You" className="h-16 w-16 rounded-full" />
        </div>
      </div>

      <div className="chat-footer">
        <span className='' style={{fontSize: "24px"}}>😊</span>
        <span className='' style={{fontSize: "24px"}}>🔗</span>
        <input type="text" className="message-input" placeholder="Type your message" />
        <IoMdMic color='white' size={24} />
      </div>
    </div>


  )
}

export default Messages
