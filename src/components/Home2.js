import { Box, Card, CardContent, Typography, Stack, } from '@mui/material';
import React from 'react';
import './Navbar.css';
import { useEffect, useRef, useState } from "react";
import Badge from "@mui/material/Badge";

function Home2({isMatch}) {
    const badgeRef = useRef(0);
    const [position, setPosition] = useState(0);
    console.log("BasicBadge:", badgeRef);

    useEffect(() => {
        setPosition(badgeRef.current? (badgeRef.current.getBoundingClientRect().width/2): 0);
      }, [badgeRef]);
      console.log("BadgeAfterInitialized", badgeRef);
      console.log("PoitionOfCard", position);


    const badgeStyle = {
        "& .MuiBadge-badge": {
            right: `${position}px`,
        }
    }
  return (
    <>
    <Stack 
    direction={{ xs: 'column', sm: 'column', md :'row', lg:'row', xl:'row' }}
    spacing={{ xs: 2, sm: 3, md: 5 }} 
    sx={{ backgroundImage: 'linear-gradient(to  bottom left, rgba(187,161,240,0.8),rgba(198,177,241,0.6),rgba(180,135,226,0.6))', mt:5}}>
                            
    <Box sx={{width:"100%", p: 3, mt:4}}>
        <Box sx={{
            justifyContent:'center',
            textAlign:'center',
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
             mt:4,
             mb:4,
             ml:isMatch ? 2 : 3,
             mr:isMatch ? 2 : 3,
             width: 360,
             height: 210,
            }, 
        }}
       >
       <Badge sx={badgeStyle} 
              badgeContent={<img src='./Images/Faster.png' alt='faster' height='130px' width='130px' /> }
              ref={badgeRef}>

                <Card sx={{ 
                  alignItems:'center', 
                  borderRadius:'40px',
                  color:'#9067f1',
                  backgroundColor: 'rgba(245, 243, 249, 0.7)'
                  }}>
                <CardContent>
                 <Typography gutterBottom variant='h5' mt={7} sx={{fontSize:'20px', fontWeight:'600'}}>
                    FIND TOP TALENT FASTER
                 </Typography>
                 <Typography variant='body2' sx={{fontSize:'15px',padding:'10px'}}>
                   Access a vast pool of qualified 
                  candidates from diverse backgrounds and industries. </Typography>
                 </CardContent> 
                </Card>
        </Badge>
       
        <Badge sx={badgeStyle} 
              badgeContent={<img src='./Images/Simplify icon.png' alt='faster' height='130px' width='130px' /> }
              ref={badgeRef}>
        <Card  sx={{ 
            alignItems:'center', 
            borderRadius:'40px',
            color:'#9067f1',
            backgroundColor: 'rgba(245, 243, 249, 0.7)'
            }}>
            <CardContent>
                <Typography gutterBottom variant='h5' mt={7} sx={{letterSpacing: "-1px", textAlign:"left", fontSize:'20px', fontWeight:'600'}}>
                    SIMPLIFY YOUR HIRING PROCESS
                </Typography>
                <Typography variant='body2' sx={{fontSize:'15px', padding:'10px'}}>
                Automate candidate screening and filtering to focus on the most suitable candidates.
                </Typography>
            </CardContent>
        </Card>
        </Badge>

        <Badge sx={badgeStyle} 
              badgeContent={<img src='./Images/ATS icon.png' alt='faster' height='130px' width='130px' /> }
              ref={badgeRef}>
        <Card  sx={{ 
            padding:'2px',
            alignItems:'center', 
            borderRadius:'40px',
            color:'#9067f1',
            backgroundColor: 'rgba(245, 243, 249, 0.7)'
            }}>
            <CardContent>
                <Typography gutterBottom variant='h5' mt={6} marginBottom={3} sx={{letterSpacing: "-1.8px", textAlign:"left", fontSize:'20px', fontWeight:'600'}}>
                APPLICANT TRACKING SYSTEM(ATS)
                </Typography>
                <Typography variant='body2' sx={{fontSize:'15px'}}>
                Manage and organize applicant data in a centralized database for easy access and tracking.
                </Typography>
            </CardContent>
        </Card>
        </Badge>

        </Box>
    </Box>
    </Stack>
    </>
  );
}

export default Home2;
