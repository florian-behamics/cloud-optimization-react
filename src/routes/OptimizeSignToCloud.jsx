import { Button, Typography } from '@mui/material';
import { TbArrowRight } from 'react-icons/tb';
import { AuthOptimizeCloud } from '../components/getting-started/AuthOptimizeCloud';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
export function OptimizeSignToCloud() {
  return (
    <PageContainer
      customSx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AuthOptimizeCloud />

      <Typography>Grant Consent to continue</Typography>
    </PageContainer>
  );
}
