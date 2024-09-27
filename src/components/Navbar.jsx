import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)', // Glass effect
        backdropFilter: 'blur(10px)', // Blur for glass effect
        border: '1px solid rgba(255, 255, 255, 0.3)', // Border for visibility
        boxShadow: 'none', // Remove default shadow
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            letterSpacing: '1.5px',
            color: '#ffffff', // Text color changed to white for contrast
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          BACK OFFICE PANEL
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/users"
          sx={{
            margin: '0 10px',
            fontWeight: 'bold',
            color: '#ffffff', // Text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
              color: '#fff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          USERS
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/task-lists"
          sx={{
            margin: '0 10px',
            fontWeight: 'bold',
            color: '#ffffff', // Text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
              color: '#fff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          TASK LIST
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/tasks"
          sx={{
            margin: '0 10px',
            fontWeight: 'bold',
            color: '#ffffff', // Text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
              color: '#fff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          TASKS
        </Button>
        <Button
          color="inherit"
          onClick={onLogout}
          sx={{
            margin: '0 10px',
            fontWeight: 'bold',
            backgroundColor: '#eee6e5', // Keep the same
            color: '#0e0e0e',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#ffffff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          LOGOUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
