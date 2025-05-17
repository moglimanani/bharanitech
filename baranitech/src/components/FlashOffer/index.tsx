import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FlashOfferProps } from '../../types/flash';

const FlashOffer: React.FC<FlashOfferProps> = ({
  message,
  onClick,
  buttonlabel
}) => {
  const controls = useAnimation();
   // Start the animation loop
   useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 10,
      },
    });
  }, [controls]);

  const handlePause = () => {
    controls.stop();
  };

  const handleResume = () => {
    controls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 10,
      },
    });
  };

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", position: "relative", width: "100%", background: "#c4f4ff", padding: "10px 0", color: "#484848" }}>
    <motion.div
      animate={controls}
      initial={{ x: "0%" }}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          paddingLeft: "100%",
        }}
     
    >
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        {message}
      </span>
    </motion.div>

    <button
      onMouseEnter={() =>  handlePause()}
      onMouseLeave={() => handleResume()}
      style={{
        position: "absolute",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        padding: "10px 20px",
        cursor: "pointer",
        background: "#127B93",
        color: "#fff",
        border: "none",
        borderRadius: "20px"
      }}
      onClick={onClick}
    >
      {buttonlabel}
    </button>
  </div>
  )
};

export default FlashOffer;
