import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
// import NavBar from '../components/NavBar'
function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='http://localhost:5173/'>
        Я сам сделал!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()
export default function ErrorPage() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '90vh',
          }}
        >
          <CssBaseline />
          <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
            <Typography variant='h2' component='h1' gutterBottom>
              Короче это...
            </Typography>
            <Typography variant='h4' component='h2' gutterBottom>
              {'Нет такой странички. И не будет'}
            </Typography>
            <Typography variant='h1'>404 Еrror</Typography>
          </Container>
          <Box
            component='footer'
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: theme =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container maxWidth='sm'>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}