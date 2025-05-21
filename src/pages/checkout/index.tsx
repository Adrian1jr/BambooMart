import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardBody, 
  Divider, 
  Input, 
  Radio, 
  RadioGroup,
  Checkbox,
  Tabs,
  Tab,
  Breadcrumbs,
  BreadcrumbItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/cart-context';
import { addToast } from '@heroui/react';
import ReactConfetti from 'react-confetti';

const CheckoutPage: React.FC = () => {
  const history = useHistory();
  const { items, subtotal, clearCart } = useCart();
  const [activeStep, setActiveStep] = React.useState(0);
  const [paymentMethod, setPaymentMethod] = React.useState("credit-card");
  const [shippingMethod, setShippingMethod] = React.useState("standard");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  
  // Form validation state
  const [formValues, setFormValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    expDate: '',
    cvv: '',
    nameOnCard: ''
  });
  
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});
  
  // Calculate shipping, tax, and total
  const shipping = shippingMethod === "express" ? 12.99 : (subtotal > 50 ? 0 : 5.99);
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = {...prev};
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  // Validate shipping form fields
  const validateShippingForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formValues.firstName.trim()) errors.firstName = 'First name is required';
    if (!formValues.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formValues.email.trim()) errors.email = 'Email is required';
    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) 
      errors.email = 'Please enter a valid email address';
    if (!formValues.address1.trim()) errors.address1 = 'Address is required';
    if (!formValues.city.trim()) errors.city = 'City is required';
    if (!formValues.state.trim()) errors.state = 'State is required';
    if (!formValues.zip.trim()) errors.zip = 'Zip code is required';
    if (!formValues.country.trim()) errors.country = 'Country is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Validate payment form fields
  const validatePaymentForm = () => {
    if (paymentMethod !== 'credit-card') return true;
    
    const errors: Record<string, string> = {};
    
    if (!formValues.cardNumber.trim()) errors.cardNumber = 'Card number is required';
    if (!formValues.expDate.trim()) errors.expDate = 'Expiration date is required';
    if (!formValues.cvv.trim()) errors.cvv = 'CVV is required';
    if (!formValues.nameOnCard.trim()) errors.nameOnCard = 'Name on card is required';
    
    // Additional card validations could be added here
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle step changes with validation
  const handleNextStep = (nextStep: number) => {
    if (activeStep === 0 && !validateShippingForm()) {
      addToast({
        title: "Please check your information",
        description: "All required fields must be filled out correctly.",
        color: "danger",
      });
      return;
    }
    
    setActiveStep(nextStep);
  };
  
  // Handle order placement
  const handlePlaceOrder = () => {
    if (!validatePaymentForm()) {
      addToast({
        title: "Please check your payment information",
        description: "All required payment fields must be filled out correctly.",
        color: "danger",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      // Show confetti
      setShowConfetti(true);
      
      // Show success toast
      addToast({
        title: "Order Placed Successfully!",
        description: "Your order has been processed and will be shipped soon.",
        color: "success",
        timeout: 5000,
      });
      
      clearCart();
      
      // Redirect after a slight delay to see the confetti
      setTimeout(() => {
        history.push('/order-confirmation');
        setIsLoading(false);
      }, 2000);
    }, 1500);
  };
  
  if (items.length === 0) {
    history.push('/cart');
    return null;
  }
  
  return (
    <div className="py-8">
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.15}
          colors={['#4E9F3D', '#66c266', '#e6f5e6', '#ffffff', '#f5a524']}
        />
      )}
      
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/cart">Shopping Cart</BreadcrumbItem>
          <BreadcrumbItem>Checkout</BreadcrumbItem>
        </Breadcrumbs>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardBody className="p-0">
                <Tabs 
                  selectedKey={String(activeStep)} 
                  onSelectionChange={(key) => setActiveStep(Number(key))}
                  color="primary"
                  disabledKeys={isLoading ? ["0", "1", "2"] : []}
                >
                  <Tab 
                    key="0" 
                    title={
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">
                          1
                        </div>
                        <span>Shipping</span>
                      </div>
                    }
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-6"
                    >
                      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Input 
                          label="First Name" 
                          placeholder="Enter your first name"
                          isRequired
                          value={formValues.firstName}
                          onValueChange={(value) => handleInputChange('firstName', value)}
                          isInvalid={!!formErrors.firstName}
                          errorMessage={formErrors.firstName}
                        />
                        <Input 
                          label="Last Name" 
                          placeholder="Enter your last name"
                          isRequired
                          value={formValues.lastName}
                          onValueChange={(value) => handleInputChange('lastName', value)}
                          isInvalid={!!formErrors.lastName}
                          errorMessage={formErrors.lastName}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <Input 
                          label="Email Address" 
                          placeholder="Enter your email address"
                          type="email"
                          isRequired
                          value={formValues.email}
                          onValueChange={(value) => handleInputChange('email', value)}
                          isInvalid={!!formErrors.email}
                          errorMessage={formErrors.email}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <Input 
                          label="Phone Number" 
                          placeholder="Enter your phone number"
                          type="tel"
                          value={formValues.phone}
                          onValueChange={(value) => handleInputChange('phone', value)}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <Input 
                          label="Address Line 1" 
                          placeholder="Street address, P.O. box, company name"
                          isRequired
                          value={formValues.address1}
                          onValueChange={(value) => handleInputChange('address1', value)}
                          isInvalid={!!formErrors.address1}
                          errorMessage={formErrors.address1}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <Input 
                          label="Address Line 2" 
                          placeholder="Apartment, suite, unit, building, floor, etc."
                          value={formValues.address2}
                          onValueChange={(value) => handleInputChange('address2', value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <Input 
                          label="City" 
                          placeholder="Enter city"
                          isRequired
                          value={formValues.city}
                          onValueChange={(value) => handleInputChange('city', value)}
                          isInvalid={!!formErrors.city}
                          errorMessage={formErrors.city}
                        />
                        <Input 
                          label="State/Province" 
                          placeholder="Enter state"
                          isRequired
                          value={formValues.state}
                          onValueChange={(value) => handleInputChange('state', value)}
                          isInvalid={!!formErrors.state}
                          errorMessage={formErrors.state}
                        />
                        <Input 
                          label="Zip/Postal Code" 
                          placeholder="Enter postal code"
                          isRequired
                          value={formValues.zip}
                          onValueChange={(value) => handleInputChange('zip', value)}
                          isInvalid={!!formErrors.zip}
                          errorMessage={formErrors.zip}
                        />
                      </div>
                      
                      <div className="mb-6">
                        <Input 
                          label="Country" 
                          placeholder="Select country"
                          value={formValues.country}
                          onValueChange={(value) => handleInputChange('country', value)}
                          isInvalid={!!formErrors.country}
                          errorMessage={formErrors.country}
                          isRequired
                        />
                      </div>
                      
                      <div className="mb-6">
                        <Checkbox defaultSelected>
                          Save this address for future orders
                        </Checkbox>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          color="primary" 
                          onPress={() => handleNextStep(1)}
                          endContent={<Icon icon="lucide:arrow-right" />}
                        >
                          Continue to Shipping Method
                        </Button>
                      </div>
                    </motion.div>
                  </Tab>
                  
                  <Tab 
                    key="1" 
                    title={
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">
                          2
                        </div>
                        <span>Delivery</span>
                      </div>
                    }
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-6"
                    >
                      <h2 className="text-xl font-bold mb-4">Shipping Method</h2>
                      
                      <RadioGroup 
                        value={shippingMethod}
                        onValueChange={setShippingMethod}
                      >
                        <div className="space-y-4">
                          <Card 
                            isPressable 
                            onPress={() => setShippingMethod("standard")}
                            className={`border ${shippingMethod === "standard" ? "border-primary" : "border-divider"}`}
                          >
                            <CardBody className="flex items-center gap-4">
                              <Radio value="standard" />
                              <div className="flex-grow">
                                <div className="font-medium">Standard Shipping</div>
                                <div className="text-default-500 text-sm">Delivery in 3-5 business days</div>
                              </div>
                              <div className="font-medium">
                                {subtotal > 50 ? (
                                  <span className="text-success">Free</span>
                                ) : (
                                  <span>$5.99</span>
                                )}
                              </div>
                            </CardBody>
                          </Card>
                          
                          <Card 
                            isPressable 
                            onPress={() => setShippingMethod("express")}
                            className={`border ${shippingMethod === "express" ? "border-primary" : "border-divider"}`}
                          >
                            <CardBody className="flex items-center gap-4">
                              <Radio value="express" />
                              <div className="flex-grow">
                                <div className="font-medium">Express Shipping</div>
                                <div className="text-default-500 text-sm">Delivery in 1-2 business days</div>
                              </div>
                              <div className="font-medium">$12.99</div>
                            </CardBody>
                          </Card>
                        </div>
                      </RadioGroup>
                      
                      <div className="flex justify-between mt-8">
                        <Button 
                          variant="flat" 
                          onPress={() => setActiveStep(0)}
                          startContent={<Icon icon="lucide:arrow-left" />}
                        >
                          Back to Shipping
                        </Button>
                        <Button 
                          color="primary" 
                          onPress={() => setActiveStep(2)}
                          endContent={<Icon icon="lucide:arrow-right" />}
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </motion.div>
                  </Tab>
                  
                  <Tab 
                    key="2" 
                    title={
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">
                          3
                        </div>
                        <span>Payment</span>
                      </div>
                    }
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-6"
                    >
                      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                      
                      <RadioGroup 
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="mb-6"
                      >
                        <div className="space-y-4">
                          <Card 
                            isPressable 
                            onPress={() => setPaymentMethod("credit-card")}
                            className={`border ${paymentMethod === "credit-card" ? "border-primary" : "border-divider"}`}
                          >
                            <CardBody className="flex items-center gap-4">
                              <Radio value="credit-card" />
                              <div className="flex-grow">
                                <div className="font-medium">Credit / Debit Card</div>
                                <div className="text-default-500 text-sm">Pay with Visa, Mastercard, etc.</div>
                              </div>
                              <div className="flex gap-2">
                                <Icon icon="logos:visa" width={32} />
                                <Icon icon="logos:mastercard" width={32} />
                                <Icon icon="logos:amex" width={32} />
                              </div>
                            </CardBody>
                          </Card>
                          
                          <Card 
                            isPressable 
                            onPress={() => setPaymentMethod("paypal")}
                            className={`border ${paymentMethod === "paypal" ? "border-primary" : "border-divider"}`}
                          >
                            <CardBody className="flex items-center gap-4">
                              <Radio value="paypal" />
                              <div className="flex-grow">
                                <div className="font-medium">PayPal</div>
                                <div className="text-default-500 text-sm">Pay with your PayPal account</div>
                              </div>
                              <Icon icon="logos:paypal" width={64} />
                            </CardBody>
                          </Card>
                          
                          <Card 
                            isPressable 
                            onPress={() => setPaymentMethod("apple-pay")}
                            className={`border ${paymentMethod === "apple-pay" ? "border-primary" : "border-divider"}`}
                          >
                            <CardBody className="flex items-center gap-4">
                              <Radio value="apple-pay" />
                              <div className="flex-grow">
                                <div className="font-medium">Apple Pay</div>
                                <div className="text-default-500 text-sm">Pay with Apple Pay</div>
                              </div>
                              <Icon icon="logos:apple-pay" width={48} />
                            </CardBody>
                          </Card>
                        </div>
                      </RadioGroup>
                      
                      {paymentMethod === "credit-card" && (
                        <div className="space-y-4 mb-6">
                          <Input 
                            label="Card Number" 
                            placeholder="1234 5678 9012 3456"
                            isRequired
                            value={formValues.cardNumber}
                            onValueChange={(value) => handleInputChange('cardNumber', value)}
                            isInvalid={!!formErrors.cardNumber}
                            errorMessage={formErrors.cardNumber}
                            startContent={<Icon icon="lucide:credit-card" className="text-default-400" />}
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <Input 
                              label="Expiration Date" 
                              placeholder="MM/YY"
                              isRequired
                              value={formValues.expDate}
                              onValueChange={(value) => handleInputChange('expDate', value)}
                              isInvalid={!!formErrors.expDate}
                              errorMessage={formErrors.expDate}
                            />
                            <Input 
                              label="CVV" 
                              placeholder="123"
                              isRequired
                              value={formValues.cvv}
                              onValueChange={(value) => handleInputChange('cvv', value)}
                              isInvalid={!!formErrors.cvv}
                              errorMessage={formErrors.cvv}
                              endContent={
                                <Button
                                  isIconOnly
                                  variant="light"
                                  size="sm"
                                >
                                  <Icon icon="lucide:help-circle" className="text-default-400" />
                                </Button>
                              }
                            />
                          </div>
                          
                          <Input 
                            label="Name on Card" 
                            placeholder="Enter the name on your card"
                            isRequired
                            value={formValues.nameOnCard}
                            onValueChange={(value) => handleInputChange('nameOnCard', value)}
                            isInvalid={!!formErrors.nameOnCard}
                            errorMessage={formErrors.nameOnCard}
                          />
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <Checkbox defaultSelected>
                          Save payment information for future purchases
                        </Checkbox>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          variant="flat" 
                          onPress={() => setActiveStep(1)}
                          startContent={<Icon icon="lucide:arrow-left" />}
                          isDisabled={isLoading}
                        >
                          Back to Shipping Method
                        </Button>
                        <Button 
                          color="primary" 
                          onPress={handlePlaceOrder}
                          isLoading={isLoading}
                          isDisabled={isLoading}
                        >
                          {isLoading ? "Processing..." : "Place Order"}
                        </Button>
                      </div>
                    </motion.div>
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardBody>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-4">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img 
                        src={`https://img.heroui.chat/image/${item.image}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-grow">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-default-500">
                          Qty: {item.quantity}
                        </div>
                        <div className="text-sm">
                          ${((item.sale ? item.salePrice : item.price) || 0 * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Divider className="my-4" />
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-default-600">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Shipping:</span>
                    {shipping === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      <span>${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-default-600">Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <Divider className="my-4" />
                
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>
                
                <div className="text-sm text-default-500">
                  By placing your order, you agree to our <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.
                </div>
              </CardBody>
            </Card>
            
            <Card className="mt-4">
              <CardBody>
                <div className="flex items-center gap-3 text-success">
                  <Icon icon="lucide:shield" />
                  <div>
                    <div className="font-medium">Secure Checkout</div>
                    <div className="text-sm text-default-500">
                      Your payment information is encrypted
                    </div>
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

export default CheckoutPage;