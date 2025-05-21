import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardBody, 
  Divider,
  Breadcrumbs,
  BreadcrumbItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const OrderConfirmationPage: React.FC = () => {
  // Generate a random order number
  const orderNumber = React.useMemo(() => {
    return `BCC-${Math.floor(100000 + Math.random() * 900000)}`;
  }, []);
  
  // Generate a random delivery date (5-7 days from now)
  const deliveryDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(5 + Math.random() * 3));
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  }, []);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Order Confirmation</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardBody className="p-8 text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon icon="lucide:check" className="text-success text-4xl" />
              </div>
              
              <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-default-600 mb-6">
                Thank you for your purchase. We've received your order and will begin processing it right away.
              </p>
              
              <div className="bg-content2 p-4 rounded-lg mb-6">
                <div className="font-medium mb-1">Order Number:</div>
                <div className="text-xl font-bold">{orderNumber}</div>
              </div>
              
              <div className="text-left mb-6">
                <h2 className="text-xl font-bold mb-3">Order Details</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-default-600">Order Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Estimated Delivery:</span>
                    <span>{deliveryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Shipping Method:</span>
                    <span>Standard Shipping</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Payment Method:</span>
                    <span>Credit Card (ending in 1234)</span>
                  </div>
                </div>
              </div>
              
              <Divider className="my-6" />
              
              <div className="text-left mb-6">
                <h2 className="text-xl font-bold mb-3">Shipping Address</h2>
                <address className="not-italic">
                  John Doe<br />
                  123 Main Street<br />
                  Apt 4B<br />
                  New York, NY 10001<br />
                  United States<br />
                  (555) 123-4567
                </address>
              </div>
              
              <div className="space-y-4 mb-8">
                <p>
                  We'll send you shipping confirmation and tracking information once your order is on the way.
                </p>
                <p className="text-default-600">
                  If you have any questions about your order, please contact our customer service team.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  to="/"
                  color="primary"
                  size="lg"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="flat"
                  size="lg"
                  endContent={<Icon icon="lucide:download" />}
                >
                  Download Receipt
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold mb-4">Thank You for Shopping with BambooChic!</h2>
            <p className="text-default-600 mb-4">
              Your support helps us continue our mission of sustainable fashion.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                isIconOnly 
                variant="flat" 
                aria-label="Share on Facebook"
              >
                <Icon icon="lucide:facebook" />
              </Button>
              <Button 
                isIconOnly 
                variant="flat" 
                aria-label="Share on Twitter"
              >
                <Icon icon="lucide:twitter" />
              </Button>
              <Button 
                isIconOnly 
                variant="flat" 
                aria-label="Share on Instagram"
              >
                <Icon icon="lucide:instagram" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;