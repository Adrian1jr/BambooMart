import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Divider,
  addToast
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ContactUsPage: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        orderNumber: '',
        subject: '',
        message: ''
      });
      
      // Show success toast
      addToast({
        title: "Message Sent!",
        description: "We've received your inquiry and will respond within 24-48 hours.",
        color: "success",
        timeout: 5000
      });
    }, 1500);
  };
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Contact Us</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Contact Us
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're here to help! Please fill out the form below, and our customer service team will get back to you within 24-48 hours.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardBody className="p-6">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      isRequired
                      variant="bordered"
                    />
                    
                    <Input
                      label="Email Address"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      type="email"
                      isRequired
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Order Number (Optional)"
                      name="orderNumber"
                      value={formState.orderNumber}
                      onChange={handleInputChange}
                      placeholder="If applicable"
                      variant="bordered"
                    />
                    
                    <Input
                      label="Subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      isRequired
                      variant="bordered"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Textarea
                      label="Your Message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Please provide as much detail as possible"
                      isRequired
                      variant="bordered"
                      minRows={5}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:mail" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-default-500">support@bamboochic.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:phone" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-default-500">+1 (555) 123-4567</p>
                      <p className="text-sm text-default-400">Mon-Fri: 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Visit Our Office</p>
                      <p className="text-default-500">
                        123 Eco Fashion Street<br />
                        Suite 101<br />
                        Portland, OR 97205<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <Divider className="my-6" />
                
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <Button isIconOnly variant="flat" aria-label="Instagram">
                    <Icon icon="lucide:instagram" />
                  </Button>
                  <Button isIconOnly variant="flat" aria-label="Facebook">
                    <Icon icon="lucide:facebook" />
                  </Button>
                  <Button isIconOnly variant="flat" aria-label="Twitter">
                    <Icon icon="lucide:twitter" />
                  </Button>
                  <Button isIconOnly variant="flat" aria-label="TikTok">
                    <Icon icon="lucide:music" />
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;