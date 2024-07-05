import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Connections from './Components/Connections';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Doctor from './Components/Doctor';
import Appointment from './Components/Appointment';
import Settings from './Components/Settings';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import PrivateAcc from './Components/PrivateAcc';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <Router>
      <div className={`app-container`}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/doctors" element={<Doctor />} />
              {/* <Route path="/appointments" element={<Appointment />} /> */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/privateacc" element={<PrivateAcc />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
