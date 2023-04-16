import React, { useState, useContext, createContext } from 'react';
import { PublicUserType, UserType, LoginFormType, SignUpFormType } from '@types';
import Cookies from 'js-cookie'

type UseAuthType = {
  isAuthenticated: boolean;
  currentUser: null | UserType;
  publicAuthenticatedUser: PublicUserType;
  login: (user: UserType) => void;
  signup: (user: UserType) => void;
  logout: () => void;
};

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as UseAuthType);

const cookieUser = Cookies.get('user');
const initialUser = cookieUser ? JSON.parse(cookieUser) as UserType : null;

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(initialUser);
  const isAuthenticated = currentUser != null;
  const publicAuthenticatedUser = { 
    id: currentUser?.id,
    name: currentUser?.name,
    email: currentUser?.email,
  } as PublicUserType;

  function login(user: UserType): void {
    setCurrentUser(user);
    Cookies.set('user', JSON.stringify(user));
  }

  function signup(user: UserType): void {
    setCurrentUser(user);
    Cookies.set('user', JSON.stringify(user));
  }

  function logout() {
    setCurrentUser(null)
    Cookies.remove('user');
  }

  const contextValue = {
    isAuthenticated,
    currentUser,
    publicAuthenticatedUser,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth(): UseAuthType {
  const context = useContext(AuthContext);

  return context;
}
