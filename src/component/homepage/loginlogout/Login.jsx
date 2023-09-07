import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../Navbar"



const defaultTheme = createTheme();

export default function Login() {
  let directTo=useNavigate()
  let [currentdata, setcurrentdata] = React.useState({
    email: "",
    password: ""
    
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log( JSON.stringify({
      email: currentdata.email,
         password: currentdata.password
       }));
   let fletych=await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
     email: currentdata.email,
        password: currentdata.password
      })
    })
    
    const js=await fletych.json()
    console.log(js.authtoken)
    if(js.sucess){
      localStorage.setItem("authtoken",js.authtoken)
      directTo("/")

    }else{
      alert("try with correct data")
    }
  };
  


  return (<><Navbar></Navbar>
    <ThemeProvider theme={defaultTheme}>
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
          <Grid item xs={12} marginBottom={5}>
                <TextField
                  onChange={(e) => {
                    setcurrentdata({
                      ...currentdata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={currentdata.email}
                />
              </Grid>
            <Grid item xs={12} marginTop={4}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    setcurrentdata({
                      ...currentdata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={currentdata.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/singup"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider></>
  );
}
