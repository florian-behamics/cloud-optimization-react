import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { PageContainer } from '../../components/PageContainer';
import { useNavigate } from 'react-router-dom';

export function SecondQuestion() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleAnswerChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextStep = () => {
    if (selectedOption) {
      navigate('/dashboard/getting-started/questions/third-question');
    }
  };
  console.log(selectedOption);

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
              Step 2 of 5
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
              Expected traffic patterns?
            </Typography>
            <Typography
              sx={{ mt: 1.5, color: 'gray.600', fontSize: 'lg', lineHeight: 1.75, mb: 4 }}
            >
              Select the option that best describes your expected traffic pattern.
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
              <RadioGroup
                value={selectedOption}
                onChange={handleAnswerChange}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                {['Consistent', 'Seasonal spikes', 'Peak hours'].map((option, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      borderRadius: 1.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'background.paper',
                      },
                    }}
                  >
                    <FormControlLabel
                      value={option}
                      control={
                        <Radio
                          checked={selectedOption === option}
                          sx={{ '&.Mui-checked': { color: 'primary.main' } }}
                        />
                      }
                      label={
                        <Typography sx={{ py: 1, color: 'gray.800', fontWeight: 500 }}>
                          {option}
                        </Typography>
                      }
                      sx={{ m: 0, px: 2, width: '100%' }}
                    />
                  </Paper>
                ))}
              </RadioGroup>
            </Paper>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
              {/* <Button variant="outlined" sx={{ px: 4, py: 1, borderRadius: 1 }}>
                Back
              </Button> */}
              <Button
                onClick={handleNextStep}
                disabled={!selectedOption}
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

export default SecondQuestion;
