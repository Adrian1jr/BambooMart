import React, { useState } from 'react';
import { Button, Input, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/auth-context';

interface LoginFormProps {
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  onRegisterClick, 
  onForgotPasswordClick,
  onSuccess 
}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    let isValid = true;
    
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        onSuccess();
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={errors.email}
        isInvalid={!!errors.email}
        isDisabled={isLoading}
      />
      
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button type="button" onClick={toggleVisibility} className="focus:outline-none">
            {isVisible ? (
              <Icon icon="lucide:eye-off" className="text-default-400" />
            ) : (
              <Icon icon="lucide:eye" className="text-default-400" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        errorMessage={errors.password}
        isInvalid={!!errors.password}
        isDisabled={isLoading}
      />
      
      <div className="flex justify-between items-center">
        <Checkbox defaultSelected size="sm">
          Remember me
        </Checkbox>
        <Button variant="light" size="sm" onPress={onForgotPasswordClick}>
          Forgot password?
        </Button>
      </div>
      
      <Button type="submit" color="primary" className="w-full" isLoading={isLoading}>
        Log In
      </Button>
      
      <div className="flex items-center gap-4">
        <Divider className="flex-1" />
        <p className="text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button variant="bordered" className="w-full" startContent={<Icon icon="logos:google-icon" />}>
          Google
        </Button>
        <Button variant="bordered" className="w-full" startContent={<Icon icon="logos:facebook" />}>
          Facebook
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-default-600">
          Don't have an account? {' '}
          <Button variant="light" className="p-0 h-auto" onPress={onRegisterClick}>
            Sign up
          </Button>
        </p>
      </div>
      
      <div className="text-center text-tiny text-default-500">
        By logging in, you agree to our {' '}
        <a href="/terms-of-service" className="text-primary">Terms of Service</a> {' '}
        and {' '}
        <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
      </div>
    </form>
  );
};

export default LoginForm;