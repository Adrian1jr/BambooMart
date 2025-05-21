import React, { useState } from 'react';
import { Button, Input, Checkbox, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/auth-context';

interface RegisterFormProps {
  onLoginClick: () => void;
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ 
  onLoginClick,
  onSuccess
}) => {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const validateForm = () => {
    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      terms?: string;
    } = {};
    let isValid = true;
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
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
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
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
      const success = await register(firstName, lastName, email, password);
      if (success) {
        onSuccess();
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          errorMessage={errors.firstName}
          isInvalid={!!errors.firstName}
          isDisabled={isLoading}
        />
        
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          errorMessage={errors.lastName}
          isInvalid={!!errors.lastName}
          isDisabled={isLoading}
        />
      </div>
      
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
        placeholder="Create a password"
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
      
      <Input
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        errorMessage={errors.confirmPassword}
        isInvalid={!!errors.confirmPassword}
        isDisabled={isLoading}
      />
      
      <div>
        <Checkbox 
          isSelected={agreeTerms} 
          onValueChange={setAgreeTerms}
          isInvalid={!!errors.terms}
        >
          I agree to the <a href="/terms-of-service" className="text-primary">Terms of Service</a> and <a href="/privacy-policy" className="text-primary">Privacy Policy</a>
        </Checkbox>
        {errors.terms && <p className="text-tiny text-danger mt-1">{errors.terms}</p>}
      </div>
      
      <Button type="submit" color="primary" className="w-full" isLoading={isLoading}>
        Create Account
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
          Already have an account? {' '}
          <Button variant="light" className="p-0 h-auto" onPress={onLoginClick}>
            Login
          </Button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;