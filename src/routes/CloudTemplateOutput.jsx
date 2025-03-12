import React from 'react';
import { Box, Typography, Paper, Button, Container, Stack, Divider } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const CloudTemplateOutput = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <DashboardHeader
        title="Cloud Template Output"
        // subtitle="Welcome back, Ally"
        actions={
          <Stack spacing={1} direction="row">
            {/* <Button
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
            </Button> */}
          </Stack>
        }
      />
      <Divider orientation="horizontal" flexItem />

      <Box mt={2}>
        {' '}
        {/* Reduced size to 'sm' for a smaller layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            minHeight: '70vh',
            textAlign: 'left',
            maxWidth: 500, // Reduced width for a smaller component
            // ml: { xs: 2, sm: 4 }, // Adjusted left margin
            // mt: { xs: 10, sm: 5 },
          }}
        >
          {/* <Typography
            variant="h5"
            sx={{ fontWeight: 700, fontSize: '1.8rem', color: 'text.primary', mb: 3 }}
          >
            Cloud Template Output
          </Typography> */}

          {/* GitHub Repo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: 'text.primary', fontSize: 18, mb: 1 }}
          >
            Github Repo Url
          </Typography>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 2 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              https://github.com/co-teemplate
            </Typography>
          </Paper>

          {/* Virtual Machine Connection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: 18, color: 'text.primary', mb: 1 }}
          >
            Virtual Machine Connection
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Connect using command below:
          </Typography>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 1 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              username: guid password: guid
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 3 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              sudo ssh azureuser@X.X.X.X
            </Typography>
          </Paper>

          {/* Database Connection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: 18, color: 'text.primary', mb: 1 }}
          >
            Database Connection
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Use connection string below:
          </Typography>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 3 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              Server=X.X.X.X;Database=Blah;...
            </Typography>
          </Paper>

          {/* Finish Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard/cloud-template')}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            View Template
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default CloudTemplateOutput;
