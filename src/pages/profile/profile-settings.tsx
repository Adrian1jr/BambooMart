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
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  addToast
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../context/auth-context';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

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
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  // Replace single isSubmitting state with separate states for each form
  const [isSubmittingPersonalInfo, setIsSubmittingPersonalInfo] = useState(false);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);
  const [isSubmittingNotifications, setIsSubmittingNotifications] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const validatePersonalInfo = (): boolean => {
    const errors: FormErrors = {};
    
    if (!personalInfo.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    
    if (!personalInfo.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    
    if (personalInfo.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(personalInfo.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const savePersonalInfo = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent event propagation
    
    if (!validatePersonalInfo()) {
      return;
    }
    
    setIsSubmittingPersonalInfo(true);
    
    // Simulate API call - use just one toast notification
    setTimeout(() => {
      updateProfile({
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
      });
      
      addToast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully",
        color: "success"
      });
      
      setIsSubmittingPersonalInfo(false);
    }, 1000);
  };
  
  const validatePasswordChange = (): boolean => {
    const errors: FormErrors = {};
    
    if (!currentPassword) {
      errors.currentPassword = "Current password is required";
    }
    
    if (!newPassword) {
      errors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const changePassword = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent event propagation
    
    if (!validatePasswordChange()) {
      return;
    }
    
    setIsSubmittingPassword(true);
    
    // Simulate API call - use just one toast notification
    setTimeout(() => {
      // Success message
      addToast({
        title: "Password changed",
        description: "Your password has been changed successfully",
        color: "success"
      });
      
      // Clear fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsSubmittingPassword(false);
    }, 1000);
  };
  
  const saveNotificationPreferences = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent event propagation
    
    setIsSubmittingNotifications(true);
    
    // Simulate API call - use just one toast notification
    setTimeout(() => {
      addToast({
        title: "Preferences saved",
        description: "Your notification preferences have been updated",
        color: "success"
      });
      
      setIsSubmittingNotifications(false);
    }, 1000);
  };
  
  const confirmDeleteAccount = () => {
    setIsDeleteModalOpen(true);
  };
  
  const handleDeleteAccount = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsDeleteModalOpen(false);
      setIsSubmitting(false);
      
      addToast({
        title: "Account deleted",
        description: "Your account has been deleted successfully",
        color: "danger"
      });
      
      // In a real app, this would log the user out and redirect
    }, 1500);
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
                        isRequired
                        isInvalid={!!formErrors.firstName}
                        errorMessage={formErrors.firstName}
                      />
                      
                      <Input
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={personalInfo.lastName}
                        onChange={handlePersonalInfoChange}
                        isRequired
                        isInvalid={!!formErrors.lastName}
                        errorMessage={formErrors.lastName}
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
                      isInvalid={!!formErrors.phone}
                      errorMessage={formErrors.phone}
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
                      <Button 
                        color="primary" 
                        onPress={(e) => savePersonalInfo(e)}
                        isLoading={isSubmittingPersonalInfo}
                      >
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
                    isInvalid={!!formErrors.currentPassword}
                    errorMessage={formErrors.currentPassword}
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
                    isInvalid={!!formErrors.newPassword}
                    errorMessage={formErrors.newPassword}
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
                    isInvalid={!!formErrors.confirmPassword}
                    errorMessage={formErrors.confirmPassword}
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
                    <Button 
                      color="primary" 
                      onPress={(e) => changePassword(e)}
                      isLoading={isSubmittingPassword}
                    >
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
                    <Button 
                      color="primary"
                      onPress={(e) => saveNotificationPreferences(e)}
                      isLoading={isSubmittingNotifications}
                    >
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
                
                <Button 
                  color="danger" 
                  variant="flat"
                  onPress={confirmDeleteAccount}
                >
                  Delete Account
                </Button>
              </CardBody>
            </Card>
          </div>
        </Tab>
      </Tabs>
      
      {/* Delete Account Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onOpenChange={() => setIsDeleteModalOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-danger">Delete Account</ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center justify-center py-4">
                  <Icon icon="lucide:alert-triangle" className="text-danger text-5xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">Are you absolutely sure?</h3>
                  <p className="text-center text-default-600">
                    This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button 
                  color="danger" 
                  onPress={handleDeleteAccount}
                  isLoading={isSubmitting}
                >
                  Delete Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileSettings;