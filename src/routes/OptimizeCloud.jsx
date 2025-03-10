//import { Button } from '@mui/material';
//import { TbInfoCircle } from 'react-icons/tb';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
import OptimizeCloudCards from '../components/getting-started/OptimizeCloudCards';
import StepForm from '../components/getting-started/StepForm';
import { useState } from 'react';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
// import { DiGoogleCloudPlatform } from 'react-icons/di';
import { SiGooglecloud } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';

export function OptimizeCloud() {
  const navigate = useNavigate();

  const handleRouteSteps = (option) => {
    navigate(option);
  };

  const features = [
    {
      title: 'Azure',

      icon: VscAzure,
      onClick: () => handleRouteSteps('/dashboard/optimize-sign-to-cloud'),
    },
    {
      title: 'AWS',

      icon: FaAws,
      onClick: () => handleRouteSteps('/dashboard/optimize-sign-to-cloud'),
    },
    {
      title: 'Google Cloud',

      icon: SiGooglecloud,
      onClick: () => handleRouteSteps('/dashboard/optimize-sign-to-cloud'),
    },
  ];

  return (
    <PageContainer>
      <DashboardHeader
        // title="Getting Started"
        // subtitle="Welcome back, Ally"
        actions={<Stack spacing={1} direction="row"></Stack>}
      />
      <Divider orientation="horizontal" flexItem />
      <Box
        sx={{
          //   bgcolor: 'background.paper',
          py: 8,
        }}
      >
        <Container
          maxWidth="md"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Box
            sx={{
              maxWidth: 'md',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                mb: 7,
                color: 'gray.900',
                fontWeight: 700,
                fontSize: { xs: '3xl', sm: '5xl' },
                lineHeight: 1.2,
                textWrap: 'balance',
                isolation: 'isolate',
              }}
            >
              Which Cloud do you use?
            </Typography>
            <Typography
              sx={{
                color: 'gray.600',
                fontSize: 'md',
                lineHeight: 1.75,
              }}
            >
              Select your cloud provider that you want to optimize.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 4,
              maxWidth: 'lg',
              mx: 'auto',
              display: 'flex',
              //   gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {features.map((feature) => (
              <OptimizeCloudCards
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                onClick={feature.onClick}
              />
            ))}
          </Box>

          <Box sx={{ maxWidth: 'md', mt: 6, textAlign: { lg: 'center' } }}>
            <Typography
              sx={{
                mt: 1.5,
                color: 'gray.600',
                fontSize: 'md',
                lineHeight: 1.75,
              }}
            >
              We need your cloud credentials to continue!
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                color: 'gray.600',
                fontSize: 'md',
                lineHeight: 1.75,
              }}
            >
              Please Sign In to your cloud and grant consent.
            </Typography>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}
