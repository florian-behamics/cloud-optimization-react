import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
  Divider,
  Tabs,
  Tab,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';

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

export const ApplyOptimizationsFinish = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <DashboardHeader title="Optimization Summary" />
      <Stack>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Others..." {...a11yProps(1)} />
        </Tabs>
        <Divider />
      </Stack>
      <Box>
        {/* Navbar */}

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
              onClick={() => navigate('/dashboard/applied-optimization-report')}
              variant="contained"
              color="primary"
            >
              View Details
            </Button>
          </Box>
        </Paper>
      </Box>
    </PageContainer>
  );
};

export default ApplyOptimizationsFinish;
