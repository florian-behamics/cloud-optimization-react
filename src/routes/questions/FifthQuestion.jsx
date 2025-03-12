import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';

export function FifthQuestion() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');

  const handleToggleChange = (event, value) => {
    setAnswer(value);
  };

  const handleFinish = () => {
    if (answer) {
      navigate('/dashboard/cloud-provider-comparison');
    }
  };

  return (
    <PageContainer>
      <Box sx={{ py: 2 }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              sx={{
                color: 'primary.700',
                fontWeight: 600,
                fontSize: 'md',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Step 5 of 5
            </Typography>
            <Typography
              sx={{
                mb: 5.5,
                color: 'gray.900',
                fontWeight: 700,
                fontSize: { xs: '3xl', sm: '5xl' },
                lineHeight: 1.2,
              }}
            >
              Do you need HA and DR?
            </Typography>
            <Typography sx={{ mt: 1.5, color: 'gray.600', fontSize: 'lg', lineHeight: 1.75 }}>
              Select the option that best describes your needs
            </Typography>
          </Box>

          <Paper elevation={0} sx={{ p: 4 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                mt: 3,
              }}
            >
              <ToggleButtonGroup
                value={answer}
                exclusive
                onChange={handleToggleChange}
                sx={{ gap: 0 }}
              >
                <ToggleButton
                  value="Yes"
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&.Mui-selected': {
                      bgcolor: 'primary.700',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.800',
                      },
                    },
                  }}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  value="No"
                  sx={{
                    px: 6,
                    py: 2,
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&.Mui-selected': {
                      bgcolor: 'primary.700',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.800',
                      },
                    },
                  }}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Typography
              sx={{
                color: 'gray.600',
                fontSize: 'sm',
                textAlign: 'center',
                maxWidth: '400px',
                mt: 3,
                mx: 'auto',
              }}
            >
              High Availability (HA) ensures your application remains operational even if components
              fail. Disaster Recovery (DR) helps you recover from catastrophic events.
            </Typography>
          </Paper>
          <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
            {/* <Button variant="outlined" sx={{ px: 3, py: 1, borderRadius: 1 }}>
                Back
              </Button> */}
            <Button
              onClick={handleFinish}
              disabled={!answer}
              variant="contained"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 1,
                bgcolor: 'primary.700',
                '&:hover': { bgcolor: 'primary.800' },
              }}
            >
              Complete
            </Button>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default FifthQuestion;
