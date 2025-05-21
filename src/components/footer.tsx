import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import NewsletterForm from "./newsletter-form";

const Footer: React.FC = () => {
  return (
    <footer className="bg-content2 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:leaf" className="text-primary text-2xl" />
              <h3 className="font-bold text-lg">BambooMart</h3>
            </div>
            <p className="text-default-600 mb-4">
              Sustainable fashion that doesn't compromise on style. Made with eco-friendly
              materials for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <Button isIconOnly variant="flat" size="sm" aria-label="Instagram">
                <Icon icon="lucide:instagram" />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="Facebook">
                <Icon icon="lucide:facebook" />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="Twitter">
                <Icon icon="lucide:twitter" />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="TikTok">
                <Icon icon="lucide:music" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/new-arrivals" className="text-default-600 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-default-600 hover:text-primary">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-default-600 hover:text-primary">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-default-600 hover:text-primary">
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-default-600 hover:text-primary"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact-us" className="text-default-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-returns"
                  className="text-default-600 hover:text-primary"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-default-600 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-default-600 hover:text-primary">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-default-600 hover:text-primary">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-default-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-divider pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-default-500 text-sm">
              © {new Date().getFullYear()} BambooMart. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="text-default-500 text-sm hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-default-500 text-sm hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-default-500 text-sm hover:text-primary"
              >
                Accessibility
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="logos:visa" width={32} />
              <Icon icon="logos:mastercard" width={32} />
              <Icon icon="logos:paypal" width={32} />
              <Icon icon="logos:apple-pay" width={32} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
