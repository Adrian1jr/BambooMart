import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cart-context';
import { AuthProvider } from './context/auth-context';
import Layout from './components/layout';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import OrderConfirmationPage from './pages/order-confirmation';
import CategoriesPage from './pages/categories';
import NewArrivalsPage from './pages/new-arrivals';
import SalePage from './pages/sale';
import CategoryPage from './pages/category';
import FavoritesPage from './pages/favorites';
// New imports for footer pages
import BestsellersPage from './pages/bestsellers';
import CollectionsPage from './pages/collections';
import SustainabilityPage from './pages/sustainability';
import ContactUsPage from './pages/contact-us';
import ShippingReturnsPage from './pages/shipping-returns';
import FAQsPage from './pages/faqs';
import SizeGuidePage from './pages/size-guide';
import TrackOrderPage from './pages/track-order';
import PrivacyPolicyPage from './pages/privacy-policy';
import TermsOfServicePage from './pages/terms-of-service';
import AccessibilityPage from './pages/accessibility';
// Account pages
import ProfilePage from './pages/profile';
import AuthModalProvider from './components/auth/auth-modal-provider';
import ScrollToTop from './components/scroll-to-top';
import SearchCommandMenu from './components/search-command-menu';
import { SearchProvider } from './context/search-context';
import OrderDetailPage from './pages/profile/order-detail';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AuthModalProvider>
          <SearchProvider>
            <Layout>
              <ScrollToTop />
              <SearchCommandMenu />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/order-confirmation" component={OrderConfirmationPage} />
                <Route exact path="/categories" component={CategoriesPage} />
                <Route path="/categories/:category" component={CategoryPage} />
                <Route path="/new-arrivals" component={NewArrivalsPage} />
                <Route path="/sale" component={SalePage} />
                <Route path="/favorites" component={FavoritesPage} />
                
                {/* Footer Pages */}
                <Route path="/bestsellers" component={BestsellersPage} />
                <Route path="/collections" component={CollectionsPage} />
                <Route path="/sustainability" component={SustainabilityPage} />
                <Route path="/contact-us" component={ContactUsPage} />
                <Route path="/shipping-returns" component={ShippingReturnsPage} />
                <Route path="/faqs" component={FAQsPage} />
                <Route path="/size-guide" component={SizeGuidePage} />
                <Route path="/track-order" component={TrackOrderPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route path="/terms-of-service" component={TermsOfServicePage} />
                <Route path="/accessibility" component={AccessibilityPage} />
                
                {/* Profile Pages */}
                <Route exact path="/profile" component={ProfilePage} />
                <Route path="/profile/orders" component={ProfilePage} />
                <Route path="/profile/orders/:orderId" component={OrderDetailPage} />
                <Route path="/profile/addresses" component={ProfilePage} />
                <Route path="/profile/settings" component={ProfilePage} />
              </Switch>
            </Layout>
          </SearchProvider>
        </AuthModalProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;