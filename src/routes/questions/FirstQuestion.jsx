import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { PageContainer } from '../../components/PageContainer';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function FirstQuestion() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption);

  const handleNextStep = () => {
    if (selectedOption) {
      navigate('/dashboard/getting-started/questions/second-question');
    }
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
              Step 1 of 5
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
              What type of application will be deployed?
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
                {['Web app', 'Database', 'AI/ML', 'Batch processing', 'Microservices'].map(
                  (option, index) => (
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
                  ),
                )}
              </RadioGroup>
            </Paper>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={handleNextStep}
                disabled={!selectedOption}
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

export default FirstQuestion;
