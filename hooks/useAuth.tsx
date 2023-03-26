import React, { useState, useContext, createContext } from 'react';

type UseAuthType = {
  isAuthenticated: boolean;
};

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as UseAuthType);

/* eslint-disable */
export const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const contextValue = {
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
/* eslint-enable */

export default function useAuth(): UseAuthType {
  const context = useContext(AuthContext);

  return context;
}
