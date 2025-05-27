import React, { createContext, useContext, useEffect, useState } from 'react';
import httpService from '../api/httpService';
import { allTrainingsType, TrainingType } from '../types/trainings';
import { ApiResponse } from '../types/common';

const AllTrainingContext = createContext<allTrainingsType | undefined>(undefined);

export const AllTrainingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allTrainings, setAllTrainings] = useState<TrainingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res: ApiResponse  = await httpService.get(`${import.meta.env.VITE_API_BASE_URL}trainings`);
      if(res.status){
        setAllTrainings(res.data);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchJobs();
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  return (
    <AllTrainingContext.Provider value={{ allTrainings, loading, error, refresh: fetchJobs }}>
      {children}
    </AllTrainingContext.Provider>
  );
};

export const useAllTrainings = (): allTrainingsType => {
  const context = useContext(AllTrainingContext);
  if (!context) {
    throw new Error('useAllJobs must be used within a AllJobsProvider');
  }
  return context;
};
