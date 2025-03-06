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
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { formatAbbreviatedNumber, formatShortDate } from '../core/formatters';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import { SimpleLineChart } from '../components/SimpleLineChart';

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

export const CloudCostHistory = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);

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
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {/* Navbar */}
        <AppBar
          position="static"
          color="white"
          elevation={1}
          sx={{ borderRadius: 3, mt: 1, width: '100%', backgroundColor: 'white' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Cloud Cost History
            </Typography>
            <Typography sx={{ fontWeight: 400, color: 'secondary.main' }}>
              Last Optimization: 23/02/2025
            </Typography>
          </Toolbar>
          <Tabs
            value={tabValue}
            onChange={(event, newValue) => setTabValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            sx={{ ml: 3, mb: 1 }}
          >
            <Tab label="Overview" />
            <Tab label="Others..." />
          </Tabs>
        </AppBar>
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
      </Container>
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
