import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/CurrencyBitcoin'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axiosInstance, { SetAccessToken } from '../axiosInstance'
import { UserProps } from './app.type'
// const pages = ['Главная', 'Pricing', 'Blog']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']


function NavBar({ user, setUser }:UserProps) : JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)


  const handleOpenNavMenu = (event : any)  => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event : any) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const navigate = useNavigate()
  async function handleEditClick(data:string){
    switch (data) {
      case 'Profile':
        navigate('/profile')
        break
      case 'Logout':
        await axiosInstance.get('/auth/logout')
        setUser(null)
        SetAccessToken('')
        window.location.href = '/'
        break
      case 'Home':
        navigate('/')
        break
      default:
        break
    }
  }
  return (
    <AppBar position='static'>
      <Container maxWidth='xl' style={{ backgroundColor: '#4B4F4E' }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            // href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Чудо Ларёк
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleEditClick('Home'), handleCloseNavMenu
                }}
              >
                <Typography textAlign='center'>Главная</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Не главная</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Чудо Ларёк
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href='/'
            >
              Главная
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href='/123123'
            >
              Не главная
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='Remy Sharp' src='../../public/iconPage.svg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => handleEditClick('Profile')}>
                    <Typography textAlign='center'>Профиль</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleEditClick('Logout')}>
                    <Typography textAlign='center'>Выйти</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button href='signin' style={{ color: 'white' }}>
                  <Typography textAlign='center'>Лога</Typography>
                </Button>
                <Button href='signup' style={{ color: 'white' }}>
                  <Typography textAlign='center'>Рега</Typography>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar





