import React from "react";
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const AccessibilityPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Accessibility</BreadcrumbItem>
        </Breadcrumbs>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg mb-8">
            At BambooMart, we believe in creating an inclusive online shopping experience
            for everyone. We are committed to ensuring our website is accessible to all
            users, including those with disabilities.
          </p>
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
                  <h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
                  <p>
                    We strive to ensure that our website complies with best practices and
                    standards defined by the Web Content Accessibility Guidelines (WCAG)
                    2.1, Level AA. These guidelines explain how to make web content more
                    accessible to people with a wide range of disabilities, including:
                  </p>
                  <ul className="list-disc pl-5 mt-3 mb-3 space-y-1">
                    <li>Visual impairments</li>
                    <li>Hearing impairments</li>
                    <li>Motor limitations</li>
                    <li>Cognitive limitations</li>
                    <li>Speech disabilities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Accessibility Features</h2>
                  <p>
                    We have implemented various features and best practices to enhance the
                    accessibility of our website:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Keyboard Navigation:</span> Our
                        website can be navigated using a keyboard for users who cannot use
                        a mouse.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Screen Reader Compatibility:</span>{" "}
                        We use descriptive alt text for images and proper labeling for
                        forms.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Text Resizing:</span> Our website
                        allows text to be resized up to 200% without loss of
                        functionality.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Color Contrast:</span> We maintain
                        sufficient color contrast ratios for readability.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Clear Navigation:</span> Consistent
                        navigation structure and descriptive link text.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <div>
                        <span className="font-medium">Form Accessibility:</span> Clearly
                        labeled form fields with helpful error messages.
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Continuous Improvement</h2>
                  <p>
                    We are continually working to increase the level of accessibility on
                    our website. We regularly review our site for accessibility issues and
                    work to address them as part of our development process. We also
                    provide training to our team on accessibility best practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Feedback and Assistance</h2>
                  <p>
                    We welcome your feedback on the accessibility of our website. If you
                    encounter any barriers or have suggestions for improvement, please
                    don't hesitate to contact us.
                  </p>
                  <p className="mt-2">
                    If you need assistance with any part of our website, please contact
                    our customer service team:
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:mail" className="text-primary" />
                      <span>
                        Email:{" "}
                        <Link
                          href="mailto:accessibility@BambooMart.com"
                          className="text-primary"
                        >
                          accessibility@BambooMart.com
                        </Link>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:phone" className="text-primary" />
                      <span>Phone: +1 (555) 123-4567</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Limitations</h2>
                  <p>
                    While we strive to make our website as accessible as possible, some
                    content may not yet be fully accessible. We are actively working to
                    address these limitations. If you encounter any issues, please let us
                    know, and we'll do our best to provide an alternative means of access.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">Accessibility Resources</h2>
                  <p>
                    For users who would benefit from additional accessibility tools, we
                    recommend the following resources:
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:external-link" className="text-primary mt-1" />
                      <div>
                        <Link
                          href="https://www.w3.org/WAI/"
                          isExternal
                          className="text-primary"
                        >
                          Web Accessibility Initiative (WAI)
                        </Link>
                        <p className="text-sm text-default-500">
                          Resources for improving web accessibility
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:external-link" className="text-primary mt-1" />
                      <div>
                        <Link
                          href="https://www.w3.org/TR/WCAG21/"
                          isExternal
                          className="text-primary"
                        >
                          Web Content Accessibility Guidelines (WCAG) 2.1
                        </Link>
                        <p className="text-sm text-default-500">
                          Current recommendations for making web content accessible
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Icon icon="lucide:external-link" className="text-primary mt-1" />
                      <div>
                        <Link
                          href="https://www.nvaccess.org/"
                          isExternal
                          className="text-primary"
                        >
                          NVDA Screen Reader
                        </Link>
                        <p className="text-sm text-default-500">
                          Free screen reader for Windows
                        </p>
                      </div>
                    </div>
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

export default AccessibilityPage;
