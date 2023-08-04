import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Paper, Box, useTheme, useMediaQuery, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import image from './Bg_Image/BG.png'

function About() {
  
  const theme = useTheme();
  const isWidth = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100%',width:'100vw'}}>
     <AppBar position='static' component={"nav"}>
        <Toolbar sx={{backgroundColor:'#fff'}}>
        <Link to="/"><Box sx={{margin:"25px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo' height={70} width={120} /></Box></Link>
     </Toolbar>
    </AppBar><Box>
  <Toolbar />
</Box>

    <Grid sx={{marginTop:'50px'}}>
    <Paper elevation={10} style={{borderRadius:"30px", padding:'20px',  width:isWidth ? "85vw" : "60vw",  height:'100%', margin:"50px auto"}}> 
       <Link to='/' className='go_back'><span>&#8592;</span> Go Back</Link>
        <Box>
        <Typography variant='h4' sx={{textAlign:"center",  color: "#9f73e8",  paddingTop: "30px", fontSize: "45px", fontFamily: "'Montserrat', sans-serif", fontWeight: "700",textTransform: "uppercase"}}>About Us</Typography>
        </Box>
       <Typography variant='h6' mt={3}>Introducing Book Ledge, the visionary behind the cutting-edge digital recruitment
        solution app designed to revolutionize the hiring process for multiple multinational corporations (MNCs). 
        With a deep understanding of the challenges faced by organizations in finding the right talent and a passion 
        for leveraging technology to streamline the recruitment journey, Book Ledge has developed an app that promises
        a seamless hiring experience like never before.</Typography>
        <Typography variant='h6'>Driven by the belief that traditional recruitment methods often fall short in
         meeting the evolving demands of MNCs, Book Ledge set out to create a comprehensive solution that combines the 
         power of technology and the expertise of human resources. Recognizing the importance of efficient, accurate, 
         and timely recruitment processes, Book Ledge dedicated countless hours to research, analysis, and collaboration
          with industry experts to bring this revolutionary app to life.</Typography>
          <Typography variant='h6'>The digital recruitment solution app developed by Book Ledge offers a myriad of 
          features that cater specifically to the needs of MNCs. The app leverages advanced algorithms and machine 
          learning techniques to match job requirements with candidate profiles, ensuring that only the most suitable 
          individuals are considered for each position. This intelligent matching system not only saves time and effort
           but also increases the likelihood of finding the perfect candidate for every role.</Typography>

          <Box sx={{textAlign:"end"}}>
          <Link to= "/company">
          <Button
           onClick={()=> window.scrollTo(0, 0)}
           variant='outlined'
           sx={{ 
            margin:"0px",
           width:'220px', 
           fontSize: "17.57px", 
           color: "#9067f1", 
           border:" 2.5px solid #9067f1", 
           borderColor: '9067f1', 
           fontWeight: "bold",
           borderRadius: '20px', 
           "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
           }}>see more
           </Button>
           </Link>
           </Box>
          </Paper>
       </Grid>
       </div>
    </>
  );
}

export default About;
