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
        title="Getting Started"
        // subtitle="Welcome back, Ally"
        actions={
          <Stack spacing={1} direction="row">
            {/* <Button
              variant="outlined"
              color="secondary"
              endIcon={<TbColorSwatch size={14} />}
              onClick={customizeDisclosure.onOpen}
            >
              Customize Theme
            </Button> */}
            {/* <Popover
              open={customizeDisclosure.isOpen}
              anchorEl={customizeDisclosure.anchorEl}
              onClose={customizeDisclosure.onClose}
              sx={{
                '.MuiPaper-root': {
                  boxShadow: 2,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  padding: 2,
                  minWidth: 300,
                  maxWidth: 440,
                  gap: 1,
                  position: 'relative',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 'sm',
                    color: 'gray.800',
                  }}
                >
                  Color
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  {ALL_AVAIL_COLOR_SCALES_LIST.map((colorScale) => {
                    return (
                      <Button
                        key={colorScale.value}
                        color="secondary"
                        size="small"
                        onClick={() => setActiveColorScale(colorScale.value)}
                        sx={{
                          width: '100%',
                          gap: 1,
                          justifyContent: 'flex-start',
                        }}
                      >
                        <ColorDot color={colorScale.value} />
                        {colorScale.label}
                      </Button>
                    );
                  })}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 'sm',
                    color: 'gray.800',
                  }}
                >
                  Radius
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  {ALL_RADIUS_SCALES_LIST.map((radiusScale) => {
                    return (
                      <Button
                        key={radiusScale.value}
                        color="secondary"
                        size="small"
                        onClick={() => setActiveRadiusScale(radiusScale.value)}
                        sx={{
                          width: '100%',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                          }}
                        >
                          <Box>{radiusScale.label}</Box>
                          <Box
                            sx={{
                              lineHeight: 1,
                              fontSize: '2xs',
                              color: 'gray.600',
                              fontWeight: 400,
                            }}
                          >
                            {radiusScale.description}
                          </Box>
                        </Box>
                      </Button>
                    );
                  })}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 'sm',
                    color: 'gray.800',
                  }}
                >
                  Font
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  {ALL_AVAIL_FONTS_LIST.map((fontObject) => {
                    return (
                      <Button
                        key={fontObject.value}
                        color="secondary"
                        size="small"
                        onClick={() => setActiveFont(fontObject.value)}
                        sx={{
                          width: '100%',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            sx={{
                              fontFamily: fontObject.value,
                            }}
                          >
                            {fontObject.value}
                          </Box>
                        </Box>
                      </Button>
                    );
                  })}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 'sm',
                    color: 'gray.800',
                  }}
                >
                  Mode
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Button
                    color="secondary"
                    size="small"
                    onClick={() => setMode('light')}
                    sx={{
                      width: '100%',
                      justifyContent: 'flex-start',
                    }}
                  >
                    Light
                  </Button>
                  <Button
                    color="secondary"
                    size="small"
                    onClick={() => setMode('dark')}
                    sx={{
                      width: '100%',
                      justifyContent: 'flex-start',
                    }}
                  >
                    Dark
                  </Button>
                </Box>
              </Box>
            </Popover> */}
            {/* <Button
              variant="outlined"
              color="secondary"
              onClick={npsDisclosure.onToggle}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {npsDisclosure.isOpen ? 'Close' : 'Open'} Survey
            </Button> */}
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => {
                broadcastTour('welcome');
              }}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              Take a Tour
            </Button> */}
          </Stack>
        }
      />
      <Divider orientation="horizontal" flexItem />
      <Box
        sx={{
          //   bgcolor: 'background.paper',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: { lg: 'center' } }}>
            {/* <Typography
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
            </Typography> */}

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
        </Container>
      </Box>
    </PageContainer>
  );
}
