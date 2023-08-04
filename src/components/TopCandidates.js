import React from 'react';
import { Typography, Stack, Card, Button, useTheme, useMediaQuery, Box, Paper, Grid, AppBar, Toolbar, TextField, FormControl, FormLabel, CardContent } from '@mui/material';
import { useState} from 'react';
import image from './Bg_Image/BG.png';
import { Link } from 'react-router-dom';

function TopCandidates({ data }) {
    const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
    const [jobPosition, setJobPosition] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [showProfile, setShowProfile] = useState(data);

    const handlesearch = () => {
      const filteredProfiles = data.filter((profile) => {
        const positionMatch = profile.Position.toLowerCase().includes(jobPosition.toLowerCase()); 
        const locationMatch = profile.Location.toLowerCase().includes(jobLocation.toLowerCase());
        return positionMatch || locationMatch;
        });
        setShowProfile(filteredProfiles);
    }

  return (
    <>
    <AppBar position='static' component={"nav"}>
        <Toolbar sx={{backgroundColor:'#fff'}}>
        <Link to="/">
          <Box sx={{margin:"10px"}} onClick={()=> window.scrollTo(0, 0)}><img src='./Images/Logo.png' alt='logo' height={70} width={120} /></Box></Link>
          
        <Box sx={{marginLeft:"auto",border:"3px solid #b3b1b1", borderRadius:"50%", padding:"5px" }}><img src='./Images/logo2.png' alt='logo2' height={40} width={40} /></Box>
     </Toolbar>
    </AppBar>

    <Grid sx={{ backgroundImage:`url(${image})`, 
                backgroundRepeat:'no-repeat', 
                backgroundSize:'cover', 
                 padding:"5px"}}>

            <Link to='/about' className='go_back'><span>&#8592;</span> Go Back</Link>
            
       <Paper elevation={10} sx={{borderRadius:"30px", padding:5, height:'1100px', width: isMatch ? '90vw' : '70vw', margin:"60px auto"}}>
       <Typography variant='h4' sx={{textAlign:"center", fontSize:isMatch ? "24px" : "44px", fontWeight:'bold'}}>
         TOP<span style={{color:"#7c43fa", fontWeight:"bold" }}> CANDIDATES</span> 
        </Typography>

        
            <FormControl sx={{width:"100%"}}>
            <Stack direction="row" mt={4}
               spacing={{xs:2, sm:5, md: 8}} 
                sx={{justifyContent:"center", width:"100%"}}>
          
              <Stack direction="column" sx={{marginRight:isMatch ? "30px" : "90px", width:isMatch ? "45%" :"35%"}}>
             <FormLabel sx={{color:"#9f73e8"}}>Categories</FormLabel>
            <TextField variant="standard" placeholder='Job position'
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
             fullWidth required
             sx={{ border:'1px solid #ebebeb',
             borderRadius:'25px',
             height:'48px',
             padding:'8px 15px',
             marginBottom:'10px',
             backgroundColor:"#fff"}}
            InputProps={{ 
             disableUnderline: true }}
            ></TextField></Stack>

            <Stack direction="column" sx={{marginLeft:isMatch ? "30px" : "90px", width:isMatch ? "45%" :"35%"}}>
            <FormLabel sx={{color:"#9f73e8"}}>Location</FormLabel>
            <TextField 
              variant="standard" 
              placeholder='Location'
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              fullWidth required
              sx={{
                border:'1px solid #ebebeb',
                borderRadius:'25px',
                height:'48px',
                padding:'8px 15px',
                marginBottom:'10px',
                backgroundColor:"#fff"
              }}
            InputProps={{ 
             disableUnderline: true }}
            ></TextField></Stack>
            </Stack>
            <Button 
                  onClick={handlesearch}
                  sx={{ 
                    marginLeft:'auto', 
                    width:'170px', 
                    fontSize: "17.57px",
                    backgroundColor: "#9067f1", 
                    color: "#fff", 
                    fontWeight: "bold",
                    letterSpacing: "0.05em",
                    borderRadius: '20px',
                    "&:hover" : { borderColor:"#9067f1", backgroundColor:"#9067f1", color:"#fff"} 
                  }}
                > View Profile</Button>
            </FormControl>
            

             <Stack sx={{ overflowY:"auto", width:"100%", height:"790px", marginTop:"50px"}}>
             
            {showProfile.length > 0 ? (
              <ul>
              {showProfile.map(profile => (
              <Grid item xs={12} sm={6} md={4} key={profile.id} 
                    sx={{marginTop:'40px'}}>
      
                <Card sx={{ 
                    alignItems:'left', 
                    borderRadius:'40px',     
                    marginBottom:'20px',
                    width:'420px',
                    height:'210px',
                    backgroundColor:"#ebebeb",
                    boxShadow: '5px 10px 22px #888888'}}>
                     
                    <CardContent>
                      <Typography variant='body2' mt={2} sx={{color:'#646161'}}>
                        Name: {profile.Name}<br />
                        Position: {profile.Position}<br />
                        Location: {profile.Location}<br />
                        Experience: {profile.Experience}<br />
                        Skills: {profile.Skills}<br />
                        Education: {profile.Education}<br />
                        Eligibility Rank: {profile.EligibilityRank}
                      </Typography>
                    </CardContent>
                </Card>
              </Grid>
              ))}
              </ul>
               ) :(
                <Typography variant='h5' mt={8} sx={{textAlign:"center",fontWeight:"bold", color:"#000"}}>No Matching Profile</Typography>
               ) }
              </Stack>
          </Paper>
        </Grid>
    </>
  );
}

export default TopCandidates;
