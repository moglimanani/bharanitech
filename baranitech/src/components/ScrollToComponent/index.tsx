import React, { useState, useEffect } from 'react';
import { Fab, styled } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FabStyled = styled(Fab)(({ theme }) => ({
    color: theme.palette.primary.dark,
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
}))
const ScrollToComponent: React.FC = () => {
    // State to track if the button should be visible
    const [visible, setVisible] = useState(false);

    // Scroll event listener to toggle the visibility of the button
    const handleScroll = () => {
        console.log('window.pageYOffset ',window.pageYOffset );
        
        if (window.pageYOffset > 300) {
            setVisible(true); // Show button when scrolled more than 300px
        } else {
            setVisible(false); // Hide button when near the top
        }
    };

    // Smooth scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Attach the scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        visible && (
            <FabStyled
                onClick={scrollToTop}
            >
                <ArrowUpwardIcon />
            </FabStyled>
        )
    );
};

export default ScrollToComponent;
