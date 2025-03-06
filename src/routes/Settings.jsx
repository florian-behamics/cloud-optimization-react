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
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
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

export const Settings = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [costAuditEnabled, setCostAuditEnabled] = useState(true);
  const [auditFrequency, setAuditFrequency] = useState('weekly');
  const [newEmail, setNewEmail] = useState('');
  const [emailList, setEmailList] = useState(['admin@example.com', 'finance@example.com']);

  const handleAddEmail = () => {
    if (newEmail && !emailList.includes(newEmail)) {
      setEmailList([...emailList, newEmail]);
      setNewEmail('');
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmailList(emailList.filter((email) => email !== emailToRemove));
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
              Settings
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

        {/* Settings Section */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
            Cost Optimization Settings
          </Typography>

          {/* Cost Audit Settings */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={costAuditEnabled}
                  onChange={(e) => setCostAuditEnabled(e.target.checked)}
                  color="primary"
                />
              }
              label="Optimize Cost Audit + Report"
            />
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={auditFrequency}
                onChange={(e) => setAuditFrequency(e.target.value)}
                disabled={!costAuditEnabled}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Email List Management */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Email Recipients
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                size="small"
                placeholder="Enter email address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                disabled={!costAuditEnabled}
                sx={{ flex: 1 }}
              />
              <IconButton
                onClick={handleAddEmail}
                disabled={!costAuditEnabled || !newEmail}
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </Box>
            <List>
              {emailList.map((email) => (
                <ListItem key={email}>
                  <ListItemText primary={email} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveEmail(email)}
                      disabled={!costAuditEnabled}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>

        {/* History Table */}
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

export default Settings;
