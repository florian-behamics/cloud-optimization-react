import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { PageContainer } from '../../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function FourthQuestion() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    workload: '',
    dataGrowth: '',
    backupRequired: '',
  });

  const handleNextStep = () => {
    if (answers) {
      navigate('/dashboard/getting-started/questions/fifth-question');
    }
  };

  const handleAnswerChange = (event, key) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
  };

  console.log(answers);

  const handleToggleChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
  };

  return (
    <PageContainer>
      <FaArrowLeftLong color="gray" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
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
              Step 4 of 5
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
              Database & Storage Needs
            </Typography>
            <Typography
              sx={{ mt: 1.5, color: 'gray.600', fontSize: 'lg', lineHeight: 1.75, mb: 4 }}
            >
              Please provide the details of your database and storage needs.
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
                {/* Workload Question */}
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%',
                    }}
                  >
                    Read-heavy(1) or Write-heavy(2) workload?
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <ToggleButtonGroup
                      value={answers.workload}
                      exclusive
                      onChange={(e, value) => handleToggleChange('workload', value)}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ToggleButton
                        value="1"
                        sx={{
                          flex: 1,
                          fontSize: '0.75rem', // Smaller font size
                          py: 0.5, // Smaller vertical padding
                          borderRadius: '8px !important',
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
                        1 (Read-heavy)
                      </ToggleButton>
                      <ToggleButton
                        value="2"
                        sx={{
                          flex: 1,
                          fontSize: '0.75rem', // Smaller font size
                          py: 0.5, // Smaller vertical padding
                          borderRadius: '8px !important',
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
                        2 (Write-heavy)
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                </Box>

                {/* Data Growth Question */}
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%',
                    }}
                  >
                    Expected data growth per month (in GB)?
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <TextField
                      type="number"
                      value={answers.dataGrowth}
                      onChange={(e) => handleAnswerChange(e, 'dataGrowth')}
                      placeholder="Enter GB per month"
                      InputProps={{
                        endAdornment: <Typography sx={{ color: 'gray.600', ml: 1 }}>GB</Typography>,
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

                {/* Backup Requirement Question */}
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                  <Typography
                    sx={{
                      color: 'gray.800',
                      fontWeight: 600,
                      fontSize: 'lg',
                      width: '65%',
                    }}
                  >
                    Is backup and replication required?
                  </Typography>
                  <Box sx={{ width: '35%' }}>
                    <ToggleButtonGroup
                      value={answers.backupRequired}
                      exclusive
                      onChange={(e, value) => handleToggleChange('backupRequired', value)}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ToggleButton
                        value="Yes"
                        sx={{
                          flex: 1,
                          fontSize: '0.75rem', // Smaller font size
                          py: 1.3, // Smaller vertical padding
                          borderRadius: '8px !important',
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
                          flex: 1,
                          fontSize: '0.75rem', // Smaller font size
                          py: 0.5, // Smaller vertical padding
                          borderRadius: '8px !important',
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
                </Box>
              </Box>
            </Paper>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
              {/* <Button variant="outlined" sx={{ px: 3, py: 1, borderRadius: 1 }}>
                  Back
                </Button> */}
              <Button
                onClick={handleNextStep}
                disabled={!answers.workload || !answers.dataGrowth || !answers.backupRequired}
                variant="contained"
                sx={{
                  px: 3,
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

export default FourthQuestion;
