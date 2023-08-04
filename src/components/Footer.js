import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <>
     <Box sx={{ textAlign:'center', bgcolor:'#d0acf7', p: 3, marginTop:'auto'}}>
        <Box sx={{
            my:3, 
            "& svg":{fontSize:"30px", cursor:"pointer", mr:2},
            "& svg:hover":{color:'#b284e2', transform:'translateX(5px)', transition:'all 400ms'}
            }}>
            <InstagramIcon /><LinkedInIcon /><GitHubIcon /><YouTubeIcon /><FacebookIcon />
        </Box>
       <Typography
        variant="h5"
        sx={{ 
            "@media (min-width:600px)":{fontSize: "1 rem"},
        }}>
        All Rights Reserved &copy; Techinfo YT</Typography>
     </Box>
    </>
  );
}

export default Footer;
