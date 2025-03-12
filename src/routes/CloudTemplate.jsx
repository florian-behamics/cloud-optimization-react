import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function CloudTemplate() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <PageContainer>
      <DashboardHeader title="Cloud Template" />
      <Divider />
      <FaArrowLeftLong color="gray" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />

      <Box sx={{ mt: 5 }}>
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: 'success.main',
            textAlign: 'right',
            fontWeight: 600,
            mb: 2,
          }}
        >
          Ready for Deployment
        </Typography>
        <Paper
          elevation={0}
          sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}
        >
          <Box sx={{ mb: 3 }}></Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  bgcolor: 'primary.50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ComputerIcon sx={{ color: 'primary.700', fontSize: 50 }} />
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: '22px' }}>Virtual Machines</Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: '0.9rem', color: 'success.main', ml: 'auto' }}
              >
                2/2 Running
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  bgcolor: 'primary.50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <StorageIcon sx={{ color: 'primary.700', fontSize: 50 }} />
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: '22px' }}>Databases</Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: '0.9rem', color: 'success.main', ml: 'auto' }}
              >
                2/2 Running
              </Typography>
            </Box>
          </Box>

          {showDetails && <></>}

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}
          ></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
            <Button
              onClick={() => navigate('/dashboard/cloud-template/details')}
              variant="outlined"
              color="secondary"
            >
              View Details
            </Button>
          </Box>
        </Paper>
        <Box sx={{ display: 'flex', p: 2, justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
          <Button
            onClick={() => navigate('/dashboard/monitor-vms')}
            variant="outlined"
            color="secondary"
          >
            Monitor
          </Button>
          <Button
            onClick={() => navigate('/dashboard/cloud-template/deploy-app')}
            variant="contained"
            color="primary"
          >
            Deploy App
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default CloudTemplate;
