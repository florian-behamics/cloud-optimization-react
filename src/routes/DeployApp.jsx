//import { Button } from '@mui/material';
//import { TbInfoCircle } from 'react-icons/tb';
import { Box, Container, Typography, Stack, Button, Popover, Divider } from '@mui/material';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
import InitialTab from '../components/getting-started/InitialTab';
import StepForm from '../components/getting-started/StepForm';
import { useState } from 'react';
import { TbInfoCircle, TbCloud, TbChartBar, TbColorSwatch } from 'react-icons/tb';
import { GrDeploy } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { ColorDot } from '../components/ColorDot';
import { useDisclosure } from '../hooks/useDisclosure';
import {
  ALL_AVAIL_COLOR_SCALES_LIST,
  ALL_AVAIL_FONTS_LIST,
  ALL_RADIUS_SCALES_LIST,
} from '../theme';

export function DeployApp() {
  const navigate = useNavigate();

  const customizeDisclosure = useDisclosure({ provideAnchorEl: true });
  const npsDisclosure = useDisclosure();
  const handleRouteSteps = (option) => {
    navigate(option);
  };

  const features = [
    {
      title: 'Deploy Manually',
      description:
        'Easily deploy your application using simple templates to build a cost-effective cloud architecture automatically.',
      icon: GrDeploy,
      onClick: () => handleRouteSteps('/dashboard/cloud-template/deploy-app/manual'),
    },
    {
      title: 'Deploy with CI/CD',
      description: 'Automate your app deployment while optimizing cloud costs effortlessly.',
      icon: GrDeploy,
      onClick: () => handleRouteSteps('/dashboard/cloud-template/deploy-app/ci-cd'),
    },
  ];

  return (
    <PageContainer>
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
              Deploy your App
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: 'gray.600',
                fontSize: 'md',
                lineHeight: 1.75,
              }}
            >
              Easily deploy your application by selecting the option that best fits your needs.
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

export default DeployApp;
