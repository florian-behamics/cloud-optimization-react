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

export function GeneratedSpecs() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <PageContainer>
      <DashboardHeader title="Generated Specs" />
      <Divider />

      <Box sx={{ mt: 5 }}>
        <Paper
          elevation={0}
          sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}
        >
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
                <CloudIcon sx={{ color: 'primary.700', fontSize: 20 }} />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Cloud Provider
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 4 }}>
              <Button variant="outlined" sx={{ fontSize: '0.8rem', px: 1.5, py: 0.5 }}>
                Our Solution
              </Button>
              <Button variant="contained" sx={{ fontSize: '0.8rem', px: 1.5, py: 0.5 }}>
                Compare Providers
              </Button>
              <Typography
                sx={{ color: 'success.main', fontWeight: 500, ml: 1, fontSize: '0.9rem' }}
              >
                40% Cheaper
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              mb: showDetails ? 3 : 0,
            }}
            onClick={() => setShowDetails(!showDetails)}
          >
            <IconButton size="small">
              {showDetails ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </IconButton>
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
              {showDetails ? 'Hide Details' : 'Show Details'}
            </Typography>
          </Box>

          {showDetails && (
            <>
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
                    <ComputerIcon sx={{ color: 'primary.700', fontSize: 20 }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Virtual Machines
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', ml: 'auto' }}>
                    $135/mo
                  </Typography>
                </Box>
                <Stack spacing={1} sx={{ ml: 4 }}>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Vm1 (8 vCPUs, 8GB RAM, 150GB storage) - $75/mo
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    Vm2 (8 vCPUs, 3GB RAM, 150GB storage) - $60/mo
                  </Typography>
                </Stack>
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
                    <StorageIcon sx={{ color: 'primary.700', fontSize: 20 }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Databases
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', ml: 'auto' }}>
                    $100/mo
                  </Typography>
                </Box>
                <Stack spacing={1} sx={{ ml: 4 }}>
                  <Typography sx={{ fontSize: '0.9rem' }}>DB1 - MongoDb - $50/mo</Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>DB2 - MongoDb - $50/mo</Typography>
                </Stack>
              </Box>
            </>
          )}

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}
          >
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700 }}>
              Total Cost:
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700 }}>
              $235/mo
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3 }}>
            <Button variant="outlined" sx={{ fontSize: '0.8rem', px: 1.5, py: 0.5 }}>
              Modify Answer
            </Button>
            <Button variant="contained" sx={{ fontSize: '0.8rem', px: 1.5, py: 0.5 }}>
              Approve
            </Button>
          </Box>
        </Paper>
      </Box>
    </PageContainer>
  );
}

export default GeneratedSpecs;
