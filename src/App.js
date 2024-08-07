import React from 'react';
import QuemSou from './pages/QuemSou'
import Habilidades from './pages/Habilidades'
import Experiencias from './pages/Experiencias'
import lg_ico from './images/language_icon.png'
import myIcon from './images/letter-v.png'
import textos from "./json/Textos.json"
import './App.css'
import './index.css'

import { Container, Flex,Button,useColorModeValue,useColorMode } from '@chakra-ui/react';
import { NotAllowedIcon,SunIcon,MoonIcon } from '@chakra-ui/icons'

function App() {
  const [darkOn, setDarkOn] = React.useState(false)
  const [lang, setLang] = React.useState('en')
  var paginas = { 'home': <QuemSou idioma={lang} />, 'habilidades': <Habilidades idioma={lang} />, 'Experiencias': <Experiencias idioma={lang} darkmode={darkOn} /> } //defining the pages as an object, that relates the id of the button to the JX object
  const [pagina, setPagina] = React.useState('home') // starting the state for wich page should be shown
  function trocarPagina(evento) {
    setPagina(evento.target.attributes.nomepagina.value)
  }
  function darkMode() {
    setDarkOn(prevValue => { return !prevValue })
  }
  function activateMenu() {
    var menuMobile = document.querySelector('#mobile_menu').classList
    var iconeMenuMobile = document.querySelector('.mobile_menu_logo').classList
    if (menuMobile == "") {
      menuMobile.add('active_menu')
      iconeMenuMobile.add('active_menu')
    } else {
      menuMobile.remove('active_menu')
      iconeMenuMobile.remove('active_menu')
    }
  }
  function trocarLang(evento) {
    setLang(evento.target.id)
  }
  function clickMobileMenu(evento) {
    trocarPagina(evento)
    activateMenu()
  }
  var paginaAtual = paginas[pagina]

  /*   return (
      <div className={darkOn ? "App Dark" : "App White"}>
        <nav className="navbar">
          <ul className="lista" id="desktop_menu">
            <li onClick={trocarPagina} nomepagina="home">{textos[lang]["Quem Sou"]}</li>
            <li onClick={trocarPagina} nomepagina="habilidades">{textos[lang]["Experimentacao"]}</li>
            <li onClick={trocarPagina} nomepagina="Experiencias">{textos[lang]["Historico"]}</li>
          </ul>
          <div id="darkModeDiv">
            <input onChange={darkMode} id="darkmode_button" type="checkbox" checked={darkOn} />
            <label htmlFor="darkmode_button"></label>
          </div>
          <div id="langDiv"> <img src={lg_ico} className="logo_header" alt="language_logo"></img>
            <ul id="language_menu">
              <li id="pt" onClick={trocarLang}>Português</li>
              <li id="en" onClick={trocarLang}>English</li>
              <li id="it" onClick={trocarLang}>Italiano</li>
              <li id="de" onClick={trocarLang}>Deutsch</li>
            </ul>
          </div>
          <div onClick={activateMenu} className="logo_header mobile_menu_logo"></div>
          <div id="mobile_menu">
            <ul>
              <li onClick={clickMobileMenu} nomepagina="home">{textos[lang]["Quem Sou"]}</li>
              <li onClick={clickMobileMenu} nomepagina="habilidades">{textos[lang]["Experimentacao"]}</li>
              <li onClick={clickMobileMenu} nomepagina="Experiencias">{textos[lang]["Historico"]}</li>
            </ul>
          </div>
  
        </nav>
        {paginaAtual}
      </div>
    ); */

    const color = useColorModeValue('white', 'gray.800')
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxWidth="100vw" px='0px' position='fixed'>
      <nav className="navbar">
        <Flex maxWidth="100vw" direction='row'>
        <img src={myIcon} className="logo" alt="logo"/>
        <Button px='20px' bg={color}>AAAA</Button>
        <Button px='20px' bg={color}>BBBB</Button>
        <Button px='20px' bg={color}>CCCC</Button>
        </Flex>
        <Container maxWidth="100vw" textAlign='end'>
          <Button onClick={toggleColorMode}>{colorMode === 'light' ?<SunIcon mx='5px'/> : <MoonIcon mx='5px'/> }</Button>
          <Button mx='5px'><img src={lg_ico} style={{'filter':colorMode === 'light' ? 'invert(1)' : 'invert(0)'}} className="logo_header" alt="language_logo"></img></Button>
        </Container>
      </nav>
      <Flex h='200vh'>

      </Flex>
    </Container>
  )
}

export default App;


