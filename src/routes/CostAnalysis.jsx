import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  Container,
  Grid,
  Tabs,
  Tab,
  Divider,
  FormControl,
  FormLabel,
  FilledInput,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextareaAutosize,
  Stack,
} from '@mui/material';
import { FileUpload } from '../components/FileUpload';
import { PageContainer } from '../components/PageContainer';
import { DatePicker } from '@mui/x-date-pickers';
import { DashboardHeader } from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { TbPlus } from 'react-icons/tb';
import { useDisclosure } from '../hooks/useDisclosure';
import { SimpleDrawer } from '../components/SimpleDrawer';

import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CostAnalysis = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(0);
  const newEventDisclosure = useDisclosure();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <DashboardHeader title="Cost Analysis" />
      <Stack>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Others..." {...a11yProps(1)} />
        </Tabs>
        <Divider />
      </Stack>

      <Box>
        {/* Cost Comparison Section */}
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1, // Ensures equal height
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  Optimized cloud cost{' '}
                  <span style={{ fontSize: '0.8rem', color: 'gray', marginLeft: 5 }}>
                    Estimated
                  </span>
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1, fontSize: '3xl' }}>
                    You save 30%
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
                    $14000/mo
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2, py: 1, fontSize: '0.8rem', width: '160px' }}
                  >
                    Audit Again
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, py: 1, fontSize: '0.8rem', width: '160px' }}
                    onClick={() => navigate('/dashboard/optimization-result-report')}
                  >
                    View Result Report
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flexGrow: 1, // Ensures equal height
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 'xl' }}>
                  Existing Compute Cost
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  39 virtual machines
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  24 running, 15 deallocated
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 1, fontSize: '3xl' }}>
                  $20000/mo
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Optimizations Found */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Optimizations found
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Report Time: 25/02/2025
            </Typography>
          </Box>

          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ width: '71%', fontSize: 'lg' }}>
              10 VMs to be resized
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '29%' }}>
              <Typography sx={{ color: 'text.secondary' }}>Savings: $4000/mo</Typography>
              <Typography sx={{ color: 'text.secondary' }}>20%</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ width: '71%', fontSize: 'lg' }}>
              5 VMs to be migrated into 3 VMs
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '29%' }}>
              <Typography sx={{ color: 'text.secondary' }}>Savings: $2000/mo</Typography>
              <Typography sx={{ color: 'text.secondary' }}>10%</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'end', gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ fontSize: '0.8rem', py: 1 }}
              onClick={() => setOpenModal(true)}
            >
              Apply Optimizations
            </Button>
            <Button
              onClick={() => navigate('/dashboard/optimization-result-report')}
              variant="contained"
              color="primary"
              sx={{ fontSize: '0.8rem', py: 1 }}
            >
              View Result Report
            </Button>
          </Box>
        </Paper>
      </Box>
      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageContainer>
  );
};

export default CostAnalysis;
