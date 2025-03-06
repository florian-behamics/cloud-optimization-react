import React from 'react';
import { Box, Typography, Paper, Button, Container } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export const CloudTemplateOutput = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Container maxWidth="sm">
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
            maxWidth: 500, // Reduced width for a smaller component
            ml: { xs: 2, sm: 4 }, // Adjusted left margin
            mt: { xs: 10, sm: 5 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, fontSize: '1.8rem', color: 'text.primary', mb: 3 }}
          >
            Cloud Template Output
          </Typography>

          {/* GitHub Repo */}
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
            Github Repo Url
          </Typography>
          <Paper elevation={2} sx={{ p: 2, width: '100%', bgcolor: 'grey.100', mb: 2 }}>
            <Typography variant="body1">https://github.com/co-teemplate</Typography>
          </Paper>

          {/* Virtual Machine Connection */}
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
            Virtual Machine Connection
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Connect using command below:
          </Typography>
          <Paper elevation={2} sx={{ p: 2, width: '100%', bgcolor: 'grey.100', mb: 1 }}>
            <Typography variant="body1">username: guid password: guid</Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 2, width: '100%', bgcolor: 'grey.100', mb: 3 }}>
            <Typography variant="body1">sudo ssh azureuser@X.X.X.X</Typography>
          </Paper>

          {/* Database Connection */}
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
            Database Connection
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Use connection string below:
          </Typography>
          <Paper elevation={2} sx={{ p: 2, width: '100%', bgcolor: 'grey.100', mb: 3 }}>
            <Typography variant="body1">Server=X.X.X.X;Database=Blah;...</Typography>
          </Paper>

          {/* Finish Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 2,
              fontSize: '0.9rem',
              mt: 2,
            }}
          >
            Finish
          </Button>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default CloudTemplateOutput;
