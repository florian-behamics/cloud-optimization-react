import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Container, Fade } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export const CreatingCloud = () => {
  const [progress, setProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    const redirectTimeout = setTimeout(() => {
      navigate('/cloud-template-output'); // Redirect after 10s
    }, 11000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <PageContainer>
      <Container maxWidth="sm">
        <Fade in={fadeIn} timeout={700}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem' },
                color: 'text.primary',
              }}
            >
              Creating Optimized Cloud Template
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              It will be quick!
            </Typography>
            <Box sx={{ width: '100%', mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  bgcolor: 'action.hover',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'primary.main',
                  },
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Container>
    </PageContainer>
  );
};

export default CreatingCloud;
