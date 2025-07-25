import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Product } from "../data/products";
import { useCart } from "../context/cart-context";
import { useFavoritesStore } from "../store/favorites-store";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      <Card
        isPressable
        className="product-card-hover w-full h-full flex flex-col"
        disableRipple
      >
        <CardBody className="p-0 overflow-hidden flex-initial w-full">
          <Link to={`/product/${product.id}`} className="w-full block h-full">
            <div className="relative w-full h-full">
              <img
                src={`https://img.heroui.chat/image/${product.image}`}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />
            </div>
          </Link>
        </CardBody>
        <CardFooter className="flex flex-col items-start text-left flex-1 w-full">
          <Link to={`/product/${product.id}`} className="w-full">
            <h3 className="font-medium text-foreground line-clamp-1">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-1 mt-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  icon={i < Math.floor(product.rating) ? "lucide:star" : "lucide:star"}
                  className={
                    i < Math.floor(product.rating) ? "text-warning" : "text-default-300"
                  }
                  width={14}
                />
              ))}
            </div>
            <span className="text-tiny text-default-500">({product.reviews})</span>
          </div>
          <div className="w-full flex justify-between items-center mt-auto">
            <div className="flex items-center gap-2">
              {product.sale ? (
                <>
                  <span className="text-danger font-medium">
                    ${product.salePrice?.toFixed(2)}
                  </span>
                  <span className="text-default-500 text-small line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="font-medium">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                isIconOnly
                size="sm"
                color="primary"
                variant="flat"
                onPress={() => addItem(product)}
                aria-label="Add to cart"
              >
                <Icon icon="lucide:shopping-bag" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                color={isFavorite(product.id) ? "danger" : "default"}
                variant={isFavorite(product.id) ? "solid" : "flat"}
                onPress={() => toggleFavorite(product.id, product.name)}
                aria-label={
                  isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"
                }
              >
                <Icon
                  icon={isFavorite(product.id) ? "lucide:heart" : "lucide:heart"}
                  className={isFavorite(product.id) ? "text-white" : ""}
                />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
