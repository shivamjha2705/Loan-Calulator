import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'



const Header = () => {
  const navigate = useNavigate()
  const { themeMode, toggleTheme } = useAppContext()

  // Handles route navigation when a menu button is clicked
  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* App Title */}
        <Typography
          variant="h6"
          sx={{ cursor: 'pointer' }}
          onClick={() => handleNavigate('/')}
        >
          Loan Calculator
        </Typography>

        {/* Navigation Menu Buttons */}
        <Box>
          <Button color="inherit" onClick={() => handleNavigate('/exchange-rates')}>
            Exchange Rates (Live)
          </Button>
          <Button color="inherit" onClick={() => handleNavigate('/about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => handleNavigate('/error')}>
            Error Page
          </Button>
        </Box>

        {/* Theme Toggle Switch */}
        <Box display="flex" alignItems="center">
          <IconButton onClick={toggleTheme} color="inherit">
          </IconButton>
          <Switch
            checked={themeMode === 'dark'}
            onChange={toggleTheme}
            color="default"
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
