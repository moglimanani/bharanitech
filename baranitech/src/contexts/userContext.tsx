import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the shape of the user
export interface User {
  id: number;
  email: string;
  username: string;
  phone: string;
  // Add more fields as needed
}

// 2. Define the context value shape
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// 3. Create the context with default undefined value
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Provider props
interface UserProviderProps {
  children: ReactNode;
}

// 5. Provider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    const storedUser = sessionStorage.getItem(import.meta.env.VITE_APP_USER_SESSION_NAME);

    if (storedUser) {
      sessionStorage.removeItem(import.meta.env.VITE_APP_USER_SESSION_NAME);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 6. Custom hook for using the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
