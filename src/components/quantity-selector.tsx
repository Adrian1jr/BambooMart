import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onChange, 
  min = 1, 
  max = 10 
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button 
        isIconOnly 
        variant="flat" 
        size="sm" 
        onPress={handleDecrement}
        isDisabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Icon icon="lucide:minus" />
      </Button>
      
      <span className="w-10 text-center font-medium">
        {quantity}
      </span>
      
      <Button 
        isIconOnly 
        variant="flat" 
        size="sm" 
        onPress={handleIncrement}
        isDisabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Icon icon="lucide:plus" />
      </Button>
    </div>
  );
};

export default QuantitySelector;