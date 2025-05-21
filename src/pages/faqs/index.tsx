import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  Button,
  Tabs,
  Tab,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const FAQsPage: React.FC = () => {
  // Product FAQs
  const productFaqs: FAQ[] = [
    {
      question: "What are the benefits of bamboo clothing?",
      answer: (
        <div>
          <p>Bamboo-derived fabrics offer numerous benefits:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Incredibly soft and comfortable</li>
            <li>Highly breathable and moisture-wicking</li>
            <li>Temperature regulating (cool in summer, warm in winter)</li>
            <li>Naturally antibacterial and hypoallergenic</li>
            <li>Sustainable and eco-friendly</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How should I care for my bamboo clothing?",
      answer: (
        <div>
          <p>For best results and longevity:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Machine wash cold with similar colors</li>
            <li>Use mild, eco-friendly detergent</li>
            <li>Avoid bleach and fabric softeners</li>
            <li>Tumble dry on low or lay flat to dry</li>
            <li>Iron on low temperature if necessary</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do your sizes run true to standard sizing?",
      answer: (
        <div>
          <p>
            Our sizing is generally true to standard US sizing. However, some styles may
            fit differently based on the design. We recommend checking the specific size
            guide for each product before purchasing.
          </p>
          <p className="mt-2">
            You can find detailed measurements and fit information on each product page or
            in our{" "}
            <Link to="/size-guide" className="text-primary underline">
              comprehensive size guide
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      question: "Are your products pre-shrunk?",
      answer:
        "Yes, all our bamboo fabrics are pre-shrunk during the manufacturing process. However, like most natural fabrics, they may experience minimal shrinkage (1-2%) after the first wash. Following our care instructions will help maintain the original fit and feel of your garments.",
    },
    {
      question: "Do you offer clothing for men, women, and children?",
      answer:
        "Currently, we offer clothing for adult men and women. We're working on expanding our collection to include children's clothing made with the same sustainable bamboo fabrics in the future.",
    },
  ];

  // Order FAQs
  const orderFaqs: FAQ[] = [
    {
      question: "How long will it take to receive my order?",
      answer:
        "Orders typically process within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping delivers in 1-2 business days. International shipping can take 7-14 business days depending on your location.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it. After this time, we begin processing orders for shipment and cannot guarantee changes. Please contact our customer service team immediately if you need to make changes.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs duties and taxes may apply to international orders and are the responsibility of the customer.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a shipping confirmation email with tracking information. You can also track your order by logging into your account or using our order tracking tool on the website.",
    },
    {
      question: "What payment methods do you accept?",
      answer: (
        <div>
          <p>We accept various payment methods:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Credit/debit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
            <li>Shop Pay</li>
          </ul>
        </div>
      ),
    },
  ];

  // Returns & Exchanges FAQs
  const returnFaqs: FAQ[] = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unworn, unwashed items with tags still attached. Items marked as 'Final Sale' cannot be returned or exchanged. For hygiene reasons, underwear and face masks are not returnable.",
    },
    {
      question: "How do I start a return or exchange?",
      answer:
        "To initiate a return, log into your account and navigate to your order history. Select the item(s) you wish to return and follow the prompts. Once approved, you'll receive a prepaid return label via email.",
    },
    {
      question: "Are returns free?",
      answer:
        "Yes, returns are free for customers in the United States. International customers are responsible for return shipping costs.",
    },
    {
      question: "How long does it take to process my return?",
      answer:
        "Once we receive your return, it typically takes 3-5 business days to process. Refunds are issued to the original payment method and may take an additional 2-5 business days to appear on your statement, depending on your financial institution.",
    },
    {
      question: "What if I received a damaged or defective item?",
      answer:
        "If you receive a damaged or defective item, please contact our customer service team within 7 days of delivery. Include photos of the issue, and we'll arrange for a replacement or refund as soon as possible.",
    },
  ];

  // Sustainability FAQs
  const sustainabilityFaqs: FAQ[] = [
    {
      question: "How sustainable is bamboo as a material?",
      answer:
        "Bamboo is one of the most sustainable plants on earth. It grows rapidly without pesticides or fertilizers, requires minimal water, and absorbs more CO2 than equivalent trees. Our bamboo is responsibly harvested from managed forests that maintain biodiversity.",
    },
    {
      question: "What about the processing of bamboo into fabric?",
      answer:
        "We use a closed-loop system for processing bamboo into fabric, which recycles water and chemicals to minimize environmental impact. We work with factories that meet strict environmental standards and are continuously improving our processes to reduce our footprint.",
    },
    {
      question: "Is your packaging eco-friendly?",
      answer:
        "Yes, all our packaging is made from recycled materials and is 100% recyclable or compostable. We use minimal packaging and avoid plastic whenever possible.",
    },
    {
      question: "Do you carbon offset your shipping?",
      answer:
        "Yes, we offset 100% of carbon emissions from our shipping through verified carbon offset projects. We partner with Climate Neutral to measure and offset our entire carbon footprint across operations.",
    },
    {
      question: "What other sustainability initiatives do you have?",
      answer: (
        <div>
          <p>Our comprehensive sustainability approach includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fair wages and safe working conditions for all workers</li>
            <li>1% of profits donated to environmental nonprofits</li>
            <li>Take-back program for recycling old BambooMart garments</li>
            <li>Water-saving manufacturing techniques</li>
            <li>Renewable energy at our offices and warehouses</li>
          </ul>
          <p className="mt-2">
            Learn more on our{" "}
            <Link to="/sustainability" className="text-primary underline">
              sustainability page
            </Link>
            .
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>FAQs</BreadcrumbItem>
        </Breadcrumbs>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg mb-8">
            Find answers to our most commonly asked questions. If you can't find what
            you're looking for, feel free to contact our customer service team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardBody className="p-0">
              <Tabs aria-label="FAQ Categories" color="primary" variant="underlined">
                <Tab
                  key="products"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:shirt" />
                      <span>Products</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <Accordion variant="bordered" className="mb-4">
                      {productFaqs.map((faq, index) => (
                        <AccordionItem
                          key={`product-${index}`}
                          aria-label={faq.question}
                          title={faq.question}
                        >
                          <div className="text-default-600">{faq.answer}</div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </Tab>

                <Tab
                  key="orders"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:package" />
                      <span>Orders & Shipping</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <Accordion variant="bordered" className="mb-4">
                      {orderFaqs.map((faq, index) => (
                        <AccordionItem
                          key={`order-${index}`}
                          aria-label={faq.question}
                          title={faq.question}
                        >
                          <div className="text-default-600">{faq.answer}</div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </Tab>

                <Tab
                  key="returns"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:refresh-ccw" />
                      <span>Returns & Exchanges</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <Accordion variant="bordered" className="mb-4">
                      {returnFaqs.map((faq, index) => (
                        <AccordionItem
                          key={`return-${index}`}
                          aria-label={faq.question}
                          title={faq.question}
                        >
                          <div className="text-default-600">{faq.answer}</div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </Tab>

                <Tab
                  key="sustainability"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:leaf" />
                      <span>Sustainability</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <Accordion variant="bordered" className="mb-4">
                      {sustainabilityFaqs.map((faq, index) => (
                        <AccordionItem
                          key={`sustainability-${index}`}
                          aria-label={faq.question}
                          title={faq.question}
                        >
                          <div className="text-default-600">{faq.answer}</div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help with any questions you might have
            about our products, orders, or sustainability practices.
          </p>
          <Button
            as={Link}
            to="/contact-us"
            color="primary"
            size="lg"
            endContent={<Icon icon="lucide:message-square" />}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQsPage;
