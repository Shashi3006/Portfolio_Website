import React from 'react';
import { AppBar, Card, useTheme, useMediaQuery, CardContent, Grid, Paper, Stack, Toolbar, Typography, Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';
import image from './Bg_Image/BG.png';
import Footer from './Footer';

function Company() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    
  return (
    <>
    <AppBar position='static' component={"nav"}>
        <Toolbar sx={{backgroundColor:'#fff'}}>
        <Link to="/"><Box sx={{margin:"10px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo' height={70} width={120} /></Box></Link>
          
        <Box sx={{marginLeft:"auto",border:"3px solid #b3b1b1", borderRadius:"50%", padding:"5px" }}><img src='./Images/logo2.png' alt='logo2' height={40} width={40} /></Box>
     </Toolbar>
    </AppBar>

    <Grid sx={{ backgroundImage:`url(${image})`, 
                backgroundRepeat:'no-repeat', 
                backgroundSize:'cover', 
                 padding:"5px"}}>
        <Link to='/about' className='go_back'><span>&#8592;</span> Go Back</Link>
       <Paper elevation={10} sx={{borderRadius:"30px", padding:5, height:'1100px', width: isMatch ? '90vw' : '75vw', margin:"60px auto"}}>
        
        <Stack direction='row' sx={{justifyContent:"center"}}>
          <img src='./Images/logo2.png' alt='logo2' className="companypagelogo" height={isMatch? 60: 80} width={isMatch? 60:80} />
          <Typography variant='h2' sx={{ fontSize: isMatch ? '38px' : '45px'}}>Modern Furnish Co.</Typography>
         </Stack>

         <hr className='horizontal_line' />
         <Typography variant='body1' mt={3} sx={{fontSize:"20px"}}>
         Modern Furnish Co. is a leading furniture company dedicated to providing high-quality, stylish, 
           and functional furniture pieces for modern living spaces. With a passion for design and a 
           commitment to exceptional craftsmanship, we aim to transform houses into homes by offering
           a wide range of contemporary furniture solutions that suit diverse tastes and lifestyles.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure saepe assumenda est sint quidem cum rem, dolorem amet molestias. Ducimus, ipsum aliquam magnam eveniet nihil necessitatibus sunt fugiat dolores.
         </Typography>

         
         <Grid container spacing={4} sx={{marginTop:isMatch ? "370px" : "380px", height:"250px"}}>
           <Grid item xs={4} sm={4} md={4} sx={{textAlign:"center"}}>
            <Card sx={{ 
              borderRadius:'40px',
              backgroundColor:'#fff',
              height:isMatch ? "160px" : "180px"
              }}>
              <CardContent>
                  <img src='./Images/Add_Job_button.png' alt='image1' height={isMatch? 90 : 110} width={isMatch? 125 : 150} />
              </CardContent>
              <Typography variant={isMatch?'subtitle2': 'h6'} mt={1}>
                  Add Job Vacancy
              </Typography>
            </Card>
            </Grid>

            <Grid item xs={4} sm={4} md={4} sx={{textAlign:"center"}}>
            <Card sx={{ 
            borderRadius:'40px',
            backgroundColor:'#fff',
            height:isMatch ? "160px" : "180px"
            }}>
            <Link to='/topcandidates' ><CardContent  onClick={()=> window.scrollTo(0, 0)} >
                <img src='./Images/Top_Candidates_button.png' alt='image2' height={isMatch? 90 : 110} width={isMatch? 105 : 130} style={{marginTop:'0px'}} />
            </CardContent></Link>
            <Typography variant={isMatch?'subtitle2': 'h6'} mt={0}>
                Top Candidates
            </Typography>
         </Card>
         </Grid>

         <Grid item xs={4} sm={4} md={4} sx={{textAlign:"center"}}>
         <Card sx={{ 
            borderRadius:'40px',
            backgroundColor:'#fff',
            height:isMatch ? "160px" : "180px"
            }}>
            <CardContent sx={{ marginTop:isMatch ? '0px' :'18px'}}>
                <img src='./Images/Inbox_icon.png' alt='image3'  height={isMatch? 85 : ""} width={isMatch? 95 : ""} />
            </CardContent>
            <Typography variant={isMatch?'subtitle2': 'h6'} mt={1.3}>
                Inbox
            </Typography>
         </Card>
          </Grid>

         </Grid>
                
         {/* <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }} sx={{bgcolor:'#dbcdf1', marginTop:"550px"}}>
       
           <Box sx={{backgroundColor:"green",textAlign:'center', display: 'flex',
            flexWrap: 'wrap',
             '& > :not(style)': {
              m: 4,
              width: 220,
              height: 190,
            }, 
          }}
         >
         <Card sx={{ 
            alignItems:'center', 
            borderRadius:'40px',
            backgroundColor:'#fff'
            }}>
            <CardContent>
                <img src='./Images/Add_Job_button.png' alt='image1' height={110} width={150} />
            </CardContent>
            <Typography variant='h6' mt={2}>
                Add Job Vacancy
            </Typography>
         </Card>

         <Card sx={{ 
            alignItems:'center', 
            borderRadius:'40px',
            backgroundColor:'#fff'
            }}>
            <Link to='/topcandidates' ><CardContent>
                <img src='./Images/Top_Candidates_button.png' alt='image2' height={120} width={120} style={{marginTop:'0px'}} />
            </CardContent></Link>
            <Typography variant='h6' mt={0}>
                Top Candidates
            </Typography>
         </Card>

         <Card sx={{ 
            alignItems:'center', 
            borderRadius:'40px',
            backgroundColor:'#fff',
            justifyContent:'end'
            }}>
            <CardContent sx={{marginTop:'20px'}}>
                <img src='./Images/Inbox_icon.png' alt='image3' />
            </CardContent>
            <Typography variant='h6' mt={2}>
                Inbox
            </Typography>
         </Card>
         </Box>
       
         </Stack> */}
       </Paper>
    </Grid>
    <Footer />
    </>
  );
}

export default Company;
