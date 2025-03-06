import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';

const StepForm = ({ currentStep, totalSteps, onNext, onBack, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers[currentStep] || '');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    onNext(currentStep, selectedOption);
    setSelectedOption(''); // Clear the selection for the next step
  };

  const handleBack = () => {
    onBack(currentStep);
    setSelectedOption(''); // Clear the selection when going back
  };

  const getQuestionContent = () => {
    switch (currentStep) {
      case 0:
        return {
          question: "What's your preferred cloud deployment method?",
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
        };
      case 1:
        return {
          question: 'What features are you looking for?',
          options: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        };
      case 2:
        return {
          question: 'How do you prioritize cost vs. performance?',
          options: ['Cost', 'Performance', 'Balanced', 'Not Sure'],
        };
      case 3:
        return {
          question: 'What is your primary concern with cloud services?',
          options: ['Security', 'Cost', 'Scalability', 'Complexity'],
        };
      case 4:
        return {
          question: 'Would you like support with implementation?',
          options: ['Yes', 'No'],
        };
      default:
        return { question: '', options: [] };
    }
  };

  const { question, options } = getQuestionContent();

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Step {currentStep + 1} of {totalSteps}
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        {question}
      </Typography>

      <FormControl component="fieldset" sx={{ marginBottom: 3 }}>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </FormControl>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={handleBack} disabled={currentStep === 0}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={!selectedOption}>
          {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default StepForm;
