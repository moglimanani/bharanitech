import React, { useContext, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { usePostsContext } from '../../contexts/postContext';

const Footer: React.FC = () => {
  const theme = useTheme();
  const {posts, addPost} = usePostsContext()
  useEffect(()=>{
    addPost({id:1, title: "title", description: "desc"})
  }, [])
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
       // backgroundColor: theme.palette.grey[900],
       background: '#c4f4ff',
       color: '#4d4d4d',
        //color: theme.palette.common.white,
        textAlign: 'center',
        'a': {
          color: '#127B93',
        }
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Developed by <strong><a href='mailto:moglimani@gmail.com'>Mogli Developer</a></strong>
      </Typography>
    </Box>
  );
};

export default Footer;
