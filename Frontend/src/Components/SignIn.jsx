import React from 'react';
import '../styles/login.css'; // Assuming this is your CSS file
import { Link } from 'react-router-dom';

function SignIn() {
  const handleSignInClick = () => {
    const container = document.querySelector('.container');
    container.classList.remove('right-panel-active');
  };

  const handleSignUpClick = () => {
    const container = document.querySelector('.container');
    container.classList.add('right-panel-active');
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    // Example logic: Replace with your actual form submission logic
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Signing up with:', email, password);
  };

  const handleSignInFormSubmit = (e) => {
    e.preventDefault();
    // Example logic: Replace with your actual form submission logic
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="wrapper">
      <div className="container right-panel-active">
        {/* Sign Up */}
        <div className="container__form container--signup">
          <form onSubmit={handleSignUpFormSubmit} className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <Link to="/privateacc" className="btn1">Business Account</Link>
            <Link to='/privateacc' type="submit" className="btn2">Private Account</Link>
          </form>
        </div>

        {/* Sign In */}
        <div className="container__form container--signin">
          <form onSubmit={handleSignInFormSubmit} className="form" id="form2">
            <select className="language-select">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
            <h2 className="form__title">Sign In</h2>
            <input type="email" name="email" placeholder="Email" className="input" />
            <input type="password" name="password" placeholder="Password" className="input" />
            <a href="#" className="link">Forgot your password?</a>
            <Link to='/' type="submit" className="btn signin-btn">Sign In</Link>
          </form>
        </div>

        {/* Overlay */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <Link to='#' className="btn" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
