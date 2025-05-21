import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody,
  Input,
  Button,
  Divider,
  addToast
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const TrackOrderPage: React.FC = () => {
  const [orderNumber, setOrderNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderResult, setOrderResult] = React.useState<null | {
    id: string;
    date: string;
    status: string;
    trackingNumber: string;
    estimatedDelivery: string;
    items: { name: string; quantity: number; image: string }[];
    timeline: { status: string; date: string; description: string }[];
  }>(null);
  const [error, setError] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!orderNumber.trim()) {
      setError('Please enter an order number');
      return;
    }
    
    if (!email.trim()) {
      setError('Please enter the email address used for your order');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, show a mock order if the input starts with "BCC"
      if (orderNumber.startsWith('BCC')) {
        setOrderResult({
          id: orderNumber,
          date: '2023-06-15',
          status: 'In Transit',
          trackingNumber: '1Z999AA10123456789',
          estimatedDelivery: '2023-06-20',
          items: [
            { 
              name: 'Bamboo Blend Tee', 
              quantity: 2, 
              image: 'clothing?w=100&h=100&u=1' 
            },
            { 
              name: 'Relaxed Fit Jeans', 
              quantity: 1, 
              image: 'clothing?w=100&h=100&u=3' 
            }
          ],
          timeline: [
            { 
              status: 'Order Placed', 
              date: '2023-06-15 09:23 AM', 
              description: 'We\'ve received your order and payment has been confirmed.' 
            },
            { 
              status: 'Processing', 
              date: '2023-06-16 10:45 AM', 
              description: 'Your order is being processed and prepared for shipment.' 
            },
            { 
              status: 'Shipped', 
              date: '2023-06-17 02:30 PM', 
              description: 'Your order has been shipped and is on its way to you.' 
            },
            { 
              status: 'In Transit', 
              date: '2023-06-18 08:15 AM', 
              description: 'Your package is currently in transit to the destination.' 
            }
          ]
        });
      } else {
        // Show error for demo purposes
        addToast({
          title: "Order Not Found",
          description: "We couldn't find an order matching those details. Please check your information and try again.",
          color: "warning",
          timeout: 5000
        });
      }
    }, 1500);
  };
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Track Order</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Track Your Order
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Enter your order number and email address to track the status of your order.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-bold mb-4">Enter Order Information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <Input
                      label="Order Number"
                      placeholder="e.g., BCC-123456"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      description="Your order number can be found in your order confirmation email."
                      isRequired
                      color={error && !orderNumber ? "danger" : "default"}
                      variant="bordered"
                    />
                    
                    <Input
                      label="Email Address"
                      placeholder="Email used for your order"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      description="Enter the email address used when placing the order."
                      isRequired
                      color={error && !email ? "danger" : "default"}
                      variant="bordered"
                    />
                    
                    {error && <p className="text-danger text-sm">{error}</p>}
                    
                    <Button
                      type="submit"
                      color="primary"
                      className="w-full mt-2"
                      size="lg"
                      isLoading={isLoading}
                      startContent={!isLoading && <Icon icon="lucide:search" />}
                    >
                      Track Order
                    </Button>
                  </div>
                </form>
                
                <Divider className="my-8" />
                
                <div>
                  <p className="mb-2 font-medium">Need Help?</p>
                  <p className="text-default-600 text-sm mb-4">
                    For assistance with tracking or any other order questions, please contact our customer service team.
                  </p>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:mail" className="text-primary" />
                    <a href="/contact-us" className="text-primary underline">Contact Customer Service</a>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <div className="mt-6 bg-content2 p-4 rounded-md">
              <h3 className="font-medium mb-2">Order Tracking Tip</h3>
              <p className="text-sm text-default-600">
                For demonstration purposes, enter any order number starting with "BCC" (e.g., BCC-123456) and any email to see a sample tracking result.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {orderResult ? (
              <Card>
                <CardBody className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold">Order #{orderResult.id}</h2>
                      <p className="text-default-500">Placed on {new Date(orderResult.date).toLocaleDateString()}</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {orderResult.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-default-500 text-sm">Tracking Number</p>
                      <p className="font-medium">{orderResult.trackingNumber}</p>
                    </div>
                    <div>
                      <p className="text-default-500 text-sm">Estimated Delivery</p>
                      <p className="font-medium">{new Date(orderResult.estimatedDelivery).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <Divider className="my-4" />
                  
                  <h3 className="font-semibold mb-3">Order Items</h3>
                  <div className="space-y-4 mb-6">
                    {orderResult.items.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <img 
                          src={`https://img.heroui.chat/image/${item.image}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-default-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Divider className="my-4" />
                  
                  <h3 className="font-semibold mb-3">Shipping Timeline</h3>
                  <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-default-200">
                    {orderResult.timeline.map((event, index) => (
                      <div key={index} className="mb-6 relative">
                        <div className={`absolute left-[-8px] top-1 h-4 w-4 rounded-full ${index === 0 ? 'bg-primary' : 'bg-default-300'} ring-4 ring-background`}></div>
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-default-500 mb-1">{event.date}</p>
                        <p className="text-default-600">{event.description}</p>
                      </div>
                    ))}
                    <div className="relative mb-0">
                      <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-default-200 ring-4 ring-background border border-dashed border-default-300"></div>
                      <p className="font-medium text-default-400">Delivered</p>
                      <p className="text-sm text-default-400">Estimated: {new Date(orderResult.estimatedDelivery).toLocaleDateString()}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-content2 rounded-lg">
                <Icon icon="lucide:package" className="text-default-400 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Order Selected</h3>
                <p className="text-default-500 max-w-md">
                  Enter your order details to track your package. You'll be able to see the status, estimated delivery date, and shipping timeline.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;