import React from 'react'
import C from '../assests/B.png';
import { Box, Container,Paper, Typography,TextField,InputAdornment,Divider,Button,Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router-dom';


 function ForgotPassword() {
  
 const navigate=useNavigate();
  return (
   <Box
     sx={{
               backgroundImage: `url(${C})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               margin: "0",
               padding: "0",
               minHeight: "100vh",
               minWidth: "100vw",
             }}
   
   >
    <Container component="main" maxWidth="xs" >
        <Paper color="white" elevation={0} sx={{padding:4,borderRadius:2,backgroundColor:"rgba(255,255,255,0.85)" , width:"100%",maxWidth:"500px", mx:"auto",}}  >
            <Typography variant='h5' align='center' sx={{fontFamily:"unset" , weight:"500",size:'20px',lineHeight:"30px"}} gutterBottom>
                Forgot Your Password?

            </Typography>

            <Typography variant="body2" align='center' color="textSecondary" sx={{fontFamily:"unset" , weight:"500",size:'20px',lineHeight:"30px"}} gutterBottom>
                Get a secure one-time link to log in <br/>
                Without needing to enter a password.

            </Typography>
            <Divider sx={{my:2}} />
            <Box component="form" sx={{mt:2}} >
                        <Typography variant= "body2" align='left' gutterBottom>
                          Email
                        </Typography>
            
                        <TextField
                        fullWidth
                        //label="Email"
                        variant="outlined"
                        margin="normal"
                        sx={{
                          borderRadius: '20px',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '20px',
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailOutlineIcon/>
                            </InputAdornment>
                          ),
                        }}
            
                        />
            </Box> 

             <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt:3,mb:2, borderRadius: "20px",
              '& .MuiOutlinedInput-root' : {
                borderRadius: "20px",
              }, }}
              onClick={()=>navigate("/ResetYourPassword")}
            >
              Submit

            </Button>   

            <Box display="flex" justifyContent="center" sx={{mt:1}}  >
              <Link href="#" variant="body1" color="primary" sx={{ textDecoration: "none", fontWeight: "bold" }} onClick={()=>navigate("/login")} >
              Back To Login
              </Link>

            </Box>        


        </Paper>


    </Container>

   </Box>
  )
}
export default ForgotPassword;
