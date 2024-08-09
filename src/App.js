import React from 'react';
import QuemSou from './pages/QuemSou'
import Habilidades from './pages/Habilidades'
import Experiencias from './pages/Experiencias'
import lg_ico from './images/language_icon.png'
import myIcon from './images/letter-v.png'
import textos from "./json/Textos.json"
import './App.css'
import './index.css'

import { Container, Flex,Button,useColorModeValue,useColorMode,useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon,SunIcon,MoonIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function App() {

  const color = useColorModeValue('white', 'gray.800')
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Container maxWidth="100vw" px='0px'>
      <nav className="navbar">
        <Flex maxWidth="100vw" direction='row' className='desktop desktop_menu'>
          <img src={myIcon} className="logo" alt="logo"/>
          <Button px='20px' bg={color}>About Me</Button>
          <Button px='20px' bg={color}>Skills</Button>
          <Button px='20px' bg={color}>Portifolio</Button>
          <Button px='20px' bg={color}>Education/Work</Button>
        </Flex>
        <img src={myIcon} className="logo mobile" alt="logo"/>
        <Flex maxWidth="100vw" direction='row' textAlign='end' >
          <Button className='desktop' bg={color} onClick={toggleColorMode}>
            {colorMode === 'light' ?<SunIcon/> : <MoonIcon/> }
          </Button>
          <Button bg={color} className='desktop' >
            <img src={lg_ico} style={{'filter':colorMode === 'light' ? 'invert(1)' : 'invert(0)'}} className="logo_header" alt="language_logo"></img>
          </Button>
          <Button className ='mobile burger_button' bg={color} ref={btnRef} onClick={onOpen}>
            <HamburgerIcon/>
          </Button>
        </Flex>
      </nav>
      <Flex flexDirection="column">
        <QuemSou/>
        <QuemSou/>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
          <Flex maxWidth="100vw" direction='column'>
          <Button px='20px' bg={color}>About Me</Button>
          <Button px='20px' bg={color}>Skills</Button>
          <Button px='20px' bg={color}>Portifolio</Button>
          <Button px='20px' bg={color}>Education/Work</Button>
        </Flex>
          </DrawerBody>

          <DrawerFooter>
          <Flex maxWidth="100vw" direction='row'>
          <Button bg={color} onClick={toggleColorMode}>
            {colorMode === 'light' ?<SunIcon/> : <MoonIcon/> }
          </Button>
          <Button bg={color} >
            <img src={lg_ico} style={{'filter':colorMode === 'light' ? 'invert(1)' : 'invert(0)'}} className="logo_header" alt="language_logo"></img>
          </Button>
        </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}

export default App;


