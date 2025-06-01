import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody,
  Button,
  Divider,
  Avatar
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  shippingMethod: string;
  subtotal: number;
  shipping: number;
  tax: number;
  timeline: {
    status: string;
    date: string;
    description: string;
  }[];
}

const OrderDetailPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  
  // Mock order data
  const order: Order = {
    id: orderId || 'BCC-123456',
    date: '2023-06-15',
    status: 'Delivered',
    total: 149.97,
    items: [
      { 
        id: 1, 
        name: 'Bamboo Blend Tee', 
        quantity: 2, 
        price: 39.99,
        image: 'clothing?w=100&h=100&u=1'
      },
      { 
        id: 3, 
        name: 'Relaxed Fit Jeans', 
        quantity: 1, 
        price: 69.99,
        image: 'clothing?w=100&h=100&u=3'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethod: 'Credit Card (ending in 1234)',
    shippingMethod: 'Standard Shipping',
    subtotal: 149.97,
    shipping: 0,
    tax: 12.75,
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
        status: 'Delivered', 
        date: '2023-06-19 11:15 AM', 
        description: 'Your package has been delivered.' 
      }
    ]
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success-100 text-success-500';
      case 'Processing':
        return 'bg-primary-100 text-primary-500';
      case 'Shipped':
        return 'bg-warning-100 text-warning-500';
      case 'Cancelled':
        return 'bg-danger-100 text-danger-500';
      default:
        return 'bg-default-100 text-default-500';
    }
  };
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/profile">My Account</BreadcrumbItem>
          <BreadcrumbItem href="/profile/orders">Orders</BreadcrumbItem>
          <BreadcrumbItem>{order.id}</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h1 className="text-2xl font-bold">Order #{order.id}</h1>
            <p className="text-default-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
          </div>
          
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-divider last:border-0 last:pb-0">
                      <Avatar
                        src={`https://img.heroui.chat/image/${item.image}`}
                        className="w-16 h-16 rounded"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-default-500 mt-1">
                          <span>Qty: {item.quantity}</span>
                          <span>${item.price.toFixed(2)} each</span>
                        </div>
                        <div className="mt-2">
                          <Button 
                            as={Link}
                            to={`/product/${item.id}`}
                            size="sm"
                            variant="flat"
                          >
                            View Product
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card className="mt-6">
              <CardBody className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Timeline</h2>
                
                <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-default-200">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="mb-6 relative">
                      <div className={`absolute left-[-8px] top-1 h-4 w-4 rounded-full ${index === order.timeline.length - 1 ? 'bg-primary' : 'bg-default-300'} ring-4 ring-background`}></div>
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-default-500 mb-1">{event.date}</p>
                      <p className="text-default-600">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-default-600">Subtotal:</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Shipping:</span>
                    {order.shipping === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      <span>${order.shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Tax:</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <Divider className="my-4" />
                
                <div className="flex justify-between mb-6">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl">${order.total.toFixed(2)}</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Shipping Address</h3>
                    <div className="bg-content2 p-3 rounded-lg">
                      <p className="font-medium">{order.shippingAddress.name}</p>
                      <address className="not-italic text-default-600">
                        {order.shippingAddress.street}<br />
                        {order.shippingAddress.apartment && <>{order.shippingAddress.apartment}<br /></>}
                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                        {order.shippingAddress.country}
                      </address>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <div className="bg-content2 p-3 rounded-lg">
                      <p className="text-default-600">{order.paymentMethod}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Shipping Method</h3>
                    <div className="bg-content2 p-3 rounded-lg">
                      <p className="text-default-600">{order.shippingMethod}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <div className="mt-6 flex gap-3">
              <Button 
                as={Link}
                to="/profile/orders"
                variant="flat"
                startContent={<Icon icon="lucide:arrow-left" />}
                fullWidth
              >
                Back to Orders
              </Button>
              
              <Button 
                variant="flat"
                color="primary"
                startContent={<Icon icon="lucide:printer" />}
                fullWidth
              >
                Print Receipt
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;