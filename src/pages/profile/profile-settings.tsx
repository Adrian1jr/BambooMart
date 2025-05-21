import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  Divider, 
  Tabs, 
  Tab, 
  Switch, 
  Avatar,
  Card,
  CardBody
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/auth-context';

const ProfileSettings: React.FC = () => {
  const { user, updateProfile } = useAuth();
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
    bio: ''
  });
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    orders: true,
    promotions: true,
    news: false,
    productUpdates: true,
  });
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const savePersonalInfo = () => {
    updateProfile({
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
    });
  };
  
  const changePassword = () => {
    // Password validation would go here
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    
    // Success message
    alert('Password changed successfully!');
    
    // Clear fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
  return (
    <div className="p-6">
      <Tabs aria-label="Settings tabs" color="primary" variant="underlined">
        <Tab key="account" title="Account">
          <div className="pt-4">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <Avatar
                      src={`https://img.heroui.chat/image/${user?.avatar || "avatar?w=200&h=200&u=1"}`}
                      className="w-24 h-24 mb-2"
                    />
                    <Button variant="flat" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={personalInfo.firstName}
                        onChange={handlePersonalInfoChange}
                      />
                      
                      <Input
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={personalInfo.lastName}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <Input
                      label="Email Address"
                      name="email"
                      placeholder="Enter your email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      isDisabled
                    />
                    
                    <Input
                      label="Phone Number (optional)"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                    />
                    
                    <div>
                      <label className="block text-sm font-medium pb-1.5">Bio (optional)</label>
                      <textarea
                        name="bio"
                        rows={3}
                        className="w-full px-3 py-2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us a bit about yourself"
                        value={personalInfo.bio}
                        onChange={handlePersonalInfoChange}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button color="primary" onPress={savePersonalInfo}>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="mt-6">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                
                <div className="space-y-4">
                  <Input
                    label="Current Password"
                    placeholder="Enter your current password"
                    type={passwordIsVisible ? "text" : "password"}
                    value={currentPassword}
                    onChange={e => setCurrentPassword(e.target.value)}
                    endContent={
                      <button type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        {passwordIsVisible ? (
                          <Icon icon="lucide:eye-off" className="text-default-400" />
                        ) : (
                          <Icon icon="lucide:eye" className="text-default-400" />
                        )}
                      </button>
                    }
                  />
                  
                  <Input
                    label="New Password"
                    placeholder="Enter new password"
                    type={passwordIsVisible ? "text" : "password"}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    endContent={
                      <button type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        {passwordIsVisible ? (
                          <Icon icon="lucide:eye-off" className="text-default-400" />
                        ) : (
                          <Icon icon="lucide:eye" className="text-default-400" />
                        )}
                      </button>
                    }
                  />
                  
                  <Input
                    label="Confirm New Password"
                    placeholder="Confirm your new password"
                    type={passwordIsVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    endContent={
                      <button type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        {passwordIsVisible ? (
                          <Icon icon="lucide:eye-off" className="text-default-400" />
                        ) : (
                          <Icon icon="lucide:eye" className="text-default-400" />
                        )}
                      </button>
                    }
                  />
                  
                  <div className="flex justify-end">
                    <Button color="primary" onPress={changePassword}>
                      Update Password
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        
        <Tab key="notifications" title="Notifications">
          <div className="pt-4">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-default-500">Receive updates on your order status</p>
                    </div>
                    <Switch 
                      isSelected={emailNotifications.orders}
                      onValueChange={(checked) => 
                        setEmailNotifications(prev => ({ ...prev, orders: checked }))
                      }
                    />
                  </div>
                  
                  <Divider />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Promotions and Sales</p>
                      <p className="text-sm text-default-500">Get notified about discounts and special offers</p>
                    </div>
                    <Switch 
                      isSelected={emailNotifications.promotions}
                      onValueChange={(checked) => 
                        setEmailNotifications(prev => ({ ...prev, promotions: checked }))
                      }
                    />
                  </div>
                  
                  <Divider />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">News and Events</p>
                      <p className="text-sm text-default-500">Stay updated with company news and events</p>
                    </div>
                    <Switch 
                      isSelected={emailNotifications.news}
                      onValueChange={(checked) => 
                        setEmailNotifications(prev => ({ ...prev, news: checked }))
                      }
                    />
                  </div>
                  
                  <Divider />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Product Updates</p>
                      <p className="text-sm text-default-500">Get notified when your favorite products are back in stock</p>
                    </div>
                    <Switch 
                      isSelected={emailNotifications.productUpdates}
                      onValueChange={(checked) => 
                        setEmailNotifications(prev => ({ ...prev, productUpdates: checked }))
                      }
                    />
                  </div>
                  
                  <Divider />
                  
                  <div className="flex justify-end">
                    <Button color="primary">
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        
        <Tab key="account-management" title="Account Management">
          <div className="pt-4">
            <Card className="border border-danger/30">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-danger mb-4">Delete Account</h3>
                
                <p className="mb-4 text-default-600">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                
                <Button color="danger" variant="flat">
                  Delete Account
                </Button>
              </CardBody>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;