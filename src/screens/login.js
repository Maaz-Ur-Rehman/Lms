// import { Grid,TextField, Button, Typography,Link,Box } from '@mui/material'
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import { logInUser } from '../config/firebasemethod';
// function Login(){

//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const navigate=useNavigate()
//         let login=()=>{
//             logInUser(
//                 {
//                     email,
//                     password,
                   
//                 }
//         )
//         .then((userCredential) => {
    
//             const user = userCredential.user;
//             navigate('/todo')
//             alert("Succesfull Loged In")
//             console.log(user)
//           })
//           .catch((error) => {
//             alert("Invalid Email & Password")
 
//           });

//         }

//         let gotoLogin=()=>{
//             navigate('/signup')
//         }

//         const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const btnstyle={margin:'13px 0'}
//     return(
//         <Grid style={paperStyle}>
//             <Grid>
//                 <h2>SignUp</h2>
//             </Grid>
//             <Box>
        
//         <TextField label='Email' variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
//         </Box>
//         <Box>
//         <TextField label='Password' type='password' variant='standard' onChange={(e)=>setPassword(e.target.value)}/>
//         </Box>
//         <Box>
//         </Box>
//         <Box>
//         <Button color='primary' variant="contained" style={btnstyle}  onClick={login} >Log In</Button>
//         </Box>
//         <Typography >
                     
//                 </Typography>

//                 <Typography > 
//                      <Link to='signup'  >
//                        <Button onClick={gotoLogin}> create an account</Button>
//                 </Link>
//                 </Typography>
//         </Grid>
//     )
// }
// export default Login;



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

export default function Login() {
    const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [isLaoding,setloader]=useState(false)
        const navigate=useNavigate()
            let login=()=>{
                setloader(true)
                logInUser(
                    {
                        email,
                        password,
                       
                    }
            )
            .then((success) => {
                setloader(false)
                navigate(`/${success.id}`)
        
                // alert("Succesfull Loged In")
              })
              .catch((error) => {
                setloader(false)

                alert("Invalid Email & Password")
     
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
            onChange={(e)=>setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            onClick={login}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                {isLaoding ? <CircularProgress color="inherit" />:"Login" }
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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