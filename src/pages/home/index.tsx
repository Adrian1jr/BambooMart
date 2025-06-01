import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/hero-section';
import ProductGrid from '../../components/product-grid';
import SectionTitle from '../../components/section-title';
import { getFeaturedProducts, getNewArrivals, getSaleProducts } from '../../data/products';
import { Link } from 'react-router-dom';
import NewsletterForm from '../../components/newsletter-form';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const saleProducts = getSaleProducts();

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-12 bg-content1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {[
              { 
                icon: "lucide:leaf", 
                title: "Sustainable Materials", 
                description: "Made from eco-friendly bamboo and organic cotton" 
              },
              { 
                icon: "lucide:truck", 
                title: "Free Shipping", 
                description: "On all orders over $50" 
              },
              { 
                icon: "lucide:refresh-ccw", 
                title: "Easy Returns", 
                description: "30-day hassle-free return policy" 
              },
              { 
                icon: "lucide:shield", 
                title: "Secure Checkout", 
                description: "Your data is protected with us" 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="border border-divider h-full">
                  <CardBody className="flex flex-col items-center justify-between text-center p-6 h-full">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Icon icon={feature.icon} className="text-primary text-2xl" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-default-500 text-sm">{feature.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section id="featured" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Products" 
            subtitle="Our most popular sustainable styles"
            centered
          />
          <ProductGrid products={featuredProducts} />
          <div className="flex justify-center mt-10">
            <Button 
              color="primary" 
              variant="flat" 
              endContent={<Icon icon="lucide:arrow-right" />}
              as={Link}
              to="/categories"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
              <p className="text-default-600 mb-6">
                At BambooMart, we believe fashion and sustainability can go hand in hand. Our products are made from bamboo-derived fabrics and other eco-friendly materials that reduce environmental impact without compromising on style or comfort.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Bamboo uses 1/3 the water of cotton",
                  "Biodegradable and renewable materials",
                  "Ethical manufacturing practices",
                  "Carbon-neutral shipping options"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button color="primary" as={Link} to="/sustainability">Learn More</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <img 
                src="https://img.heroui.chat/image/fashion?w=800&h=800&u=2" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section id="new-arrivals" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="New Arrivals" 
            subtitle="The latest additions to our collection"
            centered
          />
          <ProductGrid products={newArrivals} />
          <div className="flex justify-center mt-10">
            <Button 
              color="primary" 
              variant="flat" 
              endContent={<Icon icon="lucide:arrow-right" />}
              as={Link}
              to="/new-arrivals"
            >
              View All New Arrivals
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-8">
              Subscribe to our newsletter for exclusive offers, new product alerts, and 10% off your first order.
            </p>
            <NewsletterForm variant="compact" className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-md mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;