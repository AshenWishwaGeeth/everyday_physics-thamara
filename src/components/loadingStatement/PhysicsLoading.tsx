import React from 'react';
import { Box, Typography } from '@mui/material';

const PhysicsLoading: React.FC = () => (
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      zIndex: 10,
      background: 'rgba(255,255,255,0.35)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: 120,
        height: 120,
        mb: 1,
        animation: 'spinCircle 1.5s linear infinite',
        '@keyframes spinCircle': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    >
      {Array.from('Physics').map((char, i, arr) => {
        const angle = (360 / arr.length) * i;
        const radius = 48;
        const rad = (angle * Math.PI) / 180;
        const x = 60 + radius * Math.cos(rad) - 12;
        const y = 60 + radius * Math.sin(rad) - 12;
        return (
          <Typography
            key={i}
            variant="h5"
            sx={{
              position: 'absolute',
              left: x,
              top: y,
              fontWeight: 'bold',
              color: 'primary.main',
              letterSpacing: 2,
              width: 24,
              height: 24,
              textAlign: 'center',
              userSelect: 'none',
              textShadow: '0 2px 8px rgba(25,118,210,0.18)',
            }}
          >
            {char}
          </Typography>
        );
      })}
    </Box>
=
  </Box>
);

export default PhysicsLoading;