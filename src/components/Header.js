import { AppBar, Toolbar, Box, Tabs, Tab, Button, Backdrop } from '@mui/material';
import React from 'react';
import DrawerComp from './DrawerComp';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import "./Navbar.css"

function Header({ isMatch }) {
  const [open, setOpen] = useState(false);
  
  const [navbar, setNavbar] = useState(false)
  const changeBackgrnd = () => {
    if(window.scrollY >= 80)
      setNavbar(true)
    else
      setNavbar(false)
  }
  window.addEventListener('scroll', changeBackgrnd);

  return (
    <>
    <AppBar position="static" sx={{ background: navbar ? '#fff' : 'transparent', boxShadow:navbar ? '0 4px 6px #a7a7a8' : 'none', position:"fixed", height:"80px", zIndex:"999"}}>
        <Toolbar>
        <Link to="/"><Box sx={{margin:"25px"}}><img src='./Images/Logo.png' alt='logo' height={70} width={120} /></Box></Link>

               { isMatch ? <DrawerComp /> :  
               <>
              <Tabs 
              onClick={()=> window.scrollTo(0, 0)}
              aria-label="basic tabs"
              sx={{
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              padding: '0 30px',
              marginLeft: 'auto',
             "& button:hover":{borderBottom: "3px solid #7c43fa", paddingBottom: "1px" },
            }}>
              <Link to= "/"><Tab label="home" sx={{ color: '#d35cff', fontSize: '22px',fontWeight:"650"}} /></Link>
              <Link to= "/about"><Tab label="About us" sx={{ color: '#d35cff', fontSize: '22px',fontWeight:"650"}} /></Link>
             </Tabs>
            
              <Button
             variant='outlined'
             sx={{ 
              marginLeft:"auto", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#9067f1", 
              border:" 2.5px solid #9067f1",
              fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px',
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}
              onClick={()=>setOpen(true)}> LOGIN</Button>

              <Backdrop open={open}
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Login setOpen={setOpen} /></Backdrop>              

             <Link to= "/register"><Button
              sx={{
              marginLeft:"10px", 
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
               </>
               }
        </Toolbar>
    </AppBar>
    <Box>
  <Toolbar />
</Box>
    </>
  );
}

export default Header;
