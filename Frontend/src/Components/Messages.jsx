import React from 'react'

function Messages() {
  return (
    
       <div className="content">
            <main>
                <div className="chat-window">
                    <div className="chat-log">
                        {/* messages will be displayed here */}
                    </div>
                    <div className="input-field">
                        <input type="text" id="message-input" placeholder="Type a message..." />
                        <button id="send-button">Send</button>
                    </div>
                </div>
            </main>
        </div>
    
  )
}

export default Messages
