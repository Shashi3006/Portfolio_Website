import {React} from 'react';
import { Button, FormControl, IconButton, FormLabel, Grid, Paper, TextField, Stack, Box, Typography, AppBar, Toolbar, styled } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import image from './Bg_Image/BG.png';
import "@fontsource/montserrat/400.css"; 

function Register() {
   
    const CssTextField = styled (TextField)({
      border:'1px solid #bebebe',
      borderRadius:'25px',
      height:'48px',
      padding:'8px 15px',
      marginBottom:'10px',
      backgroundColor:"#fff",
      color:"#000",
      fontFamily:"Montserrat', sans-serif"
   })
  const buttonStyle= {
    "&:hover":{
       border:"solid 1px #9f73e8",
       color:"#fff",
       bgcolor:"#9f73e8",
       
    },
    width:'110px',
    borderRadius:'18px',
    bgcolor:'#9f73e8',
    alignItems:'center',
    color:'#fff',
  }

  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', boxShadow:'0 4px 6px #a7a7a8', position:"fixed", height:"80px", zIndex:"999"}}>
        <Toolbar>
        <Link to="/"><Box sx={{margin:"25px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo' height={65} width={110} /></Box></Link>            
            <Button
              sx={{
              marginLeft:"auto", 
              width:'130px', 
              fontSize: "17.57px", 
              color: "#fff", 
              backgroundColor: "#9067f1", 
              borderColor: '9067f1', 
              fontWeight: "bold",
              letterSpacing: "0.05em",
              borderRadius: '20px', 
              "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
              }}>REGISTER</Button> 
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
       
        <Paper elevation={10} style={{borderRadius:"30px", padding:'20px', width:"560px", height:'100%', margin:"50px auto"}}> 
        <Box sx={{textAlign:'end'}}><Link to="/"><IconButton sx={{backgroundColor:"#9f73e8", color:"#fff", "&:hover" : {fontWeight:"800", backgroundColor:"#9f73e8", color:"#fff"} }}><Close/></IconButton></Link></Box>
        
        <Stack 
          direction='column'
          spacing={{xs:2, sm:5, md: 8}} 
          sx={{alignItems:'center', marginLeft:"5px" }}
        >

        <FormControl>
         <Typography variant="h5" mt={5} sx={{margin:"20px 0", fontWeight:"bold"}}>CREATE ACCOUNT</Typography>

          <FormLabel sx={{fontWeight:"light-bold", color:"#9f73e8"}}>Company Name</FormLabel>
            <CssTextField variant="standard" placeholder='Write Company Name' fullWidth required
            InputProps={{ 
             disableUnderline: true }}
            ></CssTextField>

         <FormLabel sx={{marginTop:'20px', fontWeight:"light-bold", color:"#9f73e8"}}>Contact Person</FormLabel>
         <Stack direction='row' spacing={3} mt={0}>
            <CssTextField variant="standard" placeholder='FirstName'
             InputProps={{ 
              disableUnderline: true }}
              required></CssTextField>

            <CssTextField variant="standard" placeholder='LastName'
             InputProps={{ 
              disableUnderline: true }}
              required></CssTextField>
            </Stack>

            <FormLabel sx={{marginTop:'20px', fontWeight:"light-bold", color:"#9f73e8"}}>E-Mail</FormLabel>
            <CssTextField variant="standard" placeholder='Enter E-mail address'
            InputProps={{ 
             disableUnderline: true }}
            fullWidth required></CssTextField>

            <FormLabel sx={{marginTop:'20px', fontWeight:"light-bold", color:"#9f73e8"}}>Contact No.</FormLabel>
            <CssTextField type='number' variant="standard" placeholder='Contact No.'
            InputProps={{ 
             disableUnderline: true }}
            fullWidth required></CssTextField>

           <FormLabel sx={{marginTop:'20px', fontWeight:"light-bold", color:"#9f73e8"}}>Company Size</FormLabel>
            <CssTextField type='number' variant="standard" placeholder='Number of Employees'
            InputProps={{ 
             disableUnderline: true }}
            fullWidth required>
            </CssTextField>

            <Box spacing={0} mt={4} sx={{textAlign:'end'}}>
            <Link to="/billingdetails">
              <Button sx={buttonStyle} onClick={()=> window.scrollTo(0, 0)}>
                Next
              </Button></Link>
           </Box>
        </FormControl>
        </Stack>
      </Paper>
    </Grid>
    </>
  );
}

export default Register;
