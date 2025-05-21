import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card, 
  CardBody,
  Tabs,
  Tab
} from '@heroui/react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/auth-context';
import { useAuthModal } from '../../components/auth/auth-modal-provider';
import ProfileOverview from './profile-overview';
import ProfileOrders from './profile-orders';
import ProfileAddresses from './profile-addresses';
import ProfileSettings from './profile-settings';

const ProfilePage: React.FC = () => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth();
  const { openModal } = useAuthModal();
  const [selectedTab, setSelectedTab] = useState(() => {
    if (history.location.pathname.includes('/orders')) return 'orders';
    if (history.location.pathname.includes('/addresses')) return 'addresses';
    if (history.location.pathname.includes('/settings')) return 'settings';
    return 'overview';
  });

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      openModal('login');
      history.push('/');
    }
  }, [isAuthenticated, history, openModal]);

  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    if (key === 'overview') {
      history.push('/profile');
    } else {
      history.push(`/profile/${key}`);
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>My Account</BreadcrumbItem>
        </Breadcrumbs>

        <motion.h1 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          My Account
        </motion.h1>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardBody className="p-0">
              <Tabs 
                aria-label="Profile tabs" 
                selectedKey={selectedTab} 
                onSelectionChange={key => handleTabChange(key as string)}
                color="primary"
                variant="underlined"
                classNames={{
                  base: "w-full",
                  tabList: "w-full px-6 pt-4",
                  cursor: "w-full",
                  tab: "flex gap-2 h-12",
                  panel: "py-0"
                }}
              >
                <Tab 
                  key="overview" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="text-inherit">Overview</span>
                    </div>
                  }
                >
                  <Switch>
                    <Route exact path="/profile" component={ProfileOverview} />
                    <Route path="/profile/orders" component={ProfileOrders} />
                    <Route path="/profile/addresses" component={ProfileAddresses} />
                    <Route path="/profile/settings" component={ProfileSettings} />
                  </Switch>
                </Tab>
                <Tab 
                  key="orders" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="text-inherit">Orders</span>
                    </div>
                  }
                >
                  <Switch>
                    <Route exact path="/profile" component={ProfileOverview} />
                    <Route path="/profile/orders" component={ProfileOrders} />
                    <Route path="/profile/addresses" component={ProfileAddresses} />
                    <Route path="/profile/settings" component={ProfileSettings} />
                  </Switch>
                </Tab>
                <Tab 
                  key="addresses" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="text-inherit">Addresses</span>
                    </div>
                  }
                >
                  <Switch>
                    <Route exact path="/profile" component={ProfileOverview} />
                    <Route path="/profile/orders" component={ProfileOrders} />
                    <Route path="/profile/addresses" component={ProfileAddresses} />
                    <Route path="/profile/settings" component={ProfileSettings} />
                  </Switch>
                </Tab>
                <Tab 
                  key="settings" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="text-inherit">Settings</span>
                    </div>
                  }
                >
                  <Switch>
                    <Route exact path="/profile" component={ProfileOverview} />
                    <Route path="/profile/orders" component={ProfileOrders} />
                    <Route path="/profile/addresses" component={ProfileAddresses} />
                    <Route path="/profile/settings" component={ProfileSettings} />
                  </Switch>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;