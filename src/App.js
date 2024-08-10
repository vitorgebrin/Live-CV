import React from 'react';
import QuemSou from './pages/QuemSou'
import Habilidades from './pages/Habilidades'
import Experiencias from './pages/Experiencias'
import lg_ico from './images/language_icon.png'
import myIcon from './images/letter-v.png'
import textos from "./json/Textos.json"
import './App.css'
import './index.css'

import { Container, Flex, Button, useColorModeValue, useColorMode, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

function App() {
  const [idioma, setIdioma] = React.useState("en")

  const color = useColorModeValue('white', 'gray.800')
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Container maxWidth="100vw" px='0px'>
      <nav className="navbar">
        <Flex maxWidth="100vw" direction='row' className='desktop desktop_menu'>
          <img src={myIcon} className="logo" alt="logo" />
          <Button px='20px' bg={color}>About Me</Button>
          <Button px='20px' bg={color}>Skills</Button>
          <Button px='20px' bg={color}>Portifolio</Button>
          <Button px='20px' bg={color}>Education/Work</Button>
        </Flex>
        <img src={myIcon} className="logo mobile" alt="logo" />
        <Flex maxWidth="100vw" direction='row' textAlign='end' >
          <Button className='desktop' bg={color} onClick={toggleColorMode}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Menu>
            <MenuButton
              bg={color} className='desktop'
              px={4}
              py={2}
              transition='all 0.2s'
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
            >
              <Flex direction="row">
                <img src={lg_ico} style={{ 'filter': colorMode === 'light' ? 'invert(1)' : 'invert(0)' }} className="logo_header" alt="language_logo"></img>
                <span style={{ marginTop: "-2px", textTransform: "uppercase" }}>{idioma}</span>
              </Flex>

            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setIdioma("en")}>English</MenuItem>
              <MenuItem onClick={() => setIdioma("pt")}>Português</MenuItem>
              <MenuItem onClick={() => setIdioma("de")}>Deutsch</MenuItem>
              <MenuItem onClick={() => setIdioma("it")}>Italiano</MenuItem>
            </MenuList>
          </Menu>
          <Button className='mobile burger_button' bg={color} ref={btnRef} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </Flex>
      </nav>
      <Flex flexDirection="column">
        <QuemSou />
        <Habilidades idioma={"en"} />
        <Experiencias idioma={"en"} />
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
                {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
              </Button>
              <Menu>
                <MenuButton
                  bg={color} className='mobile'
                  px={4}
                  py={2}
                  transition='all 0.2s'
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <Flex direction="row">
                    <img src={lg_ico} style={{ 'filter': colorMode === 'light' ? 'invert(1)' : 'invert(0)' }} className="logo_header" alt="language_logo"></img>
                    <span style={{ marginTop: "-2px", textTransform: "uppercase" }}>{idioma}</span>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setIdioma("en")}>English</MenuItem>
                  <MenuItem onClick={() => setIdioma("pt")}>Português</MenuItem>
                  <MenuItem onClick={() => setIdioma("de")}>Deutsch</MenuItem>
                  <MenuItem onClick={() => setIdioma("it")}>Italiano</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}

export default App;


