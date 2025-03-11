import { Box, Button, FilledInput, FormLabel, Link, Stack, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';

export function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userData = { name: firstName, lastName, email, password };
      const response = await register(userData);
      console.log('Registration successful:', response);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2xl', sm: '3xl' },
          }}
        >
          Welcome To Cloud Optimizer
        </Typography>
        <Typography>
          Sign in, or{' '}
          <Link
            href={undefined}
            sx={{
              textDecoration: 'none',
            }}
          >
            create an account
          </Link>
        </Typography>
      </Box>
      <Stack
        spacing={2.5}
        component="form"
        onSubmit={handleRegister}
        sx={{
          maxWidth: '24rem',
          width: '100%',
        }}
      >
        <FormLabel sx={visuallyHidden}>First Name</FormLabel>
        <FilledInput
          placeholder="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="given-name"
        />
        <FormLabel sx={visuallyHidden}>Last Name</FormLabel>
        <FilledInput
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="family-name"
        />
        <FormLabel sx={visuallyHidden}>Email</FormLabel>
        <FilledInput
          placeholder="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <FormLabel sx={visuallyHidden}>Password</FormLabel>
        <FilledInput
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button variant="contained" size="large" type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </Stack>
    </Box>
  );
}
