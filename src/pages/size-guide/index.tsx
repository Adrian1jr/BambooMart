import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Card,
  CardBody,
  Tabs,
  Tab,
  Image,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SizeGuidePage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Size Guide</BreadcrumbItem>
        </Breadcrumbs>

        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Size Guide
        </motion.h1>

        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Find your perfect fit with our comprehensive size guides. If you're between
          sizes, we recommend sizing up for a more relaxed fit or sizing down for a more
          fitted look.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardBody className="p-0">
              <Tabs
                aria-label="Size Guide Categories"
                color="primary"
                variant="underlined"
              >
                <Tab
                  key="womens"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:user-circle" />
                      <span>Women's Sizing</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Women's Size Chart</h2>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">How to Measure</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-1"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Bust:</span> Measure around
                                the fullest part of your bust, keeping the tape
                                horizontal.
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-2"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Waist:</span> Measure around
                                your natural waistline, keeping the tape comfortably
                                loose.
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-3"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Hips:</span> Measure around
                                the fullest part of your hips, about 8" below your
                                waistline.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="https://img.heroui.chat/image/fashion?w=300&h=300&u=measure-women"
                            alt="How to measure - women's sizing"
                            className="max-h-[300px] object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto mb-8">
                      <h3 className="font-semibold mb-3">Women's Apparel</h3>
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-content2">
                            <th className="py-2 px-4 text-left border border-divider">
                              Size
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              US Size
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Bust (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Waist (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Hips (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-divider">XS</td>
                            <td className="py-2 px-4 border border-divider">0-2</td>
                            <td className="py-2 px-4 border border-divider">32-33</td>
                            <td className="py-2 px-4 border border-divider">24-26</td>
                            <td className="py-2 px-4 border border-divider">34-35</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">S</td>
                            <td className="py-2 px-4 border border-divider">4-6</td>
                            <td className="py-2 px-4 border border-divider">34-35</td>
                            <td className="py-2 px-4 border border-divider">27-28</td>
                            <td className="py-2 px-4 border border-divider">36-37</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">M</td>
                            <td className="py-2 px-4 border border-divider">8-10</td>
                            <td className="py-2 px-4 border border-divider">36-37</td>
                            <td className="py-2 px-4 border border-divider">29-30</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">L</td>
                            <td className="py-2 px-4 border border-divider">12-14</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                            <td className="py-2 px-4 border border-divider">31-33</td>
                            <td className="py-2 px-4 border border-divider">41-43</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">XL</td>
                            <td className="py-2 px-4 border border-divider">16-18</td>
                            <td className="py-2 px-4 border border-divider">41-43</td>
                            <td className="py-2 px-4 border border-divider">34-36</td>
                            <td className="py-2 px-4 border border-divider">44-46</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">
                        Product-Specific Sizing Notes
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Bamboo Blend Tees:</span> These
                            tend to be stretchy and form-fitting. If you prefer a looser
                            fit, consider sizing up.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Bamboo Lounge Pants:</span>{" "}
                            These have an elasticized waist and relaxed fit through the
                            leg. They're designed to sit comfortably at the natural waist.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Dresses:</span> Our measurements
                            are based on a size S with a 36" length from high point
                            shoulder to hem. Length increases by 0.5" for each size up.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab
                  key="mens"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:user" />
                      <span>Men's Sizing</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Men's Size Chart</h2>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">How to Measure</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-1"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Chest:</span> Measure around
                                the fullest part of your chest, keeping the tape
                                horizontal.
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-2"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Waist:</span> Measure around
                                your natural waistline, keeping the tape comfortably
                                loose.
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon
                                icon="lucide:circle-3"
                                className="text-primary mt-1"
                              />
                              <div>
                                <span className="font-medium">Hip:</span> Measure around
                                the fullest part of your seat, keeping the tape
                                horizontal.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="https://img.heroui.chat/image/fashion?w=300&h=300&u=measure-men"
                            alt="How to measure - men's sizing"
                            className="max-h-[300px] object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto mb-8">
                      <h3 className="font-semibold mb-3">Men's Apparel</h3>
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-content2">
                            <th className="py-2 px-4 text-left border border-divider">
                              Size
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Chest (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Waist (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Hip (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-divider">S</td>
                            <td className="py-2 px-4 border border-divider">35-37</td>
                            <td className="py-2 px-4 border border-divider">29-31</td>
                            <td className="py-2 px-4 border border-divider">35-37</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">M</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                            <td className="py-2 px-4 border border-divider">32-34</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">L</td>
                            <td className="py-2 px-4 border border-divider">41-43</td>
                            <td className="py-2 px-4 border border-divider">35-37</td>
                            <td className="py-2 px-4 border border-divider">41-43</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">XL</td>
                            <td className="py-2 px-4 border border-divider">44-46</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                            <td className="py-2 px-4 border border-divider">44-46</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">XXL</td>
                            <td className="py-2 px-4 border border-divider">47-49</td>
                            <td className="py-2 px-4 border border-divider">41-43</td>
                            <td className="py-2 px-4 border border-divider">47-49</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto mb-8">
                      <h3 className="font-semibold mb-3">Men's Pants</h3>
                      <p className="mb-4">
                        Our pants are sized by waist measurement in inches (e.g., 32"
                        waist).
                      </p>
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-content2">
                            <th className="py-2 px-4 text-left border border-divider">
                              Size
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Waist (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Inseam - Regular (in)
                            </th>
                            <th className="py-2 px-4 text-left border border-divider">
                              Inseam - Long (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-divider">28</td>
                            <td className="py-2 px-4 border border-divider">28</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">32</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">34</td>
                            <td className="py-2 px-4 border border-divider">34</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">36</td>
                            <td className="py-2 px-4 border border-divider">36</td>
                            <td className="py-2 px-4 border border-divider">30</td>
                            <td className="py-2 px-4 border border-divider">32</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">
                        Product-Specific Sizing Notes
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Bamboo Blend Tees:</span> Our
                            tees have a relaxed fit. If you prefer a more fitted look,
                            consider sizing down.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Bamboo Hoodies:</span> These
                            have a standard fit with room in the chest and shoulders. The
                            length from high point shoulder to hem is 28" (size M).
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon icon="lucide:info" className="text-primary mt-1" />
                          <div>
                            <span className="font-medium">Pants:</span> Our pants feature
                            an elasticized drawstring waist, offering a comfortable fit
                            with some flexibility in sizing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab
                  key="fit-guide"
                  title={
                    <div className="flex items-center gap-2 px-1">
                      <Icon icon="lucide:ruler" />
                      <span>Fit Guide</span>
                    </div>
                  }
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Understanding Our Fits</h2>

                    <div className="mb-8">
                      <p className="mb-4">
                        Our clothing comes in various fits designed for different
                        preferences and body types. Here's a quick guide to help you
                        understand what each fit means:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card>
                          <CardBody>
                            <h3 className="font-semibold mb-2">Relaxed Fit</h3>
                            <p className="text-default-600 mb-4">
                              Loose and comfortable throughout with extra room in the
                              chest, waist, and hips. Perfect for casual, everyday wear
                              and optimal comfort.
                            </p>
                            <div className="flex justify-center">
                              <Image
                                src="https://img.heroui.chat/image/fashion?w=200&h=200&u=relaxed-fit"
                                alt="Relaxed fit example"
                                className="h-[150px] object-cover rounded-md"
                              />
                            </div>
                          </CardBody>
                        </Card>

                        <Card>
                          <CardBody>
                            <h3 className="font-semibold mb-2">Regular Fit</h3>
                            <p className="text-default-600 mb-4">
                              Our standard fit offers comfortable room without being too
                              loose or too tight. Versatile for most body types and
                              occasions.
                            </p>
                            <div className="flex justify-center">
                              <Image
                                src="https://img.heroui.chat/image/fashion?w=200&h=200&u=regular-fit"
                                alt="Regular fit example"
                                className="h-[150px] object-cover rounded-md"
                              />
                            </div>
                          </CardBody>
                        </Card>

                        <Card>
                          <CardBody>
                            <h3 className="font-semibold mb-2">Slim Fit</h3>
                            <p className="text-default-600 mb-4">
                              Tailored closer to the body with a more defined silhouette.
                              Offers a modern, streamlined look while maintaining comfort.
                            </p>
                            <div className="flex justify-center">
                              <Image
                                src="https://img.heroui.chat/image/fashion?w=200&h=200&u=slim-fit"
                                alt="Slim fit example"
                                className="h-[150px] object-cover rounded-md"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </div>

                      <h3 className="font-semibold mb-3">Finding Your Perfect Fit</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon
                            icon="lucide:check-circle"
                            className="text-primary mt-1"
                          />
                          <div>
                            <span className="font-medium">Between Sizes?</span> If you're
                            between sizes, we generally recommend going up for a more
                            relaxed fit or down for a more fitted look.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon
                            icon="lucide:check-circle"
                            className="text-primary mt-1"
                          />
                          <div>
                            <span className="font-medium">Material Matters:</span> Our
                            bamboo fabrics have a natural stretch and tend to drape
                            beautifully. They may feel slightly more fitted than cotton of
                            the same size.
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon
                            icon="lucide:check-circle"
                            className="text-primary mt-1"
                          />
                          <div>
                            <span className="font-medium">Product Descriptions:</span>{" "}
                            Always check individual product pages for specific fit notes
                            and recommendations.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-content2 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Need more help?</h3>
                      <p className="mb-4">
                        Still unsure about your size? Our customer service team is happy
                        to provide specific measurements for any item or help you find
                        your perfect fit.
                      </p>
                      <div className="flex items-center gap-3">
                        <Icon icon="lucide:mail" className="text-primary" />
                        <span>
                          Email us at:{" "}
                          <a
                            href="mailto:sizing@BambooMart.com"
                            className="text-primary underline"
                          >
                            sizing@BambooMart.com
                          </a>
                        </span>
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

export default SizeGuidePage;
