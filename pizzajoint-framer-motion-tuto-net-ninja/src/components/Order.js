import { motion } from "framer-motion";
import React, { useEffect } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      // stiffness: 120,
      mass: 0.4, //lower mass means quicker and vice versa
      damping: 8, //damping force to stop the animation, high means high force
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit:{
    x: '-100vw',
    transition: {
      easing: 'easeInOut'
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, handleSetShowModal }) => {
  useEffect(()=> {
    const timer = setTimeout(() => {
      handleSetShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [handleSetShowModal])
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
