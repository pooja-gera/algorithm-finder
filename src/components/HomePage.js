import React, { useState, useEffect } from 'react';
import './styles.scss';
import './HomePage.css';
import UserInputButtons from "./UserInputButtons";
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import VisitorCounter from './VisitorCounter';


const HomePage = () => {
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

    const handleLogout = () => {
        localStorage.removeItem('googleToken');
        setIsAuthenticated(false);
        setUserName('');
        setUserPicture('');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSuccess = (response) => {
        const token = response.credential;
        const decoded = jwtDecode(token);

        localStorage.setItem('googleToken', token);

        setUserName(decoded.name);
        setUserPicture(decoded.picture);
        setIsAuthenticated(true);
    };

    const handleFailure = (error) => {
        console.log('Login Failed:', error);
    };

    if (!isAuthenticated) {
        return (
            <div className="Login-container">
                <header className="Login">
                    <h1>Please, login to use Algorithm Finder</h1>
                    <div className="google-login-wrapper">
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleFailure}
                            className="google-login-button"
                        />
                    </div>
                </header>
            </div>
        );
    }

    return (
        <>
            <Box>
                {/* AppBar (Navigation) */}
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        {/* Logo */}
                        <Typography variant="h4" component="div" sx={{ mr: 2, fontFamily: 'Pixelify Sans, sans-serif' }}>
                            👾
                        </Typography>

                        {/* Title */}
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1, color: 'white', fontFamily: 'Pixelify Sans, sans-serif' }}
                        >
                            Algorithm Finder
                        </Typography>

                        {/* Google Login Button */}
                        <div className="user-info" onClick={toggleDropdown}>
                            <img src={userPicture} alt={`${userName}'s profile`} />
                            <span>{userName}</span>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>

                    </Toolbar>
                </AppBar>
            </Box>
            <div className="main-content">
                <UserInputButtons />
            </div>
            <footer className="App-footer">
                <h1>Visitor Count</h1>
                <VisitorCounter count={visitCount} />
            </footer>
        </>
    );
};

export default HomePage;
