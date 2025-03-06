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
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { PageContainer } from '../components/PageContainer';

export function GettingStartedQuestions() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: 'What type of application will be deployed?',
      type: 'radio',
      options: ['Web app', 'Database', 'AI/ML', 'Batch processing', 'Microservices'],
    },
    {
      question: 'Expected traffic patterns?',
      type: 'radio',
      options: ['Consistent', 'Seasonal spikes', 'Peak hours'],
    },
    {
      question: 'User Load & Performance',
      type: 'multi-input',
      subQuestions: [
        {
          question: 'How many users are expected per day/week/month?',
          type: 'number',
          key: 'expectedUsers',
          placeholder: 'Enter number of users',
        },
        {
          question: 'Seasonal spikes',
          type: 'number',
          key: 'seasonalSpikes',
          placeholder: 'Enter percentage increase',
          suffix: '%',
        },
        {
          question: 'Expected transactions per second?',
          type: 'number',
          key: 'transactionsPerSecond',
          placeholder: 'Enter TPS',
        },
      ],
    },
    {
      question: 'Database & Storage Needs',
      type: 'multi-input',
      subQuestions: [
        {
          question: 'Read-heavy(1) or Write-heavy(2) workload?',
          type: 'toggle',
          key: 'workload',
          options: ['1', '2'],
        },
        {
          question: 'Expected data growth per month?',
          type: 'number',
          key: 'dataGrowth',
          placeholder: 'Enter GB per month',
          suffix: 'GB',
        },
        {
          question: 'Is backup and replication required?',
          type: 'toggle',
          key: 'backupRequired',
          options: ['Yes', 'No'],
        },
      ],
    },
    {
      question: 'Do you need HA and DR?',
      type: 'toggle',
      options: ['Yes', 'No'],
    },
  ];

  const handleAnswerChange = (event, subKey = null) => {
    const value = event.target.value;

    // Handle radio button questions (simple checkboxes)
    if (subKey === null) {
      setAnswers({
        ...answers,
        [currentStep]: value, // For radio questions, the value is directly set
      });
    } else {
      // Handle multi-input questions
      setAnswers({
        ...answers,
        [currentStep]: {
          ...answers[currentStep],
          [subKey]: value, // For multi-input questions, set sub-question keys
        },
      });
    }
  };

  const handleToggleChange = (subKey, value) => {
    setAnswers({
      ...answers,
      [currentStep]: {
        ...answers[currentStep],
        [subKey]: value,
      },
    });
  };

  const handleNextStep = () => {
    const currentQuestion = questions[currentStep];
    let canProceed = false;

    if (currentQuestion.type === 'multi-input') {
      const subAnswers = answers[currentStep] || {};
      canProceed = currentQuestion.subQuestions.every((sq) => subAnswers[sq.key]);
    } else {
      canProceed = answers[currentStep] !== undefined;
    }

    if (canProceed) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log('All questions answered', answers);
        navigate('/cloud-provider-comparison');
      }
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderQuestionContent = () => {
    const question = questions[currentStep];
    const currentAnswers = answers[currentStep] || {};

    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup
            value={currentAnswers || ''} // Make sure this is properly controlled
            onChange={handleAnswerChange}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {question.options.map((option, index) => (
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
                      checked={currentAnswers === option} // This ensures the "check" behavior
                      sx={{
                        '&.Mui-checked': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ py: 1, color: 'gray.800', fontWeight: 500 }}>
                      {option}
                    </Typography>
                  }
                  sx={{
                    m: 0,
                    px: 2,
                    width: '100%',
                  }}
                />
              </Paper>
            ))}
          </RadioGroup>
        );

      case 'multi-input':
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {question.subQuestions.map((sq, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
              >
                <Typography
                  sx={{
                    color: 'gray.800',
                    fontWeight: 600,
                    fontSize: 'lg',
                    width: '65%', // Left side (question) takes 65% width
                  }}
                >
                  {sq.question}
                </Typography>
                <Box sx={{ width: '35%' }}>
                  {sq.type === 'number' ? (
                    <TextField
                      type="number"
                      value={currentAnswers[sq.key] || ''}
                      onChange={(e) => handleAnswerChange(e, sq.key)}
                      placeholder={sq.placeholder}
                      InputProps={{
                        endAdornment: sq.suffix && (
                          <Typography sx={{ color: 'gray.600', ml: 1 }}>{sq.suffix}</Typography>
                        ),
                      }}
                      sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                  ) : (
                    <ToggleButtonGroup
                      value={currentAnswers[sq.key] || null}
                      exclusive
                      onChange={(e, value) => handleToggleChange(sq.key, value)}
                      sx={{ gap: 2 }}
                    >
                      {sq.options.map((option) => (
                        <ToggleButton
                          key={option}
                          value={option}
                          sx={{
                            px: sq.key === 'workload' ? 6 : 5,
                            py: sq.key === 'workload' ? 1.05 : 1,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: '8px !important',
                            '&.Mui-selected': {
                              bgcolor: 'primary.700',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'primary.800',
                              },
                            },
                          }}
                        >
                          {option}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        );

      case 'toggle':
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                width: '100%',
                maxWidth: '400px',
              }}
            >
              <ToggleButtonGroup
                value={currentAnswers[currentStep] || null}
                exclusive
                onChange={(e, value) => handleAnswerChange(e, currentStep)}
                sx={{
                  gap: 3,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {question.options.map((option) => (
                  <ToggleButton
                    key={option}
                    value={option}
                    sx={{
                      px: 6,
                      py: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '12px !important',
                      fontSize: 'lg',
                      fontWeight: 500,
                      minWidth: '160px',
                      '&.Mui-selected': {
                        bgcolor: 'primary.700',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.800',
                        },
                      },
                      '&:not(.Mui-selected)': {
                        color: 'gray.700',
                        '&:hover': {
                          bgcolor: 'gray.50',
                        },
                      },
                    }}
                  >
                    {option}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
            <Typography
              sx={{
                color: 'gray.600',
                fontSize: 'sm',
                textAlign: 'center',
                maxWidth: '400px',
              }}
            >
              High Availability (HA) ensures your application remains operational even if components
              fail. Disaster Recovery (DR) helps you recover from catastrophic events.
            </Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    const question = questions[currentStep];
    if (question.type === 'multi-input') {
      const subAnswers = answers[currentStep] || {};
      return !question.subQuestions.every((sq) => subAnswers[sq.key]);
    }
    return !answers[currentStep];
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
              Step {currentStep + 1} of {questions.length}
            </Typography>
            <Typography
              sx={{
                mb: 5.5,
                color: 'gray.900',
                fontWeight: 700,
                fontSize: { xs: '3xl', sm: '5xl' },
                lineHeight: 1.2,
                textWrap: 'balance',
                isolation: 'isolate',
              }}
            >
              {questions[currentStep].question}
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                color: 'gray.600',
                fontSize: 'lg',
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              {questions[currentStep].type === 'multi-input'
                ? 'Please answer all questions below'
                : 'Select the option that best describes your needs'}
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
              {renderQuestionContent()}

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mt: 4,
                  justifyContent: 'flex-end',
                }}
              >
                <Box sx={{ width: '34%', display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={handleBackStep}
                    disabled={currentStep === 0}
                    sx={{
                      px: 4,
                      py: 1,
                      borderRadius: 1,
                      width: '48%', // Button takes 48% of the space
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNextStep}
                    disabled={isNextDisabled()}
                    sx={{
                      px: 4,
                      py: 1,
                      borderRadius: 1,
                      bgcolor: 'primary.700',
                      '&:hover': {
                        bgcolor: 'primary.800',
                      },
                      width: '48%', // Button takes 48% of the space
                    }}
                  >
                    {currentStep === questions.length - 1 ? 'Complete' : 'Next'}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default GettingStartedQuestions;
