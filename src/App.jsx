import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Navigation';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <div className='background' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
