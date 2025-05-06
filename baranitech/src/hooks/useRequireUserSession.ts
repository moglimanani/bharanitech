import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequireUserSession = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('baranitech-user');

    if (!storedUser) {
      navigate('/ea532f28cda5ac4d4b037af546c61233/login');
    }
  }, [navigate]);
};
