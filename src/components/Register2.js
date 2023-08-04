import React from 'react';
import image from './Bg_Image/BG.png';
import { Button, FormControl, FormLabel,MenuItem, Select, Grid, Paper, TextField, Stack, AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Register2() {

  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const CssTextField = styled (TextField)({
    border:'1px solid #ebebeb',
    borderRadius:'25px',
    height:'48px',
    padding:'8px 15px',
    marginBottom:'10px',
    backgroundColor:"#fff"
 })

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
      <Link to="/"><Box sx={{margin:"10px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo' height={65} width={110} /></Box></Link>
      </Toolbar>
    </AppBar>
    <Box>
      <Toolbar />
    </Box>
    <Grid container 
       spacing={{ xs: 2, md: 2 }} 
       columns={{ xs: 4, sm: 8, md: 12 }}
       sx={{margin:"20px auto", backgroundImage:`url(${image})`, 
       backgroundRepeat:'no-repeat', 
       backgroundSize:'cover'}}>

    <Paper elevation={10} style={{borderRadius:"30px", padding:'20px', height:'100%', width:"560px", margin:"50px auto"}}>
   
      <Stack 
          direction='column'
          spacing={{xs:2, sm:5, md: 8}} 
          sx={{marginLeft:"20px" }}
          >

        <FormControl>
         <Typography variant="h5" sx={{margin:'20px 0',fontWeight:"bold"}}>BILLING INFORMATION</Typography>

          <FormLabel sx={{color:"#9f73e8"}}>Billing Address</FormLabel>
            <CssTextField variant="standard" placeholder='Full Address' fullWidth required
            InputProps={{ 
             disableUnderline: true }}
            ></CssTextField>


            <FormLabel sx={{marginTop:'20px', color:"#9f73e8"}}>City</FormLabel>
            <CssTextField variant="standard" placeholder='City Name'
            InputProps={{ 
             disableUnderline: true }}
             sx={{width:"180px"}}
            fullWidth required></CssTextField>

            <FormLabel sx={{marginTop:'20px', color:"#9f73e8"}}>State/Province</FormLabel>
            <CssTextField type='number' variant="standard" 
            InputProps={{ 
             disableUnderline: true }}
            fullWidth required></CssTextField>

           <FormLabel sx={{marginTop:'20px', color:"#9f73e8"}}>Postal Code</FormLabel>
            <CssTextField type='number' variant="standard"
            InputProps={{ 
             disableUnderline: true }}
             sx={{width:"180px"}}
            fullWidth required>
            </CssTextField>

            <FormLabel sx={{marginTop:'20px', color:"#9f73e8"}}>Preferred Payment Method
            </FormLabel>
            <Select 
             defaultValue={0}
            // InputProps={{disableUnderline: true }}
            //  InputProps= {{ sx: { "&.MuiOutlined:hover": { border: "1px solid #9f73e8" } } }} 
             sx={{border:'1px solid #ebebeb',
             borderRadius:'25px',
             height:'48px',
             padding:'8px 15px',
             marginBottom:'10px',
             bgcolor:"#fff",
             "&.MuiOutlined:hover": { border: "1px solid #9f73e8" } }}
            fullWidth required>
               <MenuItem value={1}>GPay</MenuItem>
               <MenuItem value={2}>PhonePay</MenuItem>
               <MenuItem value={3}>Credit Card</MenuItem> 
               <MenuItem value={0}>None</MenuItem>
            </Select>

             </FormControl>
             </Stack>
             <Stack direction='row' spacing={2} mt={10} sx={{justifyContent:"center"}}>
              <Link to="/register"><Button sx={backbuttonStyle} onClick={()=> window.scrollTo(0, 0)}>Back</Button></Link>
              <Link to="/additionalInfo"><Button sx={nextbuttonStyle} onClick={()=> window.scrollTo(0, 0)}>Next</Button></Link>
            </Stack>
      </Paper>
       </Grid>
    </>
  );
}

export default Register2;
