import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-light dark:bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tighter flex items-center gap-1">
          Aswathy
          <motion.span 
            className="text-gray-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            .
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
