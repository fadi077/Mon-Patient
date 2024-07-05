import React, { useState } from 'react';
import '../styles/login.css'; // Assuming this is your CSS file
import { Link } from 'react-router-dom';

const PrivateAcc = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };
   
  return (
    <div className={`container privateContainer ${isRightPanelActive ? 'right-panel-active' : ''}`}>
      {/* Sign Up */}
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1">
          <h2 className="form__title">Private Account</h2>
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="date" placeholder="DOB" className="input" />  
          <input type="number" placeholder="ID Card Number" className="input" />  
          <input type="email" placeholder="Email" className="input" />
          <input type="number" placeholder="Ph #" className="input" />  
          <input type="password" placeholder="Password" className="input" />
          <Link to="/" className="btn private-btn">Sign Up</Link>
        </form>
      </div>
    
      {/* Sign In */}
      <div className="container__form container--signin">
        <form action="#" className="form" id="form2">
          <h2 className="form__title">Business Account</h2>
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="date" placeholder="DOB" className="input" />  
          <input type="number" placeholder="ID Card Number" className="input" />  
          <input type="email" placeholder="Email" className="input" />
          <input type="number" placeholder="Ph #" className="input" />  
          <input type="password" placeholder="Password" className="input" />
          <Link to="/" className="btn1">Sign In</Link>
        </form>
      </div>
    
      {/* Overlay */}
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn1 business-btn" id="signIn" onClick={handleSignInClick}>Business Account</button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" id="signUp" onClick={handleSignUpClick}>Private Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateAcc;
