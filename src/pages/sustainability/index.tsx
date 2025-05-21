import React from "react";
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SustainabilityPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Sustainability</BreadcrumbItem>
        </Breadcrumbs>

        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Our Commitment to Sustainability
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <p className="text-lg mb-6">
            At BambooMart, sustainability isn't just a buzzword—it's at the core of
            everything we do. From our material choices to our manufacturing processes,
            we're committed to creating fashion that looks good, feels good, and does good
            for the planet.
          </p>

          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src="https://img.heroui.chat/image/landscape?w=1200&h=600&u=sustainability1"
              alt="Sustainable bamboo forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white p-6 text-xl">
                Our sustainable bamboo is grown without pesticides or chemical fertilizers
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn}>
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:leaf" className="text-primary" />
                  Our Materials
                </h2>
                <p className="mb-4">
                  We prioritize eco-friendly materials that minimize environmental impact:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Bamboo-derived fabrics</span> that
                      require 1/3 the water of cotton and grow without pesticides or
                      fertilizers
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Organic cotton</span> grown without
                      harmful chemicals that damage soil and water systems
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Recycled materials</span> including
                      polyester made from plastic bottles and regenerated cotton
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardBody className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:factory" className="text-primary" />
                  Ethical Manufacturing
                </h2>
                <p className="mb-4">
                  We partner only with factories that meet our strict ethical standards:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Fair wages</span> for all workers in
                      our supply chain
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Safe working conditions</span> with
                      regular third-party audits
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                    <div>
                      <span className="font-medium">Water-saving techniques</span> that
                      reduce manufacturing impact by up to 80%
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Our Goals for 2025</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary text-white">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <p>Sustainable or recycled materials in all products</p>
              </CardBody>
            </Card>

            <Card className="bg-primary text-white">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-2">Carbon Neutral</div>
                <p>Operations through offsets and renewable energy</p>
              </CardBody>
            </Card>

            <Card className="bg-primary text-white">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-2">Zero Waste</div>
                <p>Packaging and circular product lifecycle</p>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Divider className="my-8" />

          <h2 className="text-2xl font-bold mb-6">Our Certifications</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Global Organic Textile Standard", icon: "lucide:award" },
              { name: "B Corporation", icon: "lucide:check-circle" },
              { name: "Fair Trade Certified", icon: "lucide:handshake" },
              { name: "Climate Neutral", icon: "lucide:leaf" },
            ].map((cert, index) => (
              <Card key={index} className="border border-divider">
                <CardBody className="p-4 flex flex-col items-center text-center">
                  <Icon icon={cert.icon} className="text-primary text-3xl mb-3" />
                  <p className="font-medium">{cert.name}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
