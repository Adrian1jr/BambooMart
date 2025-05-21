import React, { useState } from 'react';
import { Button, Input, addToast } from '@heroui/react';
import { Icon } from '@iconify/react';

interface ForgotPasswordFormProps {
  onBackToLoginClick: () => void;
  onSuccess: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ 
  onBackToLoginClick,
  onSuccess
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    setError('');
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      addToast({
        title: "Password reset email sent",
        description: "Check your inbox for instructions to reset your password",
        color: "success"
      });
      
      setIsLoading(false);
      onSuccess();
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <p className="text-sm text-default-600 mb-4">
          Enter the email address associated with your account, and we'll send you a link to reset your password.
        </p>
      </div>
      
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={error}
        isInvalid={!!error}
        isDisabled={isLoading}
      />
      
      <Button type="submit" color="primary" className="w-full" isLoading={isLoading}>
        Send Reset Link
      </Button>
      
      <div className="text-center">
        <Button variant="light" onPress={onBackToLoginClick} startContent={<Icon icon="lucide:arrow-left" />}>
          Back to Login
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;