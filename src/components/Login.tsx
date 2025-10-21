import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhysicsLoading from './loadingStatement/PhysicsLoading.tsx';
import ContentSection from './contentSection.tsx';
import { BrowserRouter } from 'react-router-dom';

const USERNAME = 'a';
const PASSWORD = 'a';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
      setError('');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLoggedIn(true);
      }, 2000);
    } else {
      setError('Invalid username or password');
    }
  };

  if (loggedIn) {
    // Wrap ContentSection in BrowserRouter to provide Router context
    return (
      <BrowserRouter>
        <ContentSection />
      </BrowserRouter>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, rgba(25,118,210,0.7) 60%, rgba(144,202,249,0.7) 100%), 
                     url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80') 
                     center/cover no-repeat`,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          p: 5,
          borderRadius: 5,
          minWidth: 350,
          maxWidth: 380,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(6px)',
          background: 'rgba(255,255,255,0.85)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {loading && <PhysicsLoading />}
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" align="center" fontWeight={700} color="primary" gutterBottom>
          Everyday Physics
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 2 }}>
          Welcome! Please sign in to continue.
        </Typography>

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            sx={{ borderRadius: 2, background: '#f5f5f5' }}
            disabled={loading}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: 2, background: '#f5f5f5' }}
            disabled={loading}
          />
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderRadius: 3,
              boxShadow: '0 4px 20px 0 rgba(25,118,210,0.15)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.04)' },
            }}
            disabled={loading}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
