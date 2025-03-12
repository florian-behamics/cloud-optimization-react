import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  Stack,
  Grid,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { TbAlertTriangle, TbArrowRight, TbCheck, TbColorSwatch } from 'react-icons/tb';
import { formatAbbreviatedNumber, formatShortDate } from '../core/formatters';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import { SimpleLineChart } from '../components/SimpleLineChart';
import { DashboardHeader } from '../components/DashboardHeader';
import { FaJenkins } from 'react-icons/fa';
import { ChartCard } from '../components/ChartCard';
import CloudCostTable from '../components/CloudCostTable';
import { FrameworkLink } from '../framework/FrameworkLink';
import DeploymentLogsTable from '../components/DeploymentLogsTable';

const historyData = [
  {
    id: 1,
    date: '23/02/2025',
    type: 'VM Resize',
    description: '10 VMs have been resized',
    savings: '4000$',
    percentage: '20%',
  },
  {
    id: 2,
    date: '20/02/2025',
    type: 'VM Migration',
    description: '5 VMs migrated into 3 VMs',
    savings: '2000$',
    percentage: '10%',
  },
  {
    id: 3,
    date: '15/02/2025',
    type: 'VM Resize',
    description: '8 VMs have been resized',
    savings: '3000$',
    percentage: '15%',
  },
];

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

export const AppDeployCiCdFinish = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [value, setValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const COMMON_X_CONFIG = {
    id: 'categories',
    dataKey: 'date',
    scaleType: 'band',
  };

  const lineData = [
    { date: 'Feb 17', usage: 500 },
    { date: 'Feb 18', usage: 600 },
    { date: 'Feb 19', usage: 700 },
    { date: 'Feb 20', usage: 750 },
    { date: 'Feb 21', usage: 650 },
    { date: 'Feb 22', usage: 680 },
    { date: 'Feb 23', usage: 620 },
    { date: 'Feb 24', usage: 400 },
  ];

  return (
    <PageContainer>
      <DashboardHeader title="App Deployment" />
      <Stack>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Others..." {...a11yProps(1)} />
        </Tabs>
        <Divider />
      </Stack>
      <Box>
        <Box
          id="home-alert"
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 1,
            fontSize: 'sm',
            padding: 1.5,
            border: (theme) => `1px dashed ${theme.palette.blue['400']}`,
            backgroundColor: 'blue.50',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 1,
                backgroundColor: 'blue.100',
                borderRadius: 999,
                color: 'blue.800',
              }}
            >
              <TbCheck size={20} color="blue" />
            </Box>

            <Box
              sx={{
                width: '100%',
              }}
            >
              App has been deployed successfully.
            </Box>
          </Box>
          {/* <Button
            color="secondary"
            onClick={() => {
              document.getElementById('home-alert')?.remove();
            }}
          >
            Ignore
          </Button> */}
          <FrameworkLink to="/dashboard/monitor-vms">
            <Button endIcon={<TbArrowRight />}>Monitor</Button>
          </FrameworkLink>
        </Box>

        <Box
          sx={{
            display: 'flex',
            // alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            mt: 4,
            gap: 1,
            fontSize: 'sm',
            padding: 1.5,
            // border: (theme) => `1px dashed ${theme.palette.blue['400']}`,
            border: '1px solid #ddd',
            // backgroundColor: 'blue.50',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              mb: 2,
              gap: 3,
            }}
          >
            <Typography>Jenkins Connection</Typography>
            <FaJenkins size={40} color="black" />
          </Box>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Connect using command below:
          </Typography>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 2 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              username: jenkins_user387
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 1.3, width: '100%', bgcolor: 'grey.100', mb: 2 }}>
            <Typography variant="body1" sx={{ fontSize: 14 }}>
              password: ************
            </Typography>
          </Paper>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 500, mt: 4 }}>
          Deployment Logs
        </Typography>

        <DeploymentLogsTable />

        {/* History Table */}
        {/* <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 6 }}>
            Optimization History
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 2fr 1fr 1fr 100px"
            sx={{ fontWeight: 'bold', pb: 1, borderBottom: '2px solid #ddd' }}
          >
            <Typography variant="body2">Date</Typography>
            <Typography variant="body2">Type</Typography>
            <Typography variant="body2">Description</Typography>
            <Typography variant="body2">Savings</Typography>
            <Typography variant="body2">Optimization %</Typography>
            <Box></Box>
          </Box>

          {historyData.map((item) => (
            <Box key={item.id}>
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr 2fr 1fr 1fr 100px"
                alignItems="center"
                sx={{ py: 2, borderBottom: '1px solid #ddd' }}
              >
                <Typography variant="body2">{item.date}</Typography>
                <Typography variant="body2">{item.type}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  {item.savings}
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  {item.percentage}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate('/dashboard/applied-optimization-report')}
                  sx={{ textTransform: 'none' }}
                >
                  View
                </Button>
              </Box>
            </Box>
          ))}
        </Paper> */}
      </Box>
      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageContainer>
  );
};
const MINI_TIMESERIES2 = [
  { date: '2021-01-01', value: 1210 },
  { date: '2021-01-02', value: 980 },
  { date: '2021-01-03', value: 1400 },
  { date: '2021-01-04', value: 1510 },
  { date: '2021-01-05', value: 2560 },
  { date: '2021-01-06', value: 1310 },
  { date: '2021-01-07', value: 1010 },
];

export default AppDeployCiCdFinish;
