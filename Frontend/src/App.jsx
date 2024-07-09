import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Settings from './Components/Settings';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import PrivateAcc from './Components/PrivateAcc';
import Messages from './Components/Messages';
import Staff from './Components/Staff';
import Search from './Components/Search';
import Documents from './Components/Documents';

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
              <Route path="/staff" element={<Staff />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/privateacc" element={<PrivateAcc />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/search" element={<Search />} />
              <Route path="/documents" element={<Documents />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
