import Wrapper from 'components/Wrapper';
import './App.css';
import { ThemeProvider } from 'styled-components'
import UsersProvider from 'context/Users';
import React from 'react'

function App() {

  const children = React.useMemo(() => <Wrapper />, [])

  return (
    <ThemeProvider theme={{ mode: 'default' }}>
      <UsersProvider>
        {children}
      </UsersProvider>
    </ThemeProvider>

  );
}

export default App;
