import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, Stack, Divider } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import ApplyConfigurationsModal from '../components/ApplyConfigurationsModal';
import { DashboardHeader } from '../components/DashboardHeader';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function CloudProviderComparison() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <PageContainer>
      <DashboardHeader
        // title="Cloud Provider Comparison"
        // subtitle="Welcome back, Ally"
        actions={<Stack spacing={1} direction="row"></Stack>}
      />
      <Divider orientation="horizontal" flexItem />
      <Box sx={{ width: '100%' }}>
        <Box>
          {/* Header */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', mb: 6, justifyContent: 'space-between' }}
          >
            {/* Left-aligned Button */}

            <FaArrowLeftLong
              color="gray"
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />

            {/* Centered Title */}
            <Typography
              variant="h4"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2.4rem' },
                flexGrow: 1, // Pushes text to center
                textAlign: 'center',
              }}
            >
              Cloud Provider Comparison
            </Typography>

            {/* Invisible Box for Centering Trick */}
            <Box sx={{ width: 40 }} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                broadcastTour('welcome');
              }}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              View Details
            </Button>
          </Box>

          {/* Main Content */}
          <Box sx={{ display: 'flex', gap: 4, width: '100%' }}>
            {/* Left Column - Our Solution */}
            <Box sx={{ flex: 1 }}>
              <Stack spacing={3}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    // maxHeight: 350,
                    height: '100%',
                  }}
                >
                  {/* Header Section with Icon and Title */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 3,
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 1,
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ComputerIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        flex: 1,
                        fontSize: '1.25rem',
                      }}
                    >
                      Our Solution
                    </Typography>

                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => navigate('/dashboard/generated-specs')}
                    >
                      See Generated Specs
                    </Button>
                  </Box>

                  {/* Savings & Pricing Section */}
                  <Box
                    sx={{
                      textAlign: 'center',
                      mb: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        mb: 1,
                      }}
                    >
                      Save 40% on Cloud Costs
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 700,
                        fontSize: '2rem',
                        mb: 2,
                      }}
                    >
                      $235/month
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 400,
                        fontSize: '1rem',
                        mb: 4,
                      }}
                    >
                      Experience the best pricing with our solution compared to leading providers.
                    </Typography>
                  </Box>
                </Paper>
                {/* Call-to-Action Button */}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpenModal(true)}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  Create Solution
                </Button>
              </Stack>
            </Box>

            {/* Vertical Divider */}
            <Divider orientation="vertical" flexItem sx={{ borderColor: 'divider' }} />

            {/* Right Column - Cloud Providers */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack spacing={5}>
                {[
                  { provider: 'Azure', cost: '$384/mo', icon: <VscAzure size={25} /> },
                  { provider: 'AWS', cost: '$395/mo', icon: <FaAws size={25} /> },
                  { provider: 'GCP', cost: '$405/mo', icon: <DiGoogleCloudPlatform size={25} /> },
                ].map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      minHeight: '110px',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        width: '150px',
                        px: 2,
                        py: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {item.icon}
                      {item.provider}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: 'lg',
                      }}
                    >
                      {item.cost}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <ApplyConfigurationsModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageContainer>
  );
}

export default CloudProviderComparison;
