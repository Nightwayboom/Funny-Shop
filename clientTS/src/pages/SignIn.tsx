import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SetAccessToken }  from '../axiosInstance'
import { UserProps } from '../components/app.type';
import { logUser } from '../components/api';

const defaultTheme = createTheme();

export default function SignIn({setUser}: UserProps): JSX.Element {
  const [signInForm, setSignInForm] = React.useState({
    email: "",
    password: ""
})
  const handleSubmit = async (event:any) => {
    logUser(event, signInForm).then((data) => {
        setUser(data.user)
        SetAccessToken(data.accessToken)
        window.location.href = "/"
    })
  };
  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'gray' }} src="../../public/Batman.svg">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Входите
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={signInForm.email}
              autoComplete="email"
              onChange={e =>
                setSignInForm({ ...signInForm, email: e.target.value })
              }
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={signInForm.password}
              id="password"
              onChange={e =>
                setSignInForm({ ...signInForm, password: e.target.value })
              }
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor : "#474545" }}
              sx={{ mt: 3, mb: 2 }}
            >
              Тык
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}