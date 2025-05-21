import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter, 
  Divider,
  Image,
  Breadcrumbs,
  BreadcrumbItem
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/cart-context';
import QuantitySelector from '../../components/quantity-selector';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  
  // Calculate shipping, tax, and total
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Shopping Cart</BreadcrumbItem>
        </Breadcrumbs>
        
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl text-default-300 mb-4">
              <Icon icon="lucide:shopping-bag" className="mx-auto" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-default-500 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button 
              as={Link} 
              to="/" 
              color="primary" 
              size="lg"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardBody>
                  <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-divider">
                    <div className="col-span-6">
                      <span className="font-medium">Product</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Price</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Quantity</span>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="font-medium">Subtotal</span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {items.map(item => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="py-4 border-b border-divider last:border-b-0"
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          {/* Product Image & Info */}
                          <div className="col-span-12 md:col-span-6">
                            <div className="flex gap-4">
                              <Image
                                removeWrapper
                                src={`https://img.heroui.chat/image/${item.image}`}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <div className="text-sm text-default-500 mt-1">
                                  <span className="mr-2">Size: M</span>
                                  <span>Color: Black</span>
                                </div>
                                <Button
                                  variant="light"
                                  size="sm"
                                  color="danger"
                                  startContent={<Icon icon="lucide:trash-2" size={16} />}
                                  className="mt-2 p-0 h-auto"
                                  onPress={() => removeItem(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className="col-span-4 md:col-span-2 text-left md:text-center">
                            <div className="md:hidden text-sm text-default-500">Price:</div>
                            <div>
                              {item.sale ? (
                                <span className="text-danger">${item.salePrice?.toFixed(2)}</span>
                              ) : (
                                <span>${item.price.toFixed(2)}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Quantity */}
                          <div className="col-span-4 md:col-span-2 flex justify-start md:justify-center">
                            <div className="md:hidden text-sm text-default-500 mb-1">Quantity:</div>
                            <QuantitySelector
                              quantity={item.quantity}
                              onChange={(qty) => updateQuantity(item.id, qty)}
                            />
                          </div>
                          
                          {/* Subtotal */}
                          <div className="col-span-4 md:col-span-2 text-right">
                            <div className="md:hidden text-sm text-default-500">Subtotal:</div>
                            <div className="font-medium">
                              ${((item.sale ? item.salePrice : item.price) || 0 * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </CardBody>
                <CardFooter className="flex justify-between">
                  <Button
                    as={Link}
                    to="/"
                    variant="flat"
                    startContent={<Icon icon="lucide:arrow-left" />}
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    color="primary"
                    variant="flat"
                    endContent={<Icon icon="lucide:refresh-cw" />}
                  >
                    Update Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card>
                <CardBody>
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-default-600">Items ({itemCount}):</span>
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
                      <span className="text-default-600">Estimated Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Divider className="my-4" />
                  
                  <div className="flex justify-between mb-6">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                  
                  <Button
                    as={Link}
                    to="/checkout"
                    color="primary"
                    size="lg"
                    className="w-full"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Proceed to Checkout
                  </Button>
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="w-full">
                    <h3 className="font-medium mb-2">Promo Code</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-grow px-3 py-2 border border-divider rounded-md"
                      />
                      <Button color="primary" variant="flat">
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="mt-4">
                <CardBody>
                  <h3 className="font-medium mb-3">We Accept</h3>
                  <div className="flex flex-wrap gap-2">
                    <Icon icon="logos:visa" width={40} />
                    <Icon icon="logos:mastercard" width={40} />
                    <Icon icon="logos:paypal" width={40} />
                    <Icon icon="logos:apple-pay" width={40} />
                    <Icon icon="logos:google-pay" width={40} />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;