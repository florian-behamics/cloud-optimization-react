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
import { formatAbbreviatedNumber, formatShortDate } from '../core/formatters';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import { SimpleLineChart } from '../components/SimpleLineChart';
import { DashboardHeader } from '../components/DashboardHeader';

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

export const CloudCostHistory = () => {
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
      <DashboardHeader title="Cloud Cost Analysis" />
      <Stack>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Others..." {...a11yProps(1)} />
        </Tabs>
        <Divider />
      </Stack>
      <Box>
        <Paper sx={{ mt: 4, p: 3, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', height: 200 }}>
            <SimpleLineChart
              dataset={MINI_TIMESERIES}
              xAxis={[
                {
                  ...COMMON_X_CONFIG,
                  valueFormatter: formatShortDate,
                  tickNumber: 7,
                  tickLabelInterval: 'preserveStartEnd',
                },
              ]}
              yAxis={[
                {
                  tickValues: [0, 500, 1000],
                  valueFormatter: (value) => `$${value}`,
                },
              ]}
              series={[
                {
                  dataKey: 'value',
                  valueFormatter: (value) => (value ? `$${formatAbbreviatedNumber(value)}` : ''),
                  curve: 'linear',
                  label: 'CPU Usage',
                  // area: true,
                  // stroke: '#1976d2',
                  stroke: '#ADD8E6',
                  // color: '#ADD8E6',
                  // fill: '#FF0000',
                },
              ]}
            />
          </Box>
        </Paper>

        {/* History Table */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
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
                  onClick={() => navigate('/applied-optimization-report')}
                  sx={{ textTransform: 'none' }}
                >
                  View
                </Button>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageContainer>
  );
};
const MINI_TIMESERIES = [
  { date: '2021-01-01', value: 1210 },
  { date: '2021-01-02', value: 980 },
  { date: '2021-01-03', value: 1400 },
  { date: '2021-01-04', value: 1510 },
  { date: '2021-01-05', value: 2560 },
  { date: '2021-01-06', value: 1310 },
  { date: '2021-01-07', value: 1010 },
];

export default CloudCostHistory;
