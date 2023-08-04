import * as React from 'react';
import { Grid, Box, Typography, Paper, Avatar, Stack, TextField, IconButton, Button, useTheme, useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({setOpen, setopenDrawer}) {

  const theme = useTheme();
  const isWidth = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleCrossmd=()=>{
    setName("");
    setPassword("");
    setopenDrawer(false);
    setOpen(false);
  }

  const handleCrosslg=()=>{
    setName("");
    setPassword("");
    setOpen(false);
  }

  return (
    <>
   <Grid container 
       spacing={{ xs: 2, md: 3 }} 
       columns={{ xs: 4, sm: 8, md: 12 }} 
       sx={{margin:"20px auto",}}>
     <Paper elevation={10} style={{borderRadius:"30px", padding:20, height:'80vh', width:isWidth ? "85vw" : "60vw", margin:"20px auto"}}>
        {
          isWidth ? 
          <Box sx={{textAlign:'end'}}><IconButton sx={{backgroundColor:"#9f73e8", color:"#fff", "&:hover" : {fontWeight:"800", backgroundColor:"#9f73e8", color:"#fff"} }} onClick={handleCrossmd}><Close/></IconButton></Box>
          :
          <Box sx={{textAlign:'end'}}><IconButton sx={{backgroundColor:"#9f73e8", color:"#fff", "&:hover" : {fontWeight:"800",backgroundColor:"#9f73e8", color:"#fff"} }} onClick={handleCrosslg}><Close/></IconButton></Box>
        }
        
        <Grid align='center' mt={2} mb={6}>
        <Avatar sx={{backgroundColor:'#9f73e8',width:'40px', height:'40px'}}>
          <LockOpenIcon></LockOpenIcon>
          </Avatar>
        <Typography 
          variant="h3" 
          sx={{textTransform:"uppercase", marginTop:'10px', fontSize:'40px', fontWeight:"700" }}>
            Welcome <span style={{color:"#9f73e8"}}>back</span>
        </Typography>
        </Grid>
        
        <form>
        <Stack 
          direction='column'
          spacing={{xs:2, sm:5, md: 6}} 
          sx={{alignItems:'center',maxWidth:"500px",  margin:"auto"}}
          >
           <TextField 
              type='text' 
              label='Username'
              placeholder='Enter Username' 
              variant='outlined'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              InputLabelProps= { {style : {color :'#000', fontSize:'20px'} }}
              InputProps={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #acaaaa",
                    borderRadius:"35px",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid #d35cff",
                    },
                  },
                 
                },
              }}
              fullWidth 
              required />

           <TextField 
              type='password' 
              label='Password' 
              placeholder='Enter password' 
              variant='outlined'
              helperText='Forgot password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps= { {style : {color :'#000', fontSize:'20px'} }}
              InputProps={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #acaaaa",
                    borderRadius:"35px"
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid #d35cff",
                    },
                  },
                 
                },
              }}
              fullWidth
              required />

           <Stack direction="row" spacing={4} p={3}>
            <Link to= "/register">
              <Button
             variant='outlined'
              sx={{
              marginLeft:"10px", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#9067f1", 
              border:" 2.5px solid #9067f1", 
              borderColor: '9067f1', 
              // fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px', 
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}>REGISTER</Button></Link> 

            <Link to= "/company">
            <Button 
             sx={{ 
              marginLeft:"auto", 
              width:'130px', 
              fontSize: "17.57px",
              backgroundColor: "#9067f1", 
              color: "#fff", 
              // fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px',
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}
             > LOGIN</Button>
             </Link>
             </Stack>
        </Stack>
        </form>
        </Paper>
    </Grid>
    </>
  );
}

export default Login;
