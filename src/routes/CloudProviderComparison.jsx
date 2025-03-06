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

export function CloudProviderComparison() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <PageContainer>
      <Box>
        <Container maxWidth="lg">
          {/* Header */}
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                color: 'text.primary',
                mt: 25,
                width: '120px',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'action.hover',
                },
              }}
            >
              Back
            </Button>
            <Typography
              variant="h4"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2.4rem' },
                textAlign: 'center',
              }}
            >
              Cloud Provider Comparison
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: 'text.primary',
                mt: 25,
                width: '150px',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'action.hover',
                },
              }}
            >
              View Details
            </Button>
          </Box>

          {/* Main Content */}
          <Box sx={{ display: 'flex', gap: 4 }}>
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
                      onClick={() => navigate('/generated-specs')}
                      sx={{
                        color: 'text.primary',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'action.hover',
                        },
                        textTransform: 'none',
                        padding: '6px 20px',
                      }}
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

                  {/* Call-to-Action Button */}
                  <Button
                    onClick={() => setOpenModal(true)}
                    variant="contained"
                    fullWidth
                    sx={{
                      color: 'white',
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                      textTransform: 'none',
                      fontWeight: 600,
                      padding: '10px 0',
                    }}
                  >
                    Create Solution
                  </Button>
                </Paper>
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
              <Stack spacing={5.5}>
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
                      minHeight: '100px',
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
        </Container>
      </Box>

      {/* Modal */}
      <ApplyConfigurationsModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageContainer>
  );
}

export default CloudProviderComparison;
