import React, { createContext, useContext, useState, useEffect } from 'react';
import { addToast } from '@heroui/react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const MOCK_USER: User = {
  id: "user-1",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  avatar: "avatar?w=200&h=200&u=1"
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user data in localStorage
    const storedUser = localStorage.getItem('bamboochic_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (email && password.length >= 6) {
          // For demo purposes, always log in with mock user
          setUser(MOCK_USER);
          localStorage.setItem('bamboochic_user', JSON.stringify(MOCK_USER));
          
          addToast({
            title: "Login successful",
            description: `Welcome back, ${MOCK_USER.firstName}!`,
            color: "success"
          });
          
          setIsLoading(false);
          resolve(true);
        } else {
          addToast({
            title: "Login failed",
            description: "Invalid email or password",
            color: "danger"
          });
          
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const register = async (
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (firstName && lastName && email && password.length >= 6) {
          const newUser = {
            id: `user-${Date.now()}`,
            firstName,
            lastName,
            email,
            avatar: "avatar?w=200&h=200&u=1"
          };
          
          setUser(newUser);
          localStorage.setItem('bamboochic_user', JSON.stringify(newUser));
          
          addToast({
            title: "Registration successful",
            description: `Welcome to BambooChic, ${firstName}!`,
            color: "success"
          });
          
          setIsLoading(false);
          resolve(true);
        } else {
          addToast({
            title: "Registration failed",
            description: "Please fill in all fields correctly",
            color: "danger"
          });
          
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bamboochic_user');
    addToast({
      title: "Logged out",
      description: "You have been successfully logged out",
      color: "default"
    });
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('bamboochic_user', JSON.stringify(updatedUser));
      
      addToast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
        color: "success"
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};