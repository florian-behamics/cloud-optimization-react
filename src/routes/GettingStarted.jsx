//import { Button } from '@mui/material';
//import { TbInfoCircle } from 'react-icons/tb';
import { Box, Container, Typography, Stack, Button, Popover, Divider } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
import InitialTab from '../components/getting-started/InitialTab';
import StepForm from '../components/getting-started/StepForm';
import { useState } from 'react';
import { TbInfoCircle, TbCloud, TbChartBar, TbColorSwatch } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { ColorDot } from '../components/ColorDot';
import { useDisclosure } from '../hooks/useDisclosure';
import {
  ALL_AVAIL_COLOR_SCALES_LIST,
  ALL_AVAIL_FONTS_LIST,
  ALL_RADIUS_SCALES_LIST,
} from '../theme';

export function GettingStarted() {
  const navigate = useNavigate();

  const customizeDisclosure = useDisclosure({ provideAnchorEl: true });
  const npsDisclosure = useDisclosure();
  const handleRouteSteps = (option) => {
    navigate(option);
  };
  //   const [currentStep, setCurrentStep] = useState(null); // Track the current step
  //   const [answers, setAnswers] = useState([]); // Store answers for each step
  //   const totalSteps = 5; // Total number of steps

  //   const handleNext = (stepIndex, answer) => {
  //     const newAnswers = [...answers];
  //     newAnswers[stepIndex] = answer;
  //     setAnswers(newAnswers);
  //     setCurrentStep(stepIndex + 1); // Move to the next step
  //   };

  //   const handleBack = (stepIndex) => {
  //     setCurrentStep(stepIndex - 1); // Move to the previous step
  //   };

  //   const handleClickNoCodeCloud = () => {
  //     setCurrentStep(0); // Start from step 1 when clicking the card
  //   };

  //   console.log(currentStep);

  const features = [
    {
      title: 'No Code Cloud',
      description:
        'Using simple templates, create the most cost-effective cloud architecture automatically.',
      icon: TbCloud,
      onClick: () => handleRouteSteps('/getting-started/questions'),
    },
    {
      title: 'Optimize Cloud',
      description: 'Analyze cost reduction opportunities and run automations to reduce costs.',
      icon: TbChartBar,
      onClick: () => handleRouteSteps('/optimize-cloud'),
    },
  ];

  return (
    <PageContainer
    // customSx={{
    //   minHeight: '80vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}
    >
      <DashboardHeader
        // title="Getting Started"
        // subtitle="Welcome back, Ally"
        actions={<Stack spacing={1} direction="row"></Stack>}
      />
      <Divider orientation="horizontal" flexItem />
      <Box
        sx={{
          //   bgcolor: 'background.paper',
          py: 8,
        }}
      >
        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          <Box sx={{ maxWidth: 'md', textAlign: { lg: 'center' } }}>
            <Typography
              sx={{
                mb: 10,
                color: 'gray.900',
                fontWeight: 700,
                fontSize: { xs: '3xl', sm: '5xl' },
                lineHeight: 1.2,
                textWrap: 'balance',
                isolation: 'isolate',
              }}
            >
              Getting Started
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: 'gray.600',
                fontSize: 'md',
                lineHeight: 1.75,
              }}
            >
              Select the option that best fits your needs to begin optimizing your cloud
              infrastructure and reducing costs effectively.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 4,
              maxWidth: 'lg',
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {features.map((feature) => (
              <InitialTab
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                onClick={feature.onClick}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}
