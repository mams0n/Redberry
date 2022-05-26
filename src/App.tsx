import Wrapper from 'components/Wrapper';
import './App.css';
import { ThemeProvider } from 'styled-components'
import CategoriesProvider from 'context/Categories';
import React from 'react'

function App() {

  const children = React.useMemo(() => <Wrapper />, [])

  return (
    <ThemeProvider theme={{ mode: 'default' }}>
      <CategoriesProvider>
        {children}
      </CategoriesProvider>
    </ThemeProvider>

  );
}

export default App;
