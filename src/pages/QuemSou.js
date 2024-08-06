import foto from '../images/foto.png'
import textos from "../json/Textos.json"

export default function QuemSou(props) {

  var idioma =props.idioma
    return (
      <div id="divInicial">
      <img src={foto} id="profilePic" alt='foto de perfil'/>
      <div id="profileIntro" className="textoMedio">
        <i> Vitor Kalil</i><br />
        <i> Front-end Webdesigner</i>
      </div>
      <p className="textoMedio profileText text_1">
        {textos[idioma]["texto-inicial"]["texto_1"]}
      </p>
      <p className="textoMedio profileText text_2">
        {textos[idioma]["texto-inicial"]["texto_2"]}
      </p>
    </div>
    )
  }