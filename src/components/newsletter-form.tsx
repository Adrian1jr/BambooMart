import React from 'react';
import { Input, Button, addToast } from '@heroui/react';
import { Icon } from '@iconify/react';

interface NewsletterFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ variant = 'default', className = '' }) => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      
      // Show success toast
      addToast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter. Check your email for a 10% discount code!",
        color: "success",
        timeout: 5000
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`flex ${variant === 'compact' ? 'flex-row gap-2' : 'flex-col gap-3'}`}>
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color={error ? "danger" : "default"}
          description={error || ''}
          startContent={variant === 'default' ? <Icon icon="lucide:mail" /> : undefined}
          className={variant === 'compact' ? 'min-w-[200px]' : 'w-full'}
          isDisabled={isSubmitting}
        />
        <Button 
          type="submit" 
          color="primary"
          isLoading={isSubmitting}
          className={variant === 'compact' ? '' : 'w-full md:w-auto'}
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;