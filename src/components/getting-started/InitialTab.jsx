import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

export default function StatCardSimple({
  title = 'Default Title',
  description = 'Default description text.',
  onClick,
  icon: Icon,
}) {
  return (
    <Box
      sx={{
        padding: 0.5,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 2.5,
        boxShadow: 1,
      }}
    >
      <Paper
        elevation={0}
        onClick={onClick}
        sx={{
          pt: 7,
          border: 'none',
          backgroundColor: 'gray.50',
          p: 3,
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        {Icon && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 999,
              color: 'background.default',
              bgcolor: 'primary.700',
            }}
          >
            <Icon size={24} color="currentColor" />
          </Box>
        )}

        <Typography sx={{ color: 'gray.900', fontWeight: 600, fontSize: '2xl' }}>
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            color: 'gray.600',
            fontSize: 'md',
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>
      </Paper>
    </Box>
  );
}
