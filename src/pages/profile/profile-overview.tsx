import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardBody, 
  Button,
  Avatar
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/auth-context';

const ProfileOverview: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data
  const recentOrders = [
    { id: 'BMM-123456', date: '2023-06-15', status: 'Delivered', total: 149.97 },
    { id: 'BMM-123457', date: '2023-05-22', status: 'Processing', total: 79.99 },
  ];
  
  const savedAddresses = [
    {
      id: '1',
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    }
  ];
  
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
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardBody className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar
                  src={`https://img.heroui.chat/image/${user?.avatar || "avatar?w=200&h=200&u=1"}`}
                  className="w-24 h-24"
                />
                <div>
                  <h2 className="text-2xl font-bold">{user?.firstName} {user?.lastName}</h2>
                  <p className="text-default-500">{user?.email}</p>
                  <div className="flex gap-3 mt-3">
                    <Button 
                      as={Link}
                      to="/profile/settings"
                      variant="flat"
                      size="sm"
                      startContent={<Icon icon="lucide:settings" />}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardBody className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <Button 
                  as={Link}
                  to="/profile/orders"
                  variant="light"
                  size="sm"
                >
                  View All
                </Button>
              </div>
              
              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="border border-divider rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{order.id}</span>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-default-500">{new Date(order.date).toLocaleDateString()}</span>
                        <span className="font-medium">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Icon icon="lucide:package" className="text-default-300 text-3xl mx-auto mb-2" />
                  <p className="text-default-500">No recent orders</p>
                </div>
              )}
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="md:col-span-2"
        >
          <Card className="h-full">
            <CardBody className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Default Address</h3>
                <Button 
                  as={Link}
                  to="/profile/addresses"
                  variant="light"
                  size="sm"
                >
                  Manage Addresses
                </Button>
              </div>
              
              {savedAddresses.length > 0 ? (
                <div className="border border-divider rounded-lg p-4">
                  <h4 className="font-medium mb-1">{savedAddresses[0].name}</h4>
                  <address className="not-italic text-default-600">
                    {savedAddresses[0].street}<br />
                    {savedAddresses[0].apartment && <>{savedAddresses[0].apartment}<br /></>}
                    {savedAddresses[0].city}, {savedAddresses[0].state} {savedAddresses[0].zipCode}
                  </address>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Icon icon="lucide:map-pin-off" className="text-default-300 text-3xl mx-auto mb-2" />
                  <p className="text-default-500">No addresses saved</p>
                  <Button 
                    as={Link}
                    to="/profile/addresses"
                    color="primary"
                    variant="flat"
                    size="sm"
                    className="mt-2"
                  >
                    Add Address
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardBody className="p-6">
            <h3 className="text-lg font-semibold mb-4">Account Quick Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                as={Link}
                to="/profile/orders"
                variant="flat"
                className="h-auto py-4 flex-col items-center justify-center"
                fullWidth
              >
                <Icon icon="lucide:package" className="text-2xl mb-2" />
                <span>My Orders</span>
              </Button>
              
              <Button 
                as={Link}
                to="/favorites"
                variant="flat"
                className="h-auto py-4 flex-col items-center justify-center"
                fullWidth
              >
                <Icon icon="lucide:heart" className="text-2xl mb-2" />
                <span>Wishlist</span>
              </Button>
              
              <Button 
                as={Link}
                to="/profile/addresses"
                variant="flat"
                className="h-auto py-4 flex-col items-center justify-center"
                fullWidth
              >
                <Icon icon="lucide:map-pin" className="text-2xl mb-2" />
                <span>Addresses</span>
              </Button>
              
              <Button 
                as={Link}
                to="/profile/settings"
                variant="flat"
                className="h-auto py-4 flex-col items-center justify-center"
                fullWidth
              >
                <Icon icon="lucide:settings" className="text-2xl mb-2" />
                <span>Account Settings</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfileOverview;