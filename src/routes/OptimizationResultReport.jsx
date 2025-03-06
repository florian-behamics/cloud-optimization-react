import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  Container,
  IconButton,
  Collapse,
  Checkbox,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import ExportOptimizationReportModal from '../components/ExportOptimizationReportModal';

export const OptimizationResultReport = () => {
  const [expanded, setExpanded] = useState({});
  const [selectedVMs, setSelectedVMs] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openExportModal, setOpenExportModal] = useState(false);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSelect = (key) => {
    setSelectedVMs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resizedVMs = [
    {
      id: 1,
      currentVM: 'Vm1 (8 vCPUs, 64GB RAM, 150GB storage, E2d3)',
      optimizedVM: '4 vCPUs, 32GB RAM, 64GB storage, E2d1',
      savings: '$400 (2%)',
      reason: 'The avg CPU usage for the past 30 days has been below 40%',
    },
    {
      id: 2,
      currentVM: 'Vm2 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: '$600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
  ];

  const migratedVMs = [
    {
      id: 1,
      currentVM: 'Vm1 (8 vCPUs, 64GB RAM, 150GB storage, E2d3)',
      optimizedVM: '4 vCPUs, 32GB RAM, 64GB storage, E2d1',
      savings: '$400 (2%)',
      reason: 'The avg CPU usage for the past 30 days has been below 40%',
    },
    {
      id: 2,
      currentVM: 'Vm2 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: '$600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ mt: 14 }}>
        <AppBar
          position="static"
          color="white"
          elevation={1}
          sx={{ borderRadius: 3, backgroundColor: 'white' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Optimization Result Report
            </Typography>
            <Button onClick={() => setOpenExportModal(true)} variant="contained" color="primary">
              Export
            </Button>
          </Toolbar>
        </AppBar>

        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 6 }}>
            Optimizations Found
          </Typography>

          {[
            { title: 'VMs to be Resized', list: resizedVMs, prefix: 'resized' },
            { title: 'VMs to be Migrated', list: migratedVMs, prefix: 'migrated' },
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
                    <Checkbox
                      checked={!selectedVMs[`${prefix}-${vm.id}`]}
                      onChange={() => toggleSelect(`${prefix}-${vm.id}`)}
                    />
                    <Typography variant="body2">{vm.currentVM}</Typography>
                    <Typography variant="body2">{vm.optimizedVM}</Typography>
                    <Typography variant="body2">{vm.savings}</Typography>
                    <IconButton onClick={() => toggleExpand(`${prefix}-${vm.id}`)}>
                      <ExpandMoreIcon
                        sx={{
                          transform: expanded[`${prefix}-${vm.id}`]
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                        }}
                      />
                    </IconButton>
                  </Box>

                  <Collapse in={expanded[`${prefix}-${vm.id}`]}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {vm.reason}
                      </Typography>
                      <Button variant="contained" color="primary">
                        Monitor
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Box>
          ))}

          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button onClick={() => setOpenModal(true)} variant="contained" color="primary">
              Apply Optimizations
            </Button>
          </Box>
        </Paper>
      </Container>
      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
      <ExportOptimizationReportModal
        open={openExportModal}
        onClose={() => setOpenExportModal(false)}
      />
    </PageContainer>
  );
};

export default OptimizationResultReport;
