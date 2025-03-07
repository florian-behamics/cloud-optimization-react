import { Button, Typography, Fade, Box } from '@mui/material';
import { TbArrowRight } from 'react-icons/tb';
import { AuthOptimizeCloud } from '../components/getting-started/AuthOptimizeCloud';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
import React, { useState, useEffect } from 'react';

export function OptimizeSignToCloud() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <PageContainer
      customSx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={fadeIn} timeout={700}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <AuthOptimizeCloud />

          <Typography>Grant Consent to continue</Typography>
        </Box>
      </Fade>
    </PageContainer>
  );
}
