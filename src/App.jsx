import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExchangeRates from './pages/ExchangeRates'
import About from './pages/About'
import NotFound from './pages/PageNotFound'
import { getTheme } from './theme'
import { useAppContext } from './context/AppContext'
import Header from './components/Header'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

const App = () => {
  const { themeMode } = useAppContext();
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />

      {/* ----Global Navigation Bar---- */}
      <Header /> 

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange-rates" element={<ExchangeRates />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </ThemeProvider>
  )
}

export default App