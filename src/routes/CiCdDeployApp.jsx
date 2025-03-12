import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Stack,
  Divider,
  TextField,
  Select,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';

export const CiCdDeployApp = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <DashboardHeader
        title="Application Info"
        // subtitle="Welcome back, Ally"
        actions={<Stack spacing={1} direction="row"></Stack>}
      />
      <Divider orientation="horizontal" flexItem />
      <Box mt={2}>
        {' '}
        {/* Reduced size to 'sm' for a smaller layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            minHeight: '70vh',
            textAlign: 'left',
            maxWidth: 500, //
            // ml: { xs: 2, sm: 4 }, //
            // mt: { xs: 10, sm: 5 },
          }}
        >
          {/* GitHub Repo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: 'text.primary', fontSize: 18, mb: 1 }}
          >
            Github Repo Url
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            size="small"
            defaultValue="https://github.com/co-teemplate"
            sx={{ fontSize: 14, mb: 3 }}
          />

          {/* Virtual Machine Connection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: 18, color: 'text.primary', mb: 1 }}
          >
            Github Branch
          </Typography>
          <Select native fullWidth variant="outlined" size="small" sx={{ fontSize: 14, mb: 3 }}>
            <option value="main">main</option>
            <option value="development">development</option>
            <option value="test">test</option>
            <option value="features">features</option>
          </Select>

          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: 18, color: 'text.primary', mb: 1 }}
          >
            App Language
          </Typography>
          <Select native fullWidth variant="outlined" size="small" sx={{ fontSize: 14, mb: 3 }}>
            <option value="main">Python</option>
            <option value="development">JavaScript</option>
            <option value="test">GoLang</option>
            <option value="features">C#</option>
          </Select>

          {/* Finish Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard/cloud-template/deploy-app/deploying-loader')}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Deploy
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default CiCdDeployApp;
