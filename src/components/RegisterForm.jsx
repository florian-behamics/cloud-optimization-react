import { Box, Button, FilledInput, FormLabel, Link, Stack, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import { validateRegisterForm } from '../utils/validation';

export function RegisterForm() {
  const [name, setName] = useState('');
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

    const errors = validateRegisterForm(email, password, name, lastName);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
      return;
    }

    try {
      const userData = { name, lastName, email, password };
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
        {error?.name && (
          <div style={{ color: 'red', fontSize: '14px', height: '1px' }}>{error.name}</div>
        )}
        <FilledInput
          placeholder="First Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
        />

        <FormLabel sx={visuallyHidden}>Last Name</FormLabel>
        {error?.lastName && (
          <div style={{ color: 'red', fontSize: '14px', height: '1px' }}>{error.lastName}</div>
        )}
        <FilledInput
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="family-name"
        />
        <FormLabel sx={visuallyHidden}>Email</FormLabel>
        {error?.email && (
          <div style={{ color: 'red', fontSize: '14px', height: '1px' }}>{error.email}</div>
        )}
        <FilledInput
          placeholder="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <FormLabel sx={visuallyHidden}>Password</FormLabel>
        {error?.password && (
          <div style={{ color: 'red', fontSize: '14px', height: '1px' }}>{error.password}</div>
        )}
        <FilledInput
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div style={{ color: 'red', fontSize: '14px', height: '1px' }}>{error}</div>}
        <Button variant="contained" size="large" type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </Stack>
    </Box>
  );
}
