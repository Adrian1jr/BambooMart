import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card,
  CardBody,
  CardFooter
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

const collections: Collection[] = [
  {
    id: 'essentials',
    name: 'Bamboo Essentials',
    description: 'Our core collection of wardrobe staples made from luxuriously soft bamboo fabric.',
    image: 'clothing?w=800&h=600&u=collection1',
    itemCount: 12
  },
  {
    id: 'activewear',
    name: 'Active Comfort',
    description: 'Sustainable activewear designed for peak performance and all-day comfort.',
    image: 'fashion?w=800&h=600&u=collection2', 
    itemCount: 8
  },
  {
    id: 'organic',
    name: 'Organic Luxury',
    description: 'Premium sustainable materials blended with timeless design for everyday elegance.',
    image: 'clothing?w=800&h=600&u=collection3',
    itemCount: 10
  },
  {
    id: 'seasonal',
    name: 'Spring/Summer 2023',
    description: 'Our latest seasonal collection featuring lightweight fabrics and fresh colors.',
    image: 'fashion?w=800&h=600&u=collection4',
    itemCount: 15
  },
  {
    id: 'loungewear',
    name: 'Eco Loungewear',
    description: 'Super soft loungewear pieces that prioritize comfort without compromising style.',
    image: 'clothing?w=800&h=600&u=collection5',
    itemCount: 7
  },
  {
    id: 'limited',
    name: 'Limited Edition',
    description: 'Special pieces available for a limited time, made with exclusive sustainable materials.',
    image: 'fashion?w=800&h=600&u=collection6',
    itemCount: 5
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Collections</BreadcrumbItem>
        </Breadcrumbs>
        
        <motion.h1 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Our Collections
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full"
            >
              <Card isPressable className="h-full product-card-hover w-full" disableRipple>
                <Link to={`/categories`} className="block h-full w-full">
                  <CardBody className="p-0 overflow-hidden w-full">
                    <div className="relative w-full">
                      <img
                        src={`https://img.heroui.chat/image/${collection.image}`}
                        alt={collection.name}
                        className="w-full h-[240px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{collection.name}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{collection.description}</p>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center w-full">
                    <p className="text-default-500">{collection.itemCount} Products</p>
                    <Icon icon="lucide:arrow-right" className="text-primary" />
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;