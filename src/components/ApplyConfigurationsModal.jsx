import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from '@mui/material';

const ApplyConfigurationsModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, textAlign: 'center' }}>Confirm Your Action</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
          Confirm you want to continue with the specs.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: 'text.primary',
            borderColor: 'divider',
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'action.hover',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => navigate('/creating-cloud')}
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplyConfigurationsModal;
