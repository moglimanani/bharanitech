import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequireUserSession = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem(import.meta.env.VITE_APP_USER_SESSION_NAME);

    if (!storedUser) {
      navigate(import.meta.env.VITE_ROUTE_LOGIN_URL);
    }
  }, [navigate]);
};
