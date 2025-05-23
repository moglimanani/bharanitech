import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export interface TrainingCategory {
  id: number;
  title: string;
  description: string;
}

interface TrainingCategoryContextType {
  trainingCategories: TrainingCategory[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const TrainingCategoryContext = createContext<TrainingCategoryContextType | undefined>(undefined);

export const TrainingCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trainingCategories, setTrainingCategories] = useState<TrainingCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}training-categories`);
      setTrainingCategories(res.data.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load Training categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <TrainingCategoryContext.Provider value={{ trainingCategories, loading, error, refresh: fetchCategories }}>
      {children}
    </TrainingCategoryContext.Provider>
  );
};

export const useTrainingCategories = (): TrainingCategoryContextType => {
  const context = useContext(TrainingCategoryContext);
  if (!context) {
    throw new Error('useTrainingCategories must be used within a TrainingCategoryProvider');
  }
  return context;
};
