import { Drawer, IconButton, List, ListItem, ListItemButton, Box, ListItemText, Button, Backdrop } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login';
import { Link } from 'react-router-dom';

function DrawerComp() {
    const [openDrawer, setopenDrawer] = useState(false);
    // const pages = [ "home", "about us"];
    const [open, setOpen] = useState(false);

    const handleloginClick = (e) => {
      setOpen(!open)
    }

  return (
    <React.Fragment>
        <Drawer anchor='right' open={openDrawer} onClose={()=> setopenDrawer(false)}>
        <Link to="/"><Box mt={2} sx={{textAlign:"center"}}><img src='./Images/Logo.png' alt='logo' height={70} width={120} /></Box></Link>
            <List onClick= {()=> setopenDrawer(false)} 
            sx={{
              margin: 'auto',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '400',
              padding: '0 30px',
              marginLeft: 'auto',
              "& :hover":{borderBottom: "1px solid #7c43fa"},
            }}>
              <ListItem sx={{ color: '#d35cff', fontSize: '22px' }}>
               <ListItemButton>
                <ListItemText primary="home" />
               </ListItemButton>
              </ListItem>
              <ListItem sx={{ color: '#d35cff', fontSize: '22px' }}>
               <ListItemButton href="about">
                <ListItemText primary="about us" />
               </ListItemButton>
              </ListItem>
            </List>
               
               
            <Button variant='outlined'
             sx={{ 
              margin:"0 auto", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#9067f1", 
              border:" 2.5px solid #9067f1",
              fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px',
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}
              onClick={handleloginClick}> 
           LOGIN</Button>
           
           <Backdrop open={open}
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Login setOpen={setOpen} setopenDrawer={setopenDrawer} />
               </Backdrop> 
               

               <Link to= "/register"><Button variant='contained'
            onClick= {()=> setopenDrawer(false)} 
           sx={{
              margin:"20px 40px", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#fff", 
              backgroundColor: "#9067f1", 
              fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px',
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"}  
              }}>
               REGISTER</Button> </Link> 
        </Drawer>
        <IconButton onClick={()=> setopenDrawer(!openDrawer)} sx={{color:"#7c43fa", marginLeft:"auto" }}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp;
