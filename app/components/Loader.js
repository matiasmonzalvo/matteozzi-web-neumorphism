// components/Loader.js
import { motion } from 'framer-motion';

const Loader = ({ isLoading }) => {
  const text = "MatteozziLavilla";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;