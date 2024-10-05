import "./App.css";
import React, { useState } from 'react';
import UserInputButtons from "./components/UserInputButtons";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');


  const handleSuccess = (response) => {
        console.log('Login Success:', response);
        const token = response.credential;
        console.log('Google JWT Token:', token);
        localStorage.setItem('googleToken', token);

        const decoded = jwtDecode(token);
        console.log(decoded); // Visualizza i dati decodificati per verifica

        setUserName(decoded.name);
        setUserPicture(decoded.picture);
        setIsAuthenticated(true);
  };

  const handleFailure = (error) => {
        console.log('Login Failed:', error);
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


  return (
    <div className="App">
      <header className="App-header">
        <div className="user-info">
          <img src={userPicture} alt={`${userName}'s profile`} />
          <span>{userName}</span>
        </div>
        <UserInputButtons />
      </header>
    </div>
  );
}

export default App;
