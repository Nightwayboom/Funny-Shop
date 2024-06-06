import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SetAccessToken } from '../../src/axiosInstance'
import { UserProps } from '../components/app.type'
import { regUser } from '../components/api'

const defaultTheme = createTheme()
export default function SignUp({setUser }: UserProps) : JSX.Element  {

  const [signUpForm, setSignUpForm] = React.useState({
    name: '',
    login: '',
    email: '',
    password: '',
    isAdmin: ''
  })

  type CurrentType = {
    id :number,
    value: string,
    label : string
  }
  const currencies : CurrentType[] = [
    {
        id: 1,
      value: 'true', 
      label: 'Продавец',
    },
    {
        id: 2,
      value: 'false',
      label: 'Покупатель',
    },
  ]

  const handleSubmit = async (event:any) => {
    regUser(event, signUpForm).then((data) => {
        setUser(data.user)
        SetAccessToken(data.accessToken)
        window.location.href = '/'
    }).catch(console.error)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: 'gray', width: 52, height: 52 }}
            src='../../public/Batman.svg'
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Регистрация
          </Typography>
          <Box component='form'  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Имя'
                  value={signUpForm.name}
                  onChange={elem =>
                    setSignUpForm({
                      ...signUpForm,
                      name: elem.target.value,
                    })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Логин'
                  name='lastName'
                  value={signUpForm.login}
                  onChange={elem =>
                    setSignUpForm({
                      ...signUpForm,
                      login: elem.target.value,
                    })
                  }
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  name='email'
                  autoComplete='email'
                  value={signUpForm.email}
                  onChange={elem =>
                    setSignUpForm({
                      ...signUpForm,
                      email: elem.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Пароль'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={signUpForm.password}
                  onChange={elem =>
                    setSignUpForm({
                      ...signUpForm,
                      password: elem.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='outlined-select-currency'
                  select
                  style={{width: "396px"}}
                  label='Кто ты, воин?'
                  defaultValue='false'
                >
                  {currencies.map(option => (
                    <MenuItem key={option.id} value={option.value} onClick={() =>
                      setSignUpForm({
                        ...signUpForm,
                        isAdmin: option.value,
                      })
                    }>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              style={{ backgroundColor: 'black' }}
              sx={{ mt: 3, mb: 2 }}
            >
              Тык
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}