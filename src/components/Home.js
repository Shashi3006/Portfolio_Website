import "./Navbar.css"
import React from 'react';
// import Navbar from './Navbar';
import image from './Bg_Image/BG.png'
import Home2 from './Home2';
import Home3 from './Home3';
import Footer from './Footer';
import Header from './Header';
import { useTheme, useMediaQuery } from '@mui/material';

function Home() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md")); //down from md i.e. md sm xs


  return (
    <>
    <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100%',width:'100vw', display:'flex', flexDirection:'column' }}>
     <Header isMatch = { isMatch } />
      <div className='headerContainer'>
        <h1>online<span> recruitment </span>solutions</h1>
        <img src='./Images/Recruitment image.png' alt='RecruitmentImage' />
      </div>
   
     <Home2 isMatch = { isMatch } />
      
      <Home3 /> 
        
    <Footer />
    </div>
    </>
  );
}

export default Home;
