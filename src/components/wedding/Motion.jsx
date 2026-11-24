import React from "react";
import { motion } from "framer-motion";

// Simple FadeUp wrapper using framer-motion
export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  once = true,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// Eyebrow component – small uppercase text used as a section label
export const Eyebrow = ({ children, className = "" }) => (
  <p className={`text-xs uppercase tracking-[0.4em] ${className}`}>{children}</p>
);

// MaskedLines – renders an array of strings with a simple upward reveal effect
export const MaskedLines = ({ lines = [], className = "" }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const line = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {lines.map((text, i) => (
        <motion.div key={i} variants={line} className="overflow-hidden">
          <span>{text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
