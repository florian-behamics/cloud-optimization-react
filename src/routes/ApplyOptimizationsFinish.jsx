import React from 'react';
import { AppBar, Toolbar, Typography, Box, Paper, Button, Container } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export const ApplyOptimizationsFinish = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        {/* Navbar */}
        <AppBar
          position="static"
          color="white"
          elevation={1}
          sx={{ borderRadius: 3, backgroundColor: 'white' }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Optimization Summary
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Summary Section */}
        <Paper elevation={2} sx={{ p: 3, mt: 3, borderRadius: 3 }}>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Optimizations result
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Created At: 25/02/2025
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography variant="body1">10 VMs resized</Typography>
            <Typography variant="body1">Savings: $4000/mo &nbsp; 20%</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
            <Typography variant="body1">5 VMs have been migrated 3 VMs</Typography>
            <Typography variant="body1">Savings: $2000/mo &nbsp; 10%</Typography>
          </Box>

          {/* View Details Button */}
          <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Button
              onClick={() => navigate('/applied-optimization-report')}
              variant="contained"
              color="primary"
            >
              View Details
            </Button>
          </Box>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default ApplyOptimizationsFinish;
