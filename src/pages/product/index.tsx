import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Button,
  Chip,
  Tabs,
  Tab,
  Card,
  CardBody,
  Divider,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { getProductById, getRelatedProducts } from "../../data/products";
import { useCart } from "../../context/cart-context";
import ProductGrid from "../../components/product-grid";
import SectionTitle from "../../components/section-title";
import QuantitySelector from "../../components/quantity-selector";
import { Link as RouterLink } from "react-router-dom";
import { useFavoritesStore } from "../../store/favorites-store";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const product = getProductById(parseInt(id));
  const relatedProducts = product ? getRelatedProducts(product) : [];

  const { toggleFavorite, isFavorite } = useFavoritesStore();

  React.useEffect(() => {
    if (!product) {
      history.push("/");
    } else {
      // Reset selections when product changes
      setQuantity(1);
      setSelectedColor(product.colors[0] || null);
      setSelectedSize(product.sizes[0] || null);
    }
  }, [product, history]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs className="mb-6">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>
            <RouterLink to={`/categories/${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </RouterLink>
          </BreadcrumbItem>
          <BreadcrumbItem>{product.name}</BreadcrumbItem>
        </Breadcrumbs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <img
                src={`https://img.heroui.chat/image/${product.image}`}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://img.heroui.chat/image/${
                      product.image.split("?")[0]
                    }?w=150&h=150&u=${product.id}${i}`}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-primary"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {product.new && (
                <Chip color="primary" size="sm">
                  New Arrival
                </Chip>
              )}
              {product.sale && (
                <Chip color="danger" size="sm">
                  Sale
                </Chip>
              )}
              {product.featured && (
                <Chip color="secondary" size="sm">
                  Featured
                </Chip>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="lucide:star"
                    className={
                      i < Math.floor(product.rating) ? "text-warning" : "text-default-300"
                    }
                    width={18}
                  />
                ))}
              </div>
              <span className="text-default-500">({product.reviews} reviews)</span>
            </div>

            <div className="mb-6">
              {product.sale ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-danger">
                    ${product.salePrice?.toFixed(2)}
                  </span>
                  <span className="text-xl text-default-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <Chip color="danger" size="sm">
                    {Math.round(
                      ((product.price - (product.salePrice || 0)) / product.price) * 100
                    )}
                    % OFF
                  </Chip>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-default-600 mb-6">{product.description}</p>

            <Divider className="my-6" />

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: {selectedColor}</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    className={
                      selectedColor === color
                        ? "border-2 border-primary"
                        : "border border-divider"
                    }
                    variant="flat"
                    onPress={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Size: {selectedSize}</h3>
                <Button variant="light" size="sm" className="text-primary">
                  Size Guide
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    className={`min-w-[48px] ${
                      selectedSize === size
                        ? "border-2 border-primary"
                        : "border border-divider"
                    }`}
                    variant="flat"
                    onPress={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <QuantitySelector quantity={quantity} onChange={setQuantity} />

              <Button
                color="primary"
                size="lg"
                className="flex-grow sm:flex-grow-0"
                onPress={handleAddToCart}
                endContent={<Icon icon="lucide:shopping-bag" />}
                isDisabled={!selectedColor || !selectedSize}
              >
                Add to Cart
              </Button>

              <Button
                variant={isFavorite(product.id) ? "solid" : "flat"}
                color={isFavorite(product.id) ? "danger" : "default"}
                size="lg"
                isIconOnly
                aria-label={
                  isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"
                }
                onPress={() => toggleFavorite(product.id, product.name)}
              >
                <Icon
                  icon="lucide:heart"
                  className={isFavorite(product.id) ? "text-white" : ""}
                />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              {[
                { icon: "lucide:truck", text: "Free shipping on orders over $50" },
                { icon: "lucide:refresh-ccw", text: "Free 30-day returns" },
                { icon: "lucide:shield", text: "1 year warranty" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-default-600">
                  <Icon icon={item.icon} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Card>
            <CardBody className="p-0">
              <Tabs
                aria-label="Product details"
                color="primary"
                variant="underlined"
                className="p-0"
              >
                <Tab key="details" title="Product Details">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                    <p className="mb-4">
                      {product.description} Our {product.name} is designed with both style
                      and sustainability in mind.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-medium mb-2">Features</h4>
                        <ul className="list-disc list-inside space-y-1 text-default-600">
                          <li>Made from sustainable bamboo-derived fabric</li>
                          <li>Breathable and moisture-wicking</li>
                          <li>Naturally anti-bacterial properties</li>
                          <li>Softer than cotton with a luxurious feel</li>
                          <li>Temperature regulating for year-round comfort</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Materials & Care</h4>
                        <ul className="list-disc list-inside space-y-1 text-default-600">
                          <li>70% Bamboo-derived viscose, 30% Organic cotton</li>
                          <li>Machine wash cold with like colors</li>
                          <li>Tumble dry low or lay flat to dry</li>
                          <li>Do not bleach</li>
                          <li>Cool iron if needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab key="sizing" title="Size & Fit">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Size & Fit Guide</h3>
                    <p className="mb-4">
                      This item is designed with a regular fit. For a more relaxed look,
                      we recommend sizing up. For a more fitted look, consider sizing
                      down.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-content2">
                            <th className="py-2 px-4 border border-divider text-left">
                              Size
                            </th>
                            <th className="py-2 px-4 border border-divider text-left">
                              Chest (in)
                            </th>
                            <th className="py-2 px-4 border border-divider text-left">
                              Waist (in)
                            </th>
                            <th className="py-2 px-4 border border-divider text-left">
                              Hip (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border border-divider">XS</td>
                            <td className="py-2 px-4 border border-divider">32-34</td>
                            <td className="py-2 px-4 border border-divider">26-28</td>
                            <td className="py-2 px-4 border border-divider">34-36</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">S</td>
                            <td className="py-2 px-4 border border-divider">34-36</td>
                            <td className="py-2 px-4 border border-divider">28-30</td>
                            <td className="py-2 px-4 border border-divider">36-38</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">M</td>
                            <td className="py-2 px-4 border border-divider">36-38</td>
                            <td className="py-2 px-4 border border-divider">30-32</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                          </tr>
                          <tr className="bg-content2/50">
                            <td className="py-2 px-4 border border-divider">L</td>
                            <td className="py-2 px-4 border border-divider">38-40</td>
                            <td className="py-2 px-4 border border-divider">32-34</td>
                            <td className="py-2 px-4 border border-divider">40-42</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border border-divider">XL</td>
                            <td className="py-2 px-4 border border-divider">40-42</td>
                            <td className="py-2 px-4 border border-divider">34-36</td>
                            <td className="py-2 px-4 border border-divider">42-44</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab>
                <Tab key="reviews" title={`Reviews (${product.reviews})`}>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">
                          {product.rating.toFixed(1)}
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              icon="lucide:star"
                              className={
                                i < Math.floor(product.rating)
                                  ? "text-warning"
                                  : "text-default-300"
                              }
                              width={16}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-default-500">
                          {product.reviews} reviews
                        </div>
                      </div>
                      <div className="flex-grow">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const percentage = Math.round(Math.random() * 100);
                          return (
                            <div key={star} className="flex items-center gap-2">
                              <div className="text-sm w-6">{star}</div>
                              <Icon
                                icon="lucide:star"
                                className="text-warning"
                                width={14}
                              />
                              <div className="flex-grow h-2 bg-default-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-warning"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-default-500 w-8">
                                {percentage}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button color="primary">Write a Review</Button>
                  </div>
                </Tab>
                <Tab key="sustainability" title="Sustainability">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Our Sustainability Commitment
                    </h3>
                    <p className="mb-4">
                      At BambooMart, we're committed to creating fashion that respects
                      both people and the planet. This product is part of our
                      sustainability journey.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-medium mb-2">Environmental Impact</h4>
                        <ul className="list-disc list-inside space-y-1 text-default-600">
                          <li>Bamboo requires 1/3 the water of cotton to grow</li>
                          <li>No pesticides or fertilizers needed</li>
                          <li>
                            Bamboo absorbs 5x more carbon dioxide than equivalent trees
                          </li>
                          <li>Biodegradable and renewable resource</li>
                          <li>Low-impact dyeing process</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Social Responsibility</h4>
                        <ul className="list-disc list-inside space-y-1 text-default-600">
                          <li>Fair wages for all workers in our supply chain</li>
                          <li>Safe working conditions guaranteed</li>
                          <li>No child labor</li>
                          <li>1% of profits donated to environmental causes</li>
                          <li>Transparent manufacturing practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>

        {/* Related Products */}
        <div>
          <SectionTitle
            title="You May Also Like"
            subtitle="Similar products you might enjoy"
          />
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
