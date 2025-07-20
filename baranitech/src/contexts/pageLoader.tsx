import React, { createContext, useContext, useState } from 'react';

type LoaderContextType = {
  showLoader: () => void;
  hideLoader: () => void;
  isLoading: boolean;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within LoaderProvider');
  }
  return context;
};

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

// Simple full-page loader component
const Loader: React.FC = () => (
  <div style={{
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 9999
  }}>
    <div className="spinner" style={{ width: 50, height: 50, border: '5px solid gray', borderTop: '5px solid blue', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>
      {`@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`}
    </style>
  </div>
);
