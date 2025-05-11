// context/AlertContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

interface ErrorAlertContextType {
  showError: (msg: string) => void;
}

const ErrorAlertContext = createContext<ErrorAlertContextType | undefined>(undefined);

export const ErrorAlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const showError = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  return (
    <ErrorAlertContext.Provider value={{ showError }}>
      {children}
      <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </ErrorAlertContext.Provider>
  );
};

export const useErrorAlert = (): ErrorAlertContextType => {
  const context = useContext(ErrorAlertContext);
  if (!context) throw new Error('useAlert must be used within AlertProvider');
  return context;
};
