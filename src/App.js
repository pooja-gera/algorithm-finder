import "./App.css";
import React, { useState, useEffect } from 'react';
import UserInputButtons from "./components/UserInputButtons";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import VisitorCounter from './VisitorCounter';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/visitor-count', { method: 'POST' });
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };
    fetchVisitorCount();
  }, []);

  const renderDigits = (count) => {
    return String(count).split('').map((digit, index) => (
      <div key={index} className="flip-digit">
        <span>{digit}</span>
      </div>
    ));
  };

  const handleSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);

    localStorage.setItem('googleToken', token);

    setUserName(decoded.name);
    setUserPicture(decoded.picture);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('googleToken');
    setIsAuthenticated(false);
    setUserName('');
    setUserPicture('');
  };

  const handleFailure = (error) => {
        console.log('Login Failed:', error);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  if (!isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please, login to use Algorithm Finder</h1>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleFailure}
          />
        </header>
      </div>
    );
  }

  console.log(userPicture)


  return (
    <div className="App">
      <header className="App-header">
        <div className="user-info" onClick={toggleDropdown}>
          <img src={userPicture} alt={`${userName}'s profile`} />
          <span>{userName}</span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <UserInputButtons />
      </header>
      <footer className="App-footer">
        <h1>Visitor Count</h1>
        <VisitorCounter count={visitCount} />
      </footer>
    </div>
  );
}

export default App;
