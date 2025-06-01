import React from 'react';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody
} from '@heroui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Terms of Service</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-default-600 mb-8">Last updated: June 15, 2023</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardBody className="p-6">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                  <p>
                    Welcome to BambooChic. These Terms of Service ("Terms") govern your use of our website bamboochic.com (the "Website") and the products and services offered through our Website (collectively, the "Services").
                  </p>
                  <p className="mt-2">
                    By accessing or using our Website and Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our Website or Services.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Account Registration</h2>
                  <p>
                    To access certain features of our Website, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>
                  <p className="mt-2">
                    You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Ordering and Purchasing</h2>
                  <p>
                    When you place an order through our Website, you are making an offer to purchase the products you have selected based on these Terms. We reserve the right to accept or decline your order for any reason.
                  </p>
                  <p className="mt-2">
                    All prices are displayed in US dollars unless otherwise specified. Prices are subject to change without notice. We make every effort to ensure the accuracy of prices and product information, but errors may occur. We reserve the right to correct any errors and to cancel any orders where such an error has occurred.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Shipping and Delivery</h2>
                  <p>
                    Shipping times and costs are provided during the checkout process. We are not responsible for delays due to customs processing, weather conditions, or other circumstances beyond our control.
                  </p>
                  <p className="mt-2">
                    Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Returns and Refunds</h2>
                  <p>
                    Our return and refund policy is described in detail on our <Link to="/shipping-returns" className="text-primary underline">Shipping & Returns page</Link>. By making a purchase, you agree to the terms of this policy.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                  <p>
                    The Website and its original content, features, and functionality are owned by BambooChic and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                  <p className="mt-2">
                    You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, or transmit any of the material on our Website without our prior written consent.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">7. User Content</h2>
                  <p>
                    By posting, uploading, or otherwise making available any content on our Website (e.g., product reviews, comments), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
                  </p>
                  <p className="mt-2">
                    You represent and warrant that you own or control all rights in and to the content you post, and that such content does not violate these Terms or any applicable law.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Prohibited Uses</h2>
                  <p>
                    You agree not to use the Website:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>In any way that violates any applicable law or regulation</li>
                    <li>To transmit any material that is defamatory, obscene, or offensive</li>
                    <li>To impersonate or attempt to impersonate BambooChic, a BambooChic employee, or any other person</li>
                    <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
                    <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
                  <p className="uppercase font-medium">
                    THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                  <p className="mt-2">
                    We do not guarantee that the Website will be secure or free from errors or viruses. You are responsible for configuring your technology to access the Website and should use your own virus protection software.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Limitation of Liability</h2>
                  <p className="uppercase font-medium">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, BAMBOOCHIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE WEBSITE OR SERVICES.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless BambooChic, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">12. Modifications to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. The most current version will always be posted on the Website, with the "Last Updated" date at the top of the page. Your continued use of the Website after any changes constitutes your acceptance of the new Terms.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">13. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Oregon, without regard to its conflict of law provisions.
                  </p>
                  <p className="mt-2">
                    Any dispute arising from these Terms or your use of the Website shall be resolved exclusively in the state or federal courts located in Multnomah County, Oregon.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">14. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-2">
                    <p className="font-medium">BambooChic</p>
                    <p>123 Eco Fashion Street, Suite 101</p>
                    <p>Portland, OR 97205</p>
                    <p>United States</p>
                    <p className="mt-2">Email: legal@bamboochic.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </section>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;