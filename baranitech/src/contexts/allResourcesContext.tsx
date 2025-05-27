import React, { createContext, useContext, useEffect, useState } from 'react';
import httpService from '../api/httpService';
import { ApiResponse } from '../types/common';
import { allResourcesType, ResourceType } from '../types/resources';

const AllResourcesContext = createContext<allResourcesType | undefined>(undefined);

export const AllResourcesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allResources, setAllResources] = useState<ResourceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res: ApiResponse  = await httpService.get(`${import.meta.env.VITE_API_BASE_URL}youtube`);
      if(res.status){
        const sortedArr = [...res.data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        setAllResources(sortedArr);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load resources');
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
    <AllResourcesContext.Provider value={{ allResources, loading, error, refresh: fetchJobs }}>
      {children}
    </AllResourcesContext.Provider>
  );
};

export const useAllResources = (): allResourcesType => {
  const context = useContext(AllResourcesContext);
  if (!context) {
    throw new Error('useAllResources must be used within a AllResourcesProvider');
  }
  return context;
};
