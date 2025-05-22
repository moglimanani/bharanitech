import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export interface JobCategory {
  id: number;
  title: string;
}

interface JobCategoryContextType {
  categories: JobCategory[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const JobCategoryContext = createContext<JobCategoryContextType | undefined>(undefined);

export const JobCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<JobCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}job-categories`);
      setCategories(res.data.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load job categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <JobCategoryContext.Provider value={{ categories, loading, error, refresh: fetchCategories }}>
      {children}
    </JobCategoryContext.Provider>
  );
};

export const useJobCategories = (): JobCategoryContextType => {
  const context = useContext(JobCategoryContext);
  if (!context) {
    throw new Error('useJobCategories must be used within a JobCategoryProvider');
  }
  return context;
};
