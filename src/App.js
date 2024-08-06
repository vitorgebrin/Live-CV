import React from 'react';
import QuemSou from './pages/QuemSou'
import Habilidades from './pages/Habilidades'
import Experiencias from './pages/Experiencias'
import lg_ico from './images/language_icon.png'
import textos from "./json/Textos.json"
import './App.css'
import './index.css'

function App() {
  const [darkOn,setDarkOn] = React.useState(false)
  const [lang,setLang] = React.useState('en')
  var paginas = {'home':<QuemSou idioma={lang} />,'habilidades':<Habilidades idioma={lang} />,'Experiencias':<Experiencias idioma={lang} darkmode = {darkOn}/>} //defining the pages as an object, that relates the id of the button to the JX object
  const [pagina,setPagina]=React.useState('home') // starting the state for wich page should be shown
  function trocarPagina(evento){
    setPagina(evento.target.attributes.nomepagina.value)
  }
function darkMode(){
setDarkOn(prevValue => {return !prevValue})
}
function activateMenu(){
  var menuMobile =document.querySelector('#mobile_menu').classList
  var iconeMenuMobile =document.querySelector('.mobile_menu_logo').classList
if(menuMobile==""){
  menuMobile.add('active_menu')
  iconeMenuMobile.add('active_menu')
}else{
  menuMobile.remove('active_menu')
  iconeMenuMobile.remove('active_menu')
}
}
  function trocarLang(evento){
    setLang(evento.target.id)
  }
  function clickMobileMenu(evento){
    trocarPagina(evento)
    activateMenu()
  }
  var paginaAtual = paginas[pagina]

  return (
    <div className={darkOn?"App Dark":"App White"}>
      <nav className="navbar">
        <div id="darkModeDiv">
          <input onChange ={darkMode} id ="darkmode_button" type ="checkbox" checked={darkOn} />
          <label htmlFor="darkmode_button"></label>
        </div>
        <ul className="lista" id="desktop_menu">
          <li onClick ={trocarPagina} nomepagina="home">{textos[lang]["Quem Sou"]}</li>
          <li onClick ={trocarPagina} nomepagina="habilidades">{textos[lang]["Experimentacao"]}</li>
          <li onClick ={trocarPagina} nomepagina="Experiencias">{textos[lang]["Historico"]}</li>
        </ul>
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
          <li onClick ={clickMobileMenu} nomepagina="home">{textos[lang]["Quem Sou"]}</li>
          <li onClick ={clickMobileMenu} nomepagina="habilidades">{textos[lang]["Experimentacao"]}</li>
          <li onClick ={clickMobileMenu} nomepagina="Experiencias">{textos[lang]["Historico"]}</li>
        </ul>
        </div>
      
    </nav>
      {paginaAtual}
    </div>
  );
}

export default App;
