import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Card, CardBody, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/auth-context';

const ProfileOverview: React.FC = () => {
  const { user } = useAuth();

  // Mock order data
  const recentOrders = [
    { 
      id: 'BCC-123456', 
      date: '2023-06-15', 
      status: 'Delivered', 
      total: 149.97, 
      items: 3 
    },
    { 
      id: 'BCC-123457', 
      date: '2023-05-22', 
      status: 'Processing', 
      total: 79.99, 
      items: 1 
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Card>
            <CardBody className="p-6">
              <div className="flex flex-col items-center">
                <Avatar
                  src={`https://img.heroui.chat/image/${user?.avatar || "avatar?w=200&h=200&u=1"}`}
                  className="w-24 h-24"
                />
                <h2 className="text-xl font-semibold mt-4">{user?.firstName} {user?.lastName}</h2>
                <p className="text-default-500 mb-4">{user?.email}</p>
                <Button 
                  as={Link}
                  to="/profile/settings"
                  variant="flat" 
                  color="primary" 
                  startContent={<Icon icon="lucide:edit" />}
                >
                  Edit Profile
                </Button>
              </div>
              
              <Divider className="my-6" />
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-default-600">Member Since:</span>
                  <span className="font-medium">June 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-600">Total Orders:</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-600">Total Spent:</span>
                  <span className="font-medium">$487.93</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-600">Reward Points:</span>
                  <span className="font-medium text-primary">240 points</span>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/favorites" className="flex items-center gap-2 text-default-600 hover:text-primary">
                  <Icon icon="lucide:heart" />
                  <span>My Wishlist</span>
                </Link>
                <Link to="/profile/orders" className="flex items-center gap-2 text-default-600 hover:text-primary">
                  <Icon icon="lucide:package" />
                  <span>Track Orders</span>
                </Link>
                <Link to="/profile/addresses" className="flex items-center gap-2 text-default-600 hover:text-primary">
                  <Icon icon="lucide:map-pin" />
                  <span>Manage Addresses</span>
                </Link>
                <Link to="/profile/settings" className="flex items-center gap-2 text-default-600 hover:text-primary">
                  <Icon icon="lucide:settings" />
                  <span>Account Settings</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="md:w-2/3">
          <Card>
            <CardBody className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <Button 
                  as={Link}
                  to="/profile/orders"
                  variant="light" 
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  View All
                </Button>
              </div>
              
              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="bg-content2 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                          <span className="font-medium">Order #{order.id}</span>
                          <span className="text-sm text-default-500">
                            {new Date(order.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' 
                            ? 'bg-success-100 text-success-500' 
                            : 'bg-primary-100 text-primary-500'
                        }`}>
                          {order.status}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2">
                        <div className="text-default-600 text-sm">
                          {order.items} {order.items === 1 ? 'item' : 'items'}
                        </div>
                        <div className="flex gap-4 items-center mt-2 md:mt-0">
                          <span className="font-medium">${order.total.toFixed(2)}</span>
                          <Button 
                            as={Link} 
                            to={`/profile/orders/${order.id}`}
                            size="sm" 
                            variant="flat" 
                            color="primary"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon icon="lucide:package" className="text-default-300 text-4xl mx-auto mb-3" />
                  <p className="text-default-600">You haven't placed any orders yet.</p>
                  <Button 
                    as={Link}
                    to="/categories"
                    color="primary"
                    variant="flat"
                    className="mt-4"
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Default Shipping Address</h3>
                  <Button 
                    as={Link}
                    to="/profile/addresses"
                    variant="light" 
                    size="sm"
                    startContent={<Icon icon="lucide:edit" />}
                  >
                    Edit
                  </Button>
                </div>
                
                <address className="not-italic text-default-600">
                  John Doe<br />
                  123 Main Street<br />
                  Apt 4B<br />
                  New York, NY 10001<br />
                  United States<br />
                  (555) 123-4567
                </address>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Default Payment Method</h3>
                  <Button 
                    as={Link}
                    to="/profile/settings"
                    variant="light" 
                    size="sm"
                    startContent={<Icon icon="lucide:edit" />}
                  >
                    Edit
                  </Button>
                </div>
                
                <div className="flex items-center">
                  <Icon icon="logos:visa" width={40} className="mr-4" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-default-500">Expires 12/25</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;