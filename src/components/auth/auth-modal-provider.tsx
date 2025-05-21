import React, { createContext, useContext, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import ForgotPasswordForm from './forgot-password-form';

type ModalType = 'login' | 'register' | 'forgot-password' | null;

interface AuthModalContextProps {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextProps | undefined>(undefined);

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
};

const AuthModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = () => {
    if (!isOpen) {
      setModalType(null);
    }
  };

  const getTitle = () => {
    switch (modalType) {
      case 'login':
        return 'Log in to your account';
      case 'register':
        return 'Create an account';
      case 'forgot-password':
        return 'Reset your password';
      default:
        return '';
    }
  };

  const getContent = () => {
    switch (modalType) {
      case 'login':
        return <LoginForm onRegisterClick={() => setModalType('register')} onForgotPasswordClick={() => setModalType('forgot-password')} onSuccess={closeModal} />;
      case 'register':
        return <RegisterForm onLoginClick={() => setModalType('login')} onSuccess={closeModal} />;
      case 'forgot-password':
        return <ForgotPasswordForm onBackToLoginClick={() => setModalType('login')} onSuccess={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <AuthModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
      {children}
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={handleChange} 
        placement="center"
        size="md"
        backdrop="blur"
        hideCloseButton={false}
        onClose={closeModal}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                {getTitle()}
              </ModalHeader>
              <ModalBody>
                {getContent()}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </AuthModalContext.Provider>
  );
};

export default AuthModalProvider;