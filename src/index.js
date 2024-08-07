import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider,extendTheme,ColorModeScript } from '@chakra-ui/react'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// 3. extend the theme
const tema = extendTheme({ config })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={tema}>
    <ColorModeScript initialColorMode={tema.config.initialColorMode} />
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);

