import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  Stack,
  Container,
  IconButton,
  Collapse,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbPlus } from 'react-icons/tb';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import ExportOptimizationReportModal from '../components/ExportOptimizationReportModal';
import { DashboardHeader } from '../components/DashboardHeader';
import AppliedOptimizationTable from '../components/AppliedOptimizationTable';
export const AppliedOptimizationReport = () => {
  const [expanded, setExpanded] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openExportModal, setOpenExportModal] = useState(false);
  const navigate = useNavigate();
  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resizedVMs = [
    {
      id: 1,
      currentVM: 'Vm1 (8 vCPUs, 64GB RAM, 150GB storage, E2d3)',
      optimizedVM: '4 vCPUs, 32GB RAM, 64GB storage, E2d1',
      savings: 'Save $400 (2%)',
      reason: 'The avg CPU usage for the past 30 days has been below 40%',
    },
    {
      id: 2,
      currentVM: 'Vm2 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: 'Save $600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
  ];

  const migratedVMs = [
    {
      id: 1,
      currentVM: 'Vm1 (8 vCPUs, 64GB RAM, 150GB storage, E2d3)',
      optimizedVM: '4 vCPUs, 32GB RAM, 64GB storage, E2d1',
      savings: 'Save $400 (2%)',
      reason: 'The avg CPU usage for the past 30 days has been below 40%',
    },
    {
      id: 2,
      currentVM: 'Vm2 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: 'Save $600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
  ];

  return (
    <PageContainer>
      <DashboardHeader
        title="Applied Optimization Report"
        // subtitle="Welcome back, Ally"
        actions={
          <Stack spacing={1} direction="row">
            <Button
              variant="contained"
              color="primary"
              startIcon={<TbPlus />}
              onClick={() => {
                setOpenExportModal(true);
              }}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              Export
            </Button>
          </Stack>
        }
      />
      <Divider orientation="horizontal" flexItem />
      {/* <Box>
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 6 }}>
            Optimizations Found
          </Typography>

          {[
            { title: '10 VMs have been resized', list: resizedVMs, prefix: 'resized' },
            { title: '5 VMs migrated into 3 VMs', list: migratedVMs, prefix: 'migrated' },
          ].map(({ title, list, prefix }) => (
            <Box key={prefix} sx={{ mt: 4 }}>
              <Box
                display="grid"
                gridTemplateColumns="40px 3fr 3fr 1fr 50px"
                sx={{ fontWeight: 'bold', pb: 1, borderBottom: '2px solid #ddd' }}
              >
                <Box></Box>
                <Typography variant="body2">{title}</Typography>
                <Typography variant="body2">Savings: 4000$</Typography>
                <Typography variant="body2">%</Typography>
                <Box></Box>
              </Box>

              {list.map((vm) => (
                <Box key={`${prefix}-${vm.id}`}>
                  <Box
                    display="grid"
                    gridTemplateColumns="40px 3fr 3fr 1fr 50px"
                    alignItems="center"
                    sx={{ py: 1, borderBottom: '1px solid #ddd' }}
                  >
                    <Box></Box>
                    <Typography variant="body2">{vm.currentVM}</Typography>
                    <Typography variant="body2">{vm.optimizedVM}</Typography>
                    <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                      {vm.savings}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 22 }}>You saved 30%</Typography>
              <Button
                onClick={() => navigate('/dashboard/monitor-vms')}
                variant="contained"
                color="primary"
              >
                Monitor
              </Button>
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 17 }}>$20000/mo to $14000/mo</Typography>
          </Box>
        </Paper>
      </Box> */}
      <AppliedOptimizationTable />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate('/dashboard/single-monitor-vm');
          }}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          Monitor
        </Button>
      </Box>
      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
      <ExportOptimizationReportModal
        open={openExportModal}
        onClose={() => setOpenExportModal(false)}
      />
    </PageContainer>
  );
};

export default AppliedOptimizationReport;
