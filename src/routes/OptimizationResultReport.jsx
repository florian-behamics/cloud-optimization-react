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
  Stack,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TbPlus } from 'react-icons/tb';
import { PageContainer } from '../components/PageContainer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ApplyConfigurationsOptimizationModal from '../components/ApplyConfigurationsOptimizationModal';
import ExportOptimizationReportModal from '../components/ExportOptimizationReportModal';
import { DashboardHeader } from '../components/DashboardHeader';
import OptimizationTable from '../components/OptimizationTable';

export const OptimizationResultReport = () => {
  const navigate = useNavigate();
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
    {
      id: 3,
      currentVM: 'Vm3 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: '$600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
    {
      id: 4,
      currentVM: 'Vm3 (8 vCPUs, 64GB RAM, 150GB storage, B4s)',
      optimizedVM: '8 vCPUs, 32GB RAM, 150GB storage, B2s',
      savings: '$600 (3%)',
      reason: 'The avg RAM usage for the past 30 days has been below 50%',
    },
  ];

  return (
    <PageContainer>
      <DashboardHeader
        title="Optimization Result Report"
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

      <OptimizationTable />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          Apply Optimizations
        </Button>
      </Box>
      {/* <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Button onClick={() => setOpenModal(true)} variant="contained" color="primary">
          Apply Optimizations
        </Button>
      </Box> */}

      <ApplyConfigurationsOptimizationModal open={openModal} onClose={() => setOpenModal(false)} />
      <ExportOptimizationReportModal
        open={openExportModal}
        onClose={() => setOpenExportModal(false)}
      />
    </PageContainer>
  );
};

export default OptimizationResultReport;
