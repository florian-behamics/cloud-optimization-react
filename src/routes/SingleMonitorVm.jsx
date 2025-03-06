import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { PieChart, LineChart } from '@mui/x-charts';
import { SimpleLineChart } from '../components/SimpleLineChart';
import { formatAbbreviatedNumber, formatShortDate } from '../core/formatters';

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

export const SingleMonitorVm = (props) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: 32 }}>
          Jenkins VM
        </Typography>
        <Typography>25-01/2025 - 25/02/2025</Typography>
      </Box>
      <Typography variant="body2" sx={{ fontSize: 18, color: 'secondary.main' }}>
        (8 vCPUs, 64GB RAM, 150GB storage), E2d3
      </Typography>

      {/* Donut Charts Section */}
      <Box display="flex" justifyContent="start" gap={6} mt={4}>
        <Paper
          sx={{
            p: 3,
            textAlign: 'center',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%', height: 250 }}>
            <PieChart
              series={[{ data: cpuData, innerRadius: 35, outerRadius: 75 }]}
              width={250}
              height={150}
              colors={customPalette}
            />
          </Box>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontSize: 26 }}>
              vCPUS: 8
            </Typography>
          </Box>
          <Typography variant="body2">Avg usage: 30%</Typography>
          <Typography variant="body2">Max usage: 50%</Typography>
        </Box>

        <Paper
          sx={{
            ml: 10,
            p: 3,
            textAlign: 'center',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%', height: 250 }}>
            <PieChart
              series={[{ data: ramData, innerRadius: 35, outerRadius: 75 }]}
              width={250}
              height={150}
              colors={customPalette}
            />
          </Box>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontSize: 26 }}>
              Total RAM: 64GB
            </Typography>
          </Box>
          <Typography variant="body2">Avg usage: 45%</Typography>
          <Typography variant="body2">Max usage: 80%</Typography>
        </Box>
      </Box>

      {/* Line Chart Section */}
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
          <Typography variant="body2" sx={{ fontSize: 'lg' }}>
            Rightsize to (4 vCPUs, 8 GB RAM, 64GB storage), E2d1
          </Typography>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ fontSize: 'sm', color: 'secondary.main' }}>
            The avg CPU usage for the past 30 days has been less than 40%, the avg RAM usage for the
            past 30 days has been less than 50%
          </Typography>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'end', gap: 2 }}>
          <Button
            // onClick={() => navigate('/optimization-result-report')}
            variant="contained"
            color="primary"
            sx={{ fontSize: '0.8rem', px: 6, py: 1 }}
          >
            Apply
          </Button>
        </Box>
      </Paper>
    </Container>
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

export default SingleMonitorVm;
