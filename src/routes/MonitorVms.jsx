import React from 'react';
import { Container, Typography, Box, Paper, Button, Stack, Divider } from '@mui/material';
import { PieChart, LineChart, ChartsGrid } from '@mui/x-charts';
import { SimpleLineChart } from '../components/SimpleLineChart';
import { formatAbbreviatedNumber, formatShortDate } from '../core/formatters';
import { PageContainer } from '../components/PageContainer';
import { DashboardHeader } from '../components/DashboardHeader';
import { SimplePieChart } from '../components/SimplePieChart';
import { ChartCard } from '../components/ChartCard';
import { DUMMY_TIMESERIES } from '../data/timeseries';

const customPalette = ['#ADD8E6', '#4A90E2', '#D3D3D3'];

const cpuData = [
  { id: 0, value: '30' },
  { id: 1, value: '70' },
  { id: 2, value: '70' },
];
const ramData = [
  { id: 0, value: '45' },
  { id: 1, value: '55' },
  { id: 2, value: '70' },
];

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

export const MonitorVms = (props) => {
  return (
    <PageContainer>
      <DashboardHeader
        title="Monitor Virtual Machines"
        // subtitle="Welcome back, Ally"
        actions={<Stack spacing={1} direction="row"></Stack>}
      />
      <Divider orientation="horizontal" flexItem />
      <Box sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: 32 }}>
            39 VMs
          </Typography>
          <Typography>25-01/2025 - 25/02/2025</Typography>
        </Box>
        <Typography variant="body2" sx={{ fontSize: 18, color: 'secondary.main' }}>
          25 running 14 deallocated
        </Typography>

        <ChartGrid>
          <ChartCard title="CPU Usage" description="Sales by event">
            <SimplePieChart
              dataset={DUMMY_TIMESERIES}
              colors={customPalette}
              slotProps={{
                legend: { hidden: true },
              }}
              series={[
                {
                  data: [
                    { label: 'Max CPU  Usage', value: 1200 },
                    { label: 'Min CPU Usage', value: 880 },
                    { label: 'Average CPU Usage', value: 175 },
                  ],
                },
              ]}
            />
          </ChartCard>
          <ChartCard title="RAM Usage" description="Sales by event">
            <SimplePieChart
              dataset={DUMMY_TIMESERIES}
              slotProps={{
                legend: { hidden: true },
              }}
              series={[
                {
                  data: [
                    { label: 'Max RAM Usage', value: 1200 },
                    { label: 'Min RAM Usage', value: 500 },
                    { label: 'Average RAM Usage', value: 375 },
                  ],
                },
              ]}
            />
          </ChartCard>
        </ChartGrid>

        <Box sx={{ mt: 4 }}>
          <ChartCard title="CPU Usage" description="Average CPU Usage %">
            <SimpleLineChart
              dataset={MINI_TIMESERIES}
              yAxis={[
                {
                  tickValues: [0, 200, 1000],
                  valueFormatter: (value) => `${value}%`,
                },
              ]}
              xAxis={[
                {
                  ...COMMON_X_CONFIG,
                  valueFormatter: formatShortDate,
                  tickNumber: 7,
                  tickLabelInterval: 'preserveStartEnd',
                },
              ]}
              series={[
                {
                  dataKey: 'value',
                  valueFormatter: (value) => (value ? `${value}%` : ''),
                  curve: 'linear',
                  label: 'CPU Usage',
                },
              ]}
            />
          </ChartCard>
        </Box>

        <Box sx={{ mt: 4 }}>
          <ChartCard title="RAM Usage" description="Average RAM Usage %">
            <SimpleLineChart
              dataset={MINI_TIMESERIES2}
              yAxis={[
                {
                  valueFormatter: (value) => `${value}%`,
                },
              ]}
              xAxis={[
                {
                  ...COMMON_X_CONFIG,
                  valueFormatter: formatShortDate,
                  tickNumber: 2,
                  tickLabelInterval: 'preserveStartEnd',
                },
              ]}
              series={[
                {
                  dataKey: 'value',
                  valueFormatter: (value) => (value ? `${value}%` : ''),
                  curve: 'linear',
                  label: 'RAM Usage',
                  // area: true,
                },
              ]}
            />
          </ChartCard>
        </Box>

        {/* Optimizations Found */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Optimizations found
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 500, color: 'secondary.main' }}>
                Save 30% (400$)
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Report Time: 25/02/2025
            </Typography>
          </Box>

          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ width: '71%', fontSize: 'lg' }}>
              10 VMs to be resized
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
              <Typography sx={{ color: 'text.secondary' }}>Savings: $4000/mo</Typography>
              <Typography sx={{ color: 'text.secondary' }}>20%</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ width: '71%', fontSize: 'lg' }}>
              5 VMs to be migrated into 3 VMs
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
              <Typography sx={{ color: 'text.secondary' }}>Savings: $2000/mo</Typography>
              <Typography sx={{ color: 'text.secondary' }}>10%</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'end', gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ fontSize: '0.8rem', py: 1 }}
              // onClick={() => setOpenModal(true)}
            >
              View More
            </Button>
            <Button
              // onClick={() => navigate('/optimization-result-report')}
              variant="contained"
              color="primary"
              sx={{ fontSize: '0.8rem', py: 1 }}
            >
              Apply
            </Button>
          </Box>
        </Paper>
      </Box>
    </PageContainer>
  );
};
function ChartGrid({ children }) {
  return (
    <Box
      sx={{
        display: { xs: 'grid', md: 'grid' },
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
        },
        gridAutoRows: '350px',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
}
const MINI_TIMESERIES = [
  { date: '2021-01-01', value: 30 },
  { date: '2021-01-02', value: 35 },
  { date: '2021-01-03', value: 100 },
  { date: '2021-01-04', value: 80 },
  { date: '2021-01-05', value: 75 },
  { date: '2021-01-06', value: 13 },
  { date: '2021-01-07', value: 100 },
];
const MINI_TIMESERIES2 = [
  { date: '2021-01-01', value: 10 },
  { date: '2021-01-02', value: 10 },
  { date: '2021-01-03', value: 30 },
  { date: '2021-01-04', value: 50 },
  { date: '2021-01-05', value: 40 },
  { date: '2021-01-06', value: 90 },
  { date: '2021-01-07', value: 95 },
];

export default MonitorVms;
