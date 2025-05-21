import React from "react";
import { Breadcrumbs, BreadcrumbItem, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Privacy Policy</BreadcrumbItem>
        </Breadcrumbs>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
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
                    BambooMart ("we", "our", or "us") is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website
                    [BambooMart.com] and use our services.
                  </p>
                  <p className="mt-2">
                    Please read this Privacy Policy carefully. If you do not agree with
                    the terms of this Privacy Policy, please do not access the site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    2. Information We Collect
                  </h2>

                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <p>
                    We may collect personal information that you provide directly to us,
                    such as:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      Contact information (name, email address, mailing address, phone
                      number)
                    </li>
                    <li>Account information (username, password)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Order history and preferences</li>
                    <li>Communications you send to us</li>
                  </ul>

                  <h3 className="font-medium mb-2 mt-4">
                    Information Automatically Collected
                  </h3>
                  <p>
                    When you visit our website, we may automatically collect certain
                    information about your device, including:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring website</li>
                    <li>Pages viewed and time spent</li>
                    <li>Links clicked</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    3. How We Use Your Information
                  </h2>
                  <p>We may use your information for the following purposes:</p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Process and fulfill orders</li>
                    <li>Create and manage your account</li>
                    <li>Send transactional emails and order updates</li>
                    <li>Provide customer support</li>
                    <li>Send marketing communications (if you've opted in)</li>
                    <li>Improve our website and user experience</li>
                    <li>Analyze usage patterns and trends</li>
                    <li>Protect against fraud and unauthorized transactions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    4. Cookies and Similar Technologies
                  </h2>
                  <p>
                    We use cookies and similar tracking technologies to collect
                    information about your browsing activities. Cookies are small text
                    files stored on your device that help us provide and improve our
                    services.
                  </p>
                  <p className="mt-2">
                    You can set your browser to refuse all or some browser cookies, or to
                    alert you when websites set or access cookies. If you disable or
                    refuse cookies, please note that some parts of the website may become
                    inaccessible or not function properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Third-Party Services</h2>
                  <p>
                    We may share your information with trusted third parties who assist us
                    in operating our website, conducting our business, or servicing you.
                    These may include:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Payment processors</li>
                    <li>Shipping and fulfillment services</li>
                    <li>Marketing and analytics providers</li>
                    <li>Customer service providers</li>
                  </ul>
                  <p>
                    These companies are authorized to use your personal information only
                    as necessary to provide these services to us.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
                  <p>
                    We will retain your personal information for as long as necessary to
                    fulfill the purposes outlined in this Privacy Policy, unless a longer
                    retention period is required or permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your
                    personal information, including:
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Right to access the personal information we hold about you</li>
                    <li>Right to correct inaccurate or incomplete information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the
                    information provided in the "Contact Us" section.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal
                    information. However, no method of transmission over the Internet or
                    electronic storage is 100% secure, and we cannot guarantee absolute
                    security.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    9. Changes to this Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. The updated
                    version will be indicated by an updated "Last Updated" date, and the
                    updated version will be effective as soon as it is accessible. We
                    encourage you to review this Privacy Policy frequently to stay
                    informed of how we are protecting your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy, please
                    contact us at:
                  </p>
                  <div className="mt-2">
                    <p className="font-medium">BambooMart</p>
                    <p>123 Eco Fashion Street, Suite 101</p>
                    <p>Portland, OR 97205</p>
                    <p>United States</p>
                    <p className="mt-2">Email: privacy@BambooMart.com</p>
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

export default PrivacyPolicyPage;
