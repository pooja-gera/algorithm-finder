import React from "react";
import './styles.scss';
import UserInputButtons from "./UserInputButtons";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styling the Google Login Button
const GoogleLoginButton = styled(Button)({
    backgroundColor: '#635994', 
    color: '#fff',
    padding: '8px 24px',
    borderRadius: '4px',
    textTransform: 'none', 
    marginLeft: 'auto', 
    '&:hover': {
        backgroundColor: '#50477b', 
    },
    '&:active': {
        backgroundColor: '#2e2b48',
    },
});

const HomePage = () => {
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
                        <GoogleLoginButton variant="contained">
                            Login with Google
                        </GoogleLoginButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="main-content">
                <UserInputButtons />
            </div>
           
        </>
    );
};

export default HomePage;
