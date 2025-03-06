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

const ExportOptimizationReportModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, textAlign: 'center' }}>Confirm Your Action</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
          Please choose export type.
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
          JSON
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          CSV
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportOptimizationReportModal;
