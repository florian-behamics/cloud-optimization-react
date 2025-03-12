import { Box, Button, FilledInput, FormLabel, Link, Stack, Typography, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { VscAzure } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

export function AuthOptimizeCloud() {
  const handleLogin = async (email) => {
    // add login logic here
    console.log(email);
  };
  const navigate = useNavigate();
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
        {/* <Logo height={20} /> */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2xl', sm: '3xl' },
            lineHeight: 1.25,
          }}
        >
          Sign in to your Cloud
        </Typography>
      </Box>
      <Stack
        spacing={2.5}
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const email = formData.get('email');
          handleLogin(email);
        }}
        sx={{
          maxWidth: '24rem',
          width: '100%',
        }}
      >
        {/* Azure Card */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            minHeight: '150px',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'none',
          }}
        >
          <Typography
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              fontSize: '1.2rem',
            }}
          >
            <VscAzure size={32} />
            Azure
          </Typography>
        </Paper>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/dashboard/finding-optimizations')}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          Sign in...
        </Button>
        {/* <Link
					href={undefined}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textDecoration: "none",
						color: "gray.400",
						fontSize: "xs",
					}}
				>
					Return to home
				</Link> */}
      </Stack>
    </Box>
  );
}
