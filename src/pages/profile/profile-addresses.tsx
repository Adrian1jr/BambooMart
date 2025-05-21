import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input,
  Select,
  SelectItem,
  Radio,
  RadioGroup
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface Address {
  id: string;
  name: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

const ProfileAddresses: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '(555) 123-4567',
      isDefault: true
    },
    {
      id: '2',
      name: 'John Doe',
      street: '456 Market Avenue',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      country: 'United States',
      phone: '(555) 987-6543',
      isDefault: false
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formState, setFormState] = useState<Partial<Address>>({});
  
  const openAddModal = () => {
    setEditingAddress(null);
    setFormState({});
    setIsModalOpen(true);
  };
  
  const openEditModal = (address: Address) => {
    setEditingAddress(address);
    setFormState(address);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string, name: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    if (!formState.name || !formState.street || !formState.city || !formState.state || !formState.zipCode || !formState.country || !formState.phone) {
      return;
    }
    
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...addr, ...formState, isDefault: formState.isDefault ?? addr.isDefault } 
          : formState.isDefault 
            ? { ...addr, isDefault: false } 
            : addr
      ));
    } else {
      // Add new address
      const newAddress: Address = {
        id: Date.now().toString(),
        name: formState.name || '',
        street: formState.street || '',
        apartment: formState.apartment,
        city: formState.city || '',
        state: formState.state || '',
        zipCode: formState.zipCode || '',
        country: formState.country || '',
        phone: formState.phone || '',
        isDefault: formState.isDefault || addresses.length === 0
      };
      
      if (newAddress.isDefault) {
        setAddresses(addresses.map(addr => ({ ...addr, isDefault: false })).concat(newAddress));
      } else {
        setAddresses([...addresses, newAddress]);
      }
    }
    
    closeModal();
  };
  
  const handleDelete = (id: string) => {
    const addressToDelete = addresses.find(addr => addr.id === id);
    const isDefaultAddress = addressToDelete?.isDefault;
    
    const filteredAddresses = addresses.filter(addr => addr.id !== id);
    
    // If we deleted the default address and there are other addresses, make the first one default
    if (isDefaultAddress && filteredAddresses.length > 0) {
      filteredAddresses[0].isDefault = true;
    }
    
    setAddresses(filteredAddresses);
  };
  
  const setAsDefault = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Addresses</h2>
        <Button 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
          onPress={openAddModal}
        >
          Add New Address
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.length > 0 ? (
          addresses.map(address => (
            <Card key={address.id} className="border border-divider">
              <CardBody className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <h3 className="font-medium">{address.name}</h3>
                    {address.isDefault && (
                      <span className="text-xs bg-primary-50 text-primary-500 px-2 py-1 rounded mt-1 inline-block">
                        Default Address
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      isIconOnly 
                      variant="light" 
                      size="sm" 
                      onPress={() => openEditModal(address)}
                      aria-label="Edit address"
                    >
                      <Icon icon="lucide:edit" />
                    </Button>
                    <Button 
                      isIconOnly 
                      variant="light" 
                      size="sm" 
                      color="danger"
                      onPress={() => handleDelete(address.id)}
                      aria-label="Delete address"
                    >
                      <Icon icon="lucide:trash-2" />
                    </Button>
                  </div>
                </div>
                
                <address className="not-italic text-default-600 mb-4">
                  {address.street}<br />
                  {address.apartment && <>{address.apartment}<br /></>}
                  {address.city}, {address.state} {address.zipCode}<br />
                  {address.country}<br />
                  {address.phone}
                </address>
                
                {!address.isDefault && (
                  <Button 
                    variant="flat" 
                    color="primary" 
                    onPress={() => setAsDefault(address.id)}
                  >
                    Set as Default
                  </Button>
                )}
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-12">
            <Icon icon="lucide:map-pin-off" className="text-default-300 text-4xl mx-auto mb-3" />
            <p className="text-default-600 mb-4">You don't have any saved addresses yet.</p>
            <Button 
              color="primary" 
              startContent={<Icon icon="lucide:plus" />}
              onPress={openAddModal}
            >
              Add New Address
            </Button>
          </div>
        )}
      </div>
      
      <Modal isOpen={isModalOpen} onOpenChange={closeModal} size="lg">
        <ModalContent>
          <ModalHeader>
            {editingAddress ? "Edit Address" : "Add New Address"}
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
                value={formState.name || ""}
                onChange={handleInputChange}
                isRequired
              />
              
              <Input
                label="Street Address"
                name="street"
                placeholder="Enter your street address"
                value={formState.street || ""}
                onChange={handleInputChange}
                isRequired
              />
              
              <Input
                label="Apartment, Suite, etc. (optional)"
                name="apartment"
                placeholder="Apartment, suite, unit, etc."
                value={formState.apartment || ""}
                onChange={handleInputChange}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="City"
                  name="city"
                  placeholder="Enter city"
                  value={formState.city || ""}
                  onChange={handleInputChange}
                  isRequired
                />
                
                <Input
                  label="State/Province"
                  name="state"
                  placeholder="Enter state/province"
                  value={formState.state || ""}
                  onChange={handleInputChange}
                  isRequired
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="ZIP/Postal Code"
                  name="zipCode"
                  placeholder="Enter ZIP/postal code"
                  value={formState.zipCode || ""}
                  onChange={handleInputChange}
                  isRequired
                />
                
                <Select
                  label="Country"
                  placeholder="Select country"
                  selectedKeys={formState.country ? [formState.country] : []}
                  onChange={(e) => handleSelectChange(e.target.value, 'country')}
                  isRequired
                >
                  <SelectItem key="United States">United States</SelectItem>
                  <SelectItem key="Canada">Canada</SelectItem>
                  <SelectItem key="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem key="Australia">Australia</SelectItem>
                </Select>
              </div>
              
              <Input
                label="Phone Number"
                name="phone"
                placeholder="Enter phone number"
                value={formState.phone || ""}
                onChange={handleInputChange}
                isRequired
              />
              
              <RadioGroup
                label="Address Type"
                orientation="horizontal"
                value={formState.isDefault ? "default" : "additional"}
                onValueChange={(value) => setFormState(prev => ({ ...prev, isDefault: value === "default" }))}
              >
                <Radio value="default">Make this my default address</Radio>
                <Radio value="additional">Additional address</Radio>
              </RadioGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="flat" onPress={closeModal}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              {editingAddress ? "Update Address" : "Save Address"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileAddresses;