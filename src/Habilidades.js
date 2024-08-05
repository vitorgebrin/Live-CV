import { createApi } from 'unsplash-js';
import React from 'react'
import textos from "./Textos.json"

export default function Habilidades(props) {
  var idioma =props.idioma
  let id_ativo = React.useRef()
  React.useEffect(() => { id_ativo.current = 0},[])
  const [fotos,setFotos] = React.useState(0)
  const[rnd,setRnd] = React.useState([Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)])
  const [palavra,setPalavra] = React.useState('cat')
  const unsplash = createApi({
    accessKey: 'Gu8dfEXUDsSxJIcI9dn0tcAtfbIZAI4nrtjnh_3jVzo',
    //fetch: nodeFetch,
  });
  React.useEffect(() => {
  unsplash.search.getPhotos({
    query: palavra,
    page: 1,
    perPage: 10,
  }).then(result => {
    const dados = result.response;
    setFotos(dados.results);
  });
  }
  )
  function procurar(event) {
    setPalavra(document.querySelector('#inputFoto').value)
    event.preventDefault();

  }
  function mover(evento){
    var width = window.innerWidth > 767 ? 600 : 351
    var i = evento.target.className === "arrow left" ? -1 : 1
    var slide = document.querySelectorAll("#slideshow li")
    id_ativo.current = (id_ativo.current + i) < 0 ? 0 : (id_ativo.current + i)>= slide.length ? (slide.length-1) : (id_ativo.current +i)
    document.querySelector("#slideshow").style.transform = "translateX( "+(id_ativo.current*-width)+"px)"
  }
    return (
        <div id="divHabilidades">
          <div id="FormsSlider">
            <h2>Image slider generator</h2>
            <p>{textos[idioma]["Experimentos"]["texto gerador"]}</p>
            <form>
              <input type="text" placeholder="cat" id='inputFoto'
              />
            <button onClick={procurar}>{textos[idioma]["Experimentos"]["procurar"]}</button>
            </form>
          </div>
          <div id = "SlideDiv">

            {id_ativo.current !== 0 && <div className='arrow left' onClick={mover}>&#8249;</div>}
            <ul id="slideshow">
              <li>{fotos!==0 && <img src={fotos[rnd[0]].urls.raw +"&fit=crop&crop=faces&w=512&h=512"} alt="fotos" id="foto_1"></img>}</li>
              <li>{fotos!==0 && <img src={fotos[rnd[1]].urls.raw +"&fit=crop&crop=faces&w=512&h=512"} alt="fotos" id="foto_2"></img>}</li>
              <li>{fotos!==0 && <img src={fotos[rnd[2]].urls.raw +"&fit=crop&crop=faces&w=512&h=512"} alt="fotos" id="foto_3"></img>}</li>
              <li>{fotos!==0 && <img src={fotos[rnd[3]].urls.raw +"&fit=crop&crop=faces&w=512&h=512"} alt="fotos" id="foto_4"></img>}</li>
            </ul>
            {id_ativo.current !== 3 && <div className='arrow right' onClick={mover}>&#8250;</div>}
          </div>
 <svg
  className="waves"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  shapeRendering="auto"
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    />
  </defs>
  <g className="parallax">
    <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(223, 18, 134,0.1)" />
    <use xlinkHref="#gentle-wave" x={48} y={2} fill="rgba(223, 18, 134,0.2)" />
    <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(223, 18, 134,0.4)" />
    <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(223, 18, 134,0.6)" />
    <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(223, 18, 134,0.8)" />
  </g>
</svg>
  
      </div>
  
    )
  }