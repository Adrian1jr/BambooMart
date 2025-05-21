import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cart-context";
import { useFavoritesStore } from "../store/favorites-store";
import { motion } from "framer-motion";
import { useAuth } from "../context/auth-context";
import { useAuthModal } from "./auth/auth-modal-provider";
import { useSearch } from "../context/search-context";

const AppNavbar: React.FC = () => {
  const location = useLocation();
  const { items, itemCount, removeItem } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { openModal } = useAuthModal();

  // Replace the local search state with the context
  const { openSearch } = useSearch();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      maxWidth="xl"
      isBordered={isScrolled}
    >
      <NavbarBrand>
        <RouterLink to="/" className="flex items-center gap-2">
          <Icon icon="lucide:leaf" className="text-primary text-2xl" />
          <p className="font-bold text-lg text-inherit">
            {/* MOBILE SHOW BM AND LARGER SHOW BambooMart */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block"
            >
              BambooMart
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="block md:hidden"
            >
              BM
            </motion.span>
          </p>
        </RouterLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem isActive={location.pathname === "/"}>
          <Link as={RouterLink} to="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname.includes("/categories")}>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
              >
                Categories
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              <DropdownItem
                key="all"
                as={RouterLink}
                to="/categories"
                description="View all products"
              >
                All Products
              </DropdownItem>
              <DropdownItem key="t-shirts" as={RouterLink} to="/categories/t-shirts">
                T-Shirts
              </DropdownItem>
              <DropdownItem key="hoodies" as={RouterLink} to="/categories/hoodies">
                Hoodies
              </DropdownItem>
              <DropdownItem key="jeans" as={RouterLink} to="/categories/jeans">
                Jeans
              </DropdownItem>
              <DropdownItem key="pants" as={RouterLink} to="/categories/pants">
                Pants
              </DropdownItem>
              <DropdownItem key="jackets" as={RouterLink} to="/categories/jackets">
                Jackets
              </DropdownItem>
              <DropdownItem key="sweaters" as={RouterLink} to="/categories/sweaters">
                Sweaters
              </DropdownItem>
              <DropdownItem
                key="accessories"
                as={RouterLink}
                to="/categories/accessories"
              >
                Accessories
              </DropdownItem>
              <DropdownItem key="dresses" as={RouterLink} to="/categories/dresses">
                Dresses
              </DropdownItem>
              <DropdownItem key="activewear" as={RouterLink} to="/categories/activewear">
                Activewear
              </DropdownItem>
              <DropdownItem key="loungewear" as={RouterLink} to="/categories/loungewear">
                Loungewear
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/new-arrivals"}>
          <Link as={RouterLink} to="/new-arrivals" color="foreground">
            New Arrivals
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/sale"}>
          <Link as={RouterLink} to="/sale" color="foreground">
            Sale
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" aria-label="Search" onPress={openSearch}>
            <Icon icon="lucide:search" className="text-lg" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          {isAuthenticated ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Account"
                  className="overflow-hidden"
                >
                  <Avatar
                    src={`https://img.heroui.chat/image/${
                      user?.avatar || "avatar?w=200&h=200&u=1"
                    }`}
                    name={user?.firstName}
                    size="sm"
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Account actions">
                <DropdownItem key="profile" textValue="Profile" className="py-2">
                  <div className="flex items-center gap-2">
                    <Avatar
                      src={`https://img.heroui.chat/image/${
                        user?.avatar || "avatar?w=200&h=200&u=1"
                      }`}
                      name={user?.firstName}
                      size="sm"
                    />
                    <div>
                      <p className="font-medium">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-tiny text-default-500">{user?.email}</p>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key="account"
                  as={RouterLink}
                  to="/profile"
                  startContent={<Icon icon="lucide:user" />}
                >
                  My Account
                </DropdownItem>
                <DropdownItem
                  key="orders"
                  as={RouterLink}
                  to="/profile/orders"
                  startContent={<Icon icon="lucide:package" />}
                >
                  My Orders
                </DropdownItem>
                <DropdownItem
                  key="wishlist"
                  as={RouterLink}
                  to="/favorites"
                  startContent={<Icon icon="lucide:heart" />}
                >
                  My Wishlist
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  as={RouterLink}
                  to="/profile/settings"
                  startContent={<Icon icon="lucide:settings" />}
                >
                  Settings
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  startContent={<Icon icon="lucide:log-out" />}
                  onPress={logout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              variant="light"
              onPress={() => openModal("login")}
              startContent={<Icon icon="lucide:user" className="text-lg" />}
            >
              Login
            </Button>
          )}
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly variant="light" aria-label="Cart">
                <Badge content={itemCount} color="primary" shape="circle" size="sm">
                  <Icon icon="lucide:shopping-bag" className="text-lg" />
                </Badge>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Cart preview" className="w-[340px]">
              <DropdownItem isReadOnly className="p-0">
                <div className="px-1 py-2">
                  <p className="text-small font-bold">Your Cart</p>
                </div>
              </DropdownItem>
              <DropdownItem isReadOnly className="p-0">
                {items.length === 0 ? (
                  <div className="px-1 py-4 text-center">
                    <p className="text-default-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="max-h-[300px] overflow-auto">
                    {items.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 px-1 py-2 border-b border-divider"
                      >
                        <Avatar
                          src={`https://img.heroui.chat/image/${item.image}`}
                          className="w-10 h-10 rounded"
                        />
                        <div className="flex-grow">
                          <p className="text-small font-medium">{item.name}</p>
                          <p className="text-tiny text-default-500">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          className="text-default-500"
                          onPress={() => removeItem(item.id)}
                        >
                          <Icon icon="lucide:x" size={16} />
                        </Button>
                      </div>
                    ))}
                    {items.length > 3 && (
                      <div className="px-1 py-2 text-center">
                        <p className="text-tiny text-default-500">
                          +{items.length - 3} more items
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </DropdownItem>
              {items.length > 0 && (
                <>
                  <DropdownItem isReadOnly className="p-0">
                    <div className="px-1 py-2 flex justify-between">
                      <p className="text-small font-medium">Subtotal:</p>
                      <p className="text-small font-bold">
                        $
                        {items
                          .reduce((total, item) => total + item.price * item.quantity, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </DropdownItem>
                  <DropdownItem key="view-cart" as={RouterLink} to="/cart">
                    View Cart
                  </DropdownItem>
                  <DropdownItem
                    key="checkout"
                    as={RouterLink}
                    to="/checkout"
                    color="primary"
                  >
                    Checkout
                  </DropdownItem>
                </>
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
