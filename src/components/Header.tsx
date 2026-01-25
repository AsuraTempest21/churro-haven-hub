import { Menu, MapPin, ShoppingBag, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/contexts/StoreContext';
import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuClick: () => void;
  onLocationClick: () => void;
  onCartClick: () => void;
}

const Header = ({ onMenuClick, onLocationClick, onCartClick }: HeaderProps) => {
  const { selectedLocation, getCartCount } = useStore();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  const handleBrandClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center p-4 justify-between h-16 max-w-md mx-auto">
        {/* Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onMenuClick}
          className="flex items-center justify-center p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </motion.button>

        {/* Location & Brand */}
        <div className="flex flex-col items-center">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleBrandClick}
            className="cursor-pointer"
          >
            <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight uppercase hover:text-primary transition-colors">
              House of Churros
            </h2>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onLocationClick}
            className="flex items-center gap-1 text-foreground/80 cursor-pointer hover:text-foreground transition-colors"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold">{selectedLocation.name}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.button>
        </div>

        {/* Cart Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onCartClick}
          className="relative flex items-center justify-center p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-6 w-6 text-foreground" />
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm"
            >
              {cartCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
