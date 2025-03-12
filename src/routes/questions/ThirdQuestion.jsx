import React, { useState } from 'react';
import { Box, Button, Container, Typography, Paper, TextField } from '@mui/material';
import { PageContainer } from '../../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export function ThirdQuestion() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    expectedUsers: '',
    seasonalSpikes: '',
    transactionsPerSecond: '',
  });

  const handleNextStep = () => {
    if (answers) {
      navigate('/dashboard/getting-started/questions/fourth-question');
    }
  };

  const handleAnswerChange = (event, key) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
  };

  return (
    <PageContainer>
      <Box sx={{ py: 2 }}>
        <Container maxWidth="md">
          <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: { lg: 'center' } }}>
            <Typography
              sx={{
                color: 'primary.700',
                fontWeight: 600,
                fontSize: 'md',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Step 3 of 5
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
              User Load & Performance
            </Typography>
            <Typography
              sx={{ mt: 1.5, color: 'gray.600', fontSize: 'lg', lineHeight: 1.75, mb: 4 }}
            >
              Please provide your expected user load and performance characteristics.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
            <Paper
              elevation={0}
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                p: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%', // Left side (question) takes 65% width
                    }}
                  >
                    How many users are expected per day/week/month?
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <TextField
                      type="number"
                      value={answers.expectedUsers}
                      onChange={(e) => handleAnswerChange(e, 'expectedUsers')}
                      placeholder="Enter number of users"
                      sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%',
                    }}
                  >
                    Seasonal spikes (% increase)
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <TextField
                      type="number"
                      value={answers.seasonalSpikes}
                      onChange={(e) => handleAnswerChange(e, 'seasonalSpikes')}
                      placeholder="Enter percentage increase"
                      InputProps={{
                        endAdornment: <Typography sx={{ color: 'gray.600', ml: 1 }}>%</Typography>,
                      }}
                      sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%',
                    }}
                  >
                    Expected transactions per second (TPS)
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <TextField
                      type="number"
                      value={answers.transactionsPerSecond}
                      onChange={(e) => handleAnswerChange(e, 'transactionsPerSecond')}
                      placeholder="Enter TPS"
                      sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
              {/* <Button variant="outlined" sx={{ px: 4, py: 1, borderRadius: 1 }}>
                  Back
                </Button> */}
              <Button
                onClick={handleNextStep}
                disabled={
                  !answers.expectedUsers ||
                  !answers.seasonalSpikes ||
                  !answers.transactionsPerSecond
                }
                variant="contained"
                sx={{
                  px: 4,
                  py: 1,
                  borderRadius: 1,
                  bgcolor: 'primary.700',
                  '&:hover': { bgcolor: 'primary.800' },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default ThirdQuestion;
