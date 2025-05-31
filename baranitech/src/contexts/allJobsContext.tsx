import React, { createContext, useContext, useEffect, useState } from 'react';
import { allJobsType, ApiResponse, JobsType } from '../types/jobs';
import httpService from '../api/httpService';

const AllJobsContext = createContext<allJobsType | undefined>(undefined);

export const AllJobsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allJobs, setAllJobs] = useState<JobsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res: ApiResponse  = await httpService.get(`${import.meta.env.VITE_API_BASE_URL}jobs`);
      if(res.status){
        setAllJobs(res.data);
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
    <AllJobsContext.Provider value={{ allJobs, loading, error, refresh: fetchJobs }}>
      {children}
    </AllJobsContext.Provider>
  );
};

export const useAllJobs = (): allJobsType => {
  const context = useContext(AllJobsContext);
  if (!context) {
    throw new Error('useAllJobs must be used within a AllJobsProvider');
  }
  return context;
};
