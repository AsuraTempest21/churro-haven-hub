import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshIndicatorProps {
  pullDistance: number;
  pullProgress: number;
  isRefreshing: boolean;
  threshold?: number;
}

const PullToRefreshIndicator = ({
  pullDistance,
  pullProgress,
  isRefreshing,
  threshold = 80,
}: PullToRefreshIndicatorProps) => {
  if (pullDistance === 0 && !isRefreshing) return null;

  return (
    <motion.div
      className="absolute left-0 right-0 flex items-center justify-center z-10 pointer-events-none"
      style={{ 
        top: 120, // Below the fixed header
        height: pullDistance || (isRefreshing ? 60 : 0),
      }}
      initial={false}
      animate={{ 
        height: isRefreshing ? 60 : pullDistance,
        opacity: pullProgress > 0.2 || isRefreshing ? 1 : pullProgress * 5,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <motion.div
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border shadow-lg ${
          isRefreshing ? 'animate-spin' : ''
        }`}
        style={{
          rotate: isRefreshing ? 0 : pullProgress * 360,
        }}
      >
        <RefreshCw 
          className={`h-5 w-5 ${
            pullDistance >= threshold || isRefreshing 
              ? 'text-primary' 
              : 'text-muted-foreground'
          }`} 
        />
      </motion.div>
    </motion.div>
  );
};

export default PullToRefreshIndicator;
