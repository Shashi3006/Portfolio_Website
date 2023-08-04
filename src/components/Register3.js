import React from 'react';
import image from './Bg_Image/BG.png';
import { Button, FormControl, FormLabel, Grid, Paper, TextField, Stack, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Register3() {
    
  const nextbuttonStyle= {
    "&:hover":{
       border:"solid 1px #9f73e8",
       color:"#fff",
       bgcolor:"#9f73e8",
       
    },
    width:'110px',
    borderRadius:'18px',
    bgcolor:'#9f73e8',
    color:'#fff',
  }

  const backbuttonStyle= {
    "&:hover":{
        color:"#fff",
        bgcolor:"#9f73e8",
       
    },
    border:"solid 1px #9f73e8",
    borderRadius:'18px',
    width:'110px',
    color:'#9f73e8',
  }

  return (
    <>
     <AppBar component='nav' sx={{background:'#fff'}}>
      <Toolbar>
      <Link to="/"><Box sx={{margin:"10px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo'  height={65} width={110} /></Box></Link>
      </Toolbar>
    </AppBar>
    <Box>
      <Toolbar />
    </Box>
    <Grid container sx={{margin:"auto", backgroundImage:`url(${image})`, 
                         backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>

     <Paper elevation={10} style={{borderRadius:"30px", padding:'20px', height:'100%', width:"560px", margin:"50px auto"}}>

      <Stack direction='column'
             spacing={{xs:2, sm:5, md: 8}}  
             sx={{margin:"40px 25px 0 25px"}}>
        
        <FormControl>
        <Typography variant='h5' sx={{fontWeight:"bold"}}>ADDITIONAL INFORMATION</Typography>
          <FormLabel sx={{marginTop:"30px", color:"#9f73e8"}}>Company Details</FormLabel>
            <TextField variant="standard" placeholder='Type'
            InputProps={{ 
             disableUnderline: true }}
            sx={{
              border:'2px solid #bebebe',
              borderRadius:'25px',
              height:'130px',
              padding:'5px 15px',
              backgroundColor:"#fff",
              color:"#000"
            }}
            fullWidth
            ></TextField>

         <FormLabel sx={{marginTop:'70px', color:"#9f73e8"}}>Additional Queries</FormLabel>
            <TextField variant="standard" placeholder='Type'
             InputProps={{ 
              disableUnderline: true }}
            sx={{
                border:'2px solid #bebebe',
                borderRadius:'25px',
                height:'130px',
                margin:'5px 20px 0 0',
                padding:'5px 15px',
                backgroundColor:"#fff",
                color:"#000"
            }}
            fullWidth
             ></TextField>
             <Typography variant='body2' mt={3}>By submitting this form, you agree to our Privacy Policy and Terms of Service</Typography>

            <Stack direction='row' spacing={2} mt={10} sx={{justifyContent:"center"}}>
              <Link to="/billingdetails"><Button sx={backbuttonStyle} onClick={()=> window.scrollTo(0, 0)}>Back</Button></Link>
              <Button type="submit" sx={nextbuttonStyle} onClick={()=> window.scrollTo(0, 0)}>Submit</Button>
            </Stack>
            
        </FormControl>
        </Stack>
      </Paper>
    </Grid>
    </>
  );
}

export default Register3;
