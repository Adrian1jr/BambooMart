import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody,
  Tabs,
  Tab,
  Divider
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Shipping & Returns</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Shipping & Returns
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We want to make your shopping experience as smooth as possible. Learn about our shipping options and return policy below.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardBody className="p-0">
              <Tabs aria-label="Shipping and Returns options" color="primary" variant="underlined">
                <Tab key="shipping" title={
                  <div className="flex items-center gap-2 px-1">
                    <Icon icon="lucide:truck" />
                    <span>Shipping</span>
                  </div>
                }>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-semibold mb-2">Shipping Options</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="bg-content2">
                                <th className="py-2 px-4 text-left border border-divider">Shipping Method</th>
                                <th className="py-2 px-4 text-left border border-divider">Estimated Delivery</th>
                                <th className="py-2 px-4 text-left border border-divider">Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border border-divider">Standard Shipping</td>
                                <td className="py-2 px-4 border border-divider">3-5 business days</td>
                                <td className="py-2 px-4 border border-divider">$5.99 (Free on orders over $50)</td>
                              </tr>
                              <tr className="bg-content2/50">
                                <td className="py-2 px-4 border border-divider">Express Shipping</td>
                                <td className="py-2 px-4 border border-divider">1-2 business days</td>
                                <td className="py-2 px-4 border border-divider">$12.99</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border border-divider">International Shipping</td>
                                <td className="py-2 px-4 border border-divider">7-14 business days</td>
                                <td className="py-2 px-4 border border-divider">Calculated at checkout</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Processing Time</h3>
                        <p className="mb-4">All orders are processed within 1-2 business days (excluding weekends and holidays). Once processed, your order will ship according to the selected method.</p>
                        <div className="flex items-center gap-2 text-success">
                          <Icon icon="lucide:package" />
                          <span>Orders placed before 12 PM EST typically ship the same day.</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Tracking Your Order</h3>
                        <p className="mb-4">Once your order ships, you will receive a shipping confirmation email with a tracking number. You can track your package at any time through your account or by clicking the tracking link in the email.</p>
                        <div className="flex items-center gap-2 text-primary">
                          <Icon icon="lucide:search" />
                          <a href="/track-order" className="underline">Track your order now</a>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Sustainable Shipping</h3>
                        <p>At BambooChic, we're committed to reducing our carbon footprint. All our packaging is made from recycled materials and is 100% recyclable or compostable. Additionally, we offset the carbon emissions from all our deliveries.</p>
                      </div>
                    </div>
                  </div>
                </Tab>
                
                <Tab key="returns" title={
                  <div className="flex items-center gap-2 px-1">
                    <Icon icon="lucide:refresh-ccw" />
                    <span>Returns & Exchanges</span>
                  </div>
                }>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Returns & Exchanges Policy</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-semibold mb-2">Easy 30-Day Returns</h3>
                        <p>We stand behind our products and want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, we accept returns within 30 days of delivery for a full refund or exchange.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Return Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Items must be unworn, unwashed, and in original condition with all tags attached</li>
                          <li>Original packaging should be included when possible</li>
                          <li>Sale items marked as "Final Sale" cannot be returned or exchanged</li>
                          <li>Undergarments and face masks cannot be returned for hygienic reasons</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">How to Return or Exchange</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Log in to your account and navigate to your order history</li>
                          <li>Select the order containing the item(s) you wish to return</li>
                          <li>Click "Return Items" and follow the prompts</li>
                          <li>Print the prepaid return label (free within the US)</li>
                          <li>Package your return securely and affix the label</li>
                          <li>Drop off at any USPS location or schedule a pickup</li>
                        </ol>
                        <p className="mt-4">Don't have an account? <a href="/contact-us" className="text-primary underline">Contact our customer service team</a> to initiate a return.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Refund Processing</h3>
                        <p>Once we receive your return, please allow 3-5 business days for our team to process it. Refunds are issued to the original payment method and may take an additional 2-5 business days to appear on your statement, depending on your bank or credit card company.</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Damaged or Defective Items</h3>
                        <p>If you receive a damaged or defective item, please contact our customer service team within 7 days of receipt. We'll make it right with a replacement or refund.</p>
                      </div>
                    </div>
                    
                    <Divider className="my-6" />
                    
                    <div className="bg-content2 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon icon="lucide:help-circle" className="text-primary text-xl mt-1" />
                        <div>
                          <p className="font-medium">Need help with a return?</p>
                          <p className="text-default-500">Our customer service team is ready to assist you with any questions about returns or exchanges.</p>
                          <a href="/contact-us" className="text-primary underline block mt-2">Contact us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;