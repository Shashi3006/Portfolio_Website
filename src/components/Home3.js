import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Home3() {
  return (
    <>
    <Box sx={{ textAlign:'center', bgcolor:'#fff', p: 3, mt: 8 }}>
     <Typography variant='h3' gutterBottom mt={6}
     sx={{
        textTransform:'uppercase',
        fontSize: '45px',
        fontWeight: '900'
     }}>
        Get Started Today
     </Typography>
     <Box mb={6}>
      <Link to= "/register"><Button
              sx={{
              margin:"auto", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#fff", 
              backgroundColor: "#9067f1", 
              borderColor: '9067f1', 
              fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px', 
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}>REGISTER</Button></Link> 
     </Box>
    </Box>
    </>
  );
}

export default Home3;
