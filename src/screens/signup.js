// import { Grid,TextField, Button, Typography,Link,Box } from '@mui/material'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {signUpUser} from '../config/firebasemethod';
// function Signup(){

//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [username,setUserName]=useState("")
//     const [contact,setContact]=useState("")
//     const navigate=useNavigate()
//     let SignUp=()=>{
//         signUpUser(
//             {
//                 email,
//                 password,
//                 username,
//                 contact
//             }
//     )
//     .then((userCredential) => {

//         const user = userCredential.user;
//         navigate('/login')
//         alert("Your Account Have Been Created")
//       })
//       .catch((error) => {
//         alert("This Account already Availlable")
//       });
//     }

//     let gotoSignUp=()=>{
//         navigate('/login')
//     }
//     const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const btnstyle={margin:'13px 0'}
//     return(
//         <Grid style={paperStyle}>
//             <Grid>
//                 <h2>SignUp</h2>
//             </Grid>
//             <Box>
//         <TextField label='UserName' variant='standard' onChange={(e)=>setUserName(e.target.value)}/>
//         </Box>
//             <Box>
//         <TextField label='Email' variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
//         </Box>
//         <Box>
//         <TextField label='Password' type='password' variant='standard' onChange={(e)=>setPassword(e.target.value)}/>
//         </Box>
        
//         <Box>
//         <TextField label='Contact' type='text' variant='standard' onChange={(e)=>setContact(e.target.value)}/>
//         </Box>
//         <Box>
//         </Box>
//         <Box>
//         <Button color='primary' variant="contained" style={btnstyle}  onClick={SignUp} >Sign Up</Button>
//         </Box>
//         <Typography >
                     
//                 </Typography>

//                 <Typography > 
//                      <Link to='login' >
//                       <Button onClick={gotoSignUp}>   Login Page</Button> 
//                 </Link>
//                 </Typography>
//         </Grid>
//     )
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUserName]=useState("")
    const [contact,setContact]=useState("")
    const [isLaoding,setloader]=useState(false)
    const navigate=useNavigate()
    let SignUp=()=>{
        setloader(true)
        signUpUser(
            {
                email,
                password,
                username,
                contact
            }
    )
    .then((success) => {
        setloader(false)
        navigate('/login')
        alert("Your Account Have Been Created")
      })
      .catch((error) => {
        setloader(false)
        alert("This Account already Availlable")
      });
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
              autoFocus
              onChange={(e)=>setUserName(e.target.value)}
            />
      
        <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
            autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Contact No#"
              type="text"
              id="number"
              autoComplete="current-number"
              onChange={(e)=>setContact(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={SignUp}
            >
                {isLaoding ? <CircularProgress color="inherit" /> :"Sign Up"}
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                  <Link href="login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}