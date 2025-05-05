import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FlashOfferProps } from '../../types/flash';
import styles from './flashNews.module.scss'
import { Button } from '@mui/material';

const FlashOffer: React.FC<FlashOfferProps> = ({
  message,
  onClick,
  buttonlabel
}) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);  // Track zoom scale
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      // Zoom effect when not hovered
      controls.start({
        scale: [1, 1.2, 1],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 4,
          ease: 'easeInOut',
        },
      });
    }
  }, [controls, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop(); // Stop zoom when hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.flashContainer}>
      <div
        ref={containerRef}
        className={styles.flashInnerContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Zoomable area */}
        <div className={styles.scrollArea}>
          <motion.div
            className="text"
            animate={controls}
          >
            <Sparkles className={styles.sparkels} />
            <span>{message}</span>
            <Sparkles className={styles.sparkels} />
            
            {/* Button inside the zoom effect */}
            <Button variant='outlined'> {buttonlabel}</Button>
            {/* <motion.button
              onClick={onClick}
              className={styles.button}
            >
             {buttonlabel}
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlashOffer;
