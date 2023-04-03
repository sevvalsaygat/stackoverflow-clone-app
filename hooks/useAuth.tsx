import React, { useState, useContext, createContext } from 'react';

type UseAuthType = {
  isAuthenticated: boolean;
  currentUser: null | object;
  setUser: (user: any) => void;
};

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as UseAuthType);

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const isAuthenticated = currentUser != null;

  function setUser(user: any): void {
    setCurrentUser(user);
  }

  const contextValue = {
    isAuthenticated,
    currentUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth(): UseAuthType {
  const context = useContext(AuthContext);

  return context;
}
