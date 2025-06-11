import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { YouTubeCategoryType } from '../helper';

interface YouTubeCategoryContextType {
  categories: YouTubeCategoryType[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const YouTubeCategoryContext = createContext<YouTubeCategoryContextType | undefined>(undefined);

export const YouTubeCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<YouTubeCategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}youtube-categories`);
      setCategories(res.data.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchCategories();
    return () => {
      controller.abort(); // Cancel fetch on unmount
    };
  }, []);

  return (
    <YouTubeCategoryContext.Provider value={{ categories, loading, error, refresh: fetchCategories }}>
      {children}
    </YouTubeCategoryContext.Provider>
  );
};

export const useYouTubeCategories = (): YouTubeCategoryContextType => {
  const context = useContext(YouTubeCategoryContext);
  if (!context) {
    throw new Error('useYouTubeCategories must be used within a YouTubeCategoryProvider');
  }
  return context;
};
