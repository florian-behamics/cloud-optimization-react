import { Button } from '@mui/material';
import { TbArrowRight } from 'react-icons/tb';
import { LoginForm } from '../components/LoginForm';
import { PageContainer } from '../components/PageContainer';
import { FrameworkLink } from '../framework/FrameworkLink';
export function Login() {
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
      <LoginForm />
      <FrameworkLink to="/register">
        <Button color="secondary" endIcon={<TbArrowRight />}>
          Don't have an account? Sign up
        </Button>
      </FrameworkLink>
    </PageContainer>
  );
}
