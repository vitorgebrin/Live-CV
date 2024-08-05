import React from "react"
import cards from "./Cards.json"
import ChemicalE from "./ChemicalE.jpg"
import flag from "./flag.jpg"
import html from "./html-css-javascript.jpg"
import peg from "./peg.jpg"
import hashtagb from "./hashtag_logo_b.png"
import hashtagw from "./hashtag_logo_w.png"


export default function Experiencias(props) {
    var imagens = [flag,ChemicalE,peg,html,props.darkmode === true ? hashtagw:hashtagb]
    var idioma =props.idioma
    const [card,setCard] = React.useState(cards[idioma][0])
    const [porcentagem,setPorcentagem] = React.useState(8)
    React.useEffect(() =>{
        document.querySelectorAll('.iconeEsferico')[0].classList.add('selecionado')
    },[] )

    var novaPorcentagem
    function selecionarCard(evento){
        setCard(cards[idioma][evento.target.id])
        novaPorcentagem = 8+76*((evento.target.id)/(cards[idioma].length-1))
        for(let i = 0;i<cards[idioma].length;i++){
            i<=(evento.target.id) ? document.querySelectorAll('.iconeEsferico')[i].classList.add('selecionado'):document.querySelectorAll('.iconeEsferico')[i].classList.remove('selecionado')
        }
        setPorcentagem(novaPorcentagem)
    }

    function dropdown(e){
        setCard(cards[idioma][e.target.value])
    }


    var comprimento = porcentagem + "%"
    var iconesCards = cards[idioma].map (card => <div className="icone" key={card.id} ><div className="iconeEsferico" id={card.id} onClick={selecionarCard}></div><p>{card.ano}</p></div>)
    var optionCards = cards[idioma].map (card => <option className="optionHistorico" value={card.id} key={card.id} >{card.ano}</option>)
    var elementoCard = (
        <div className="cardTempo">
        <div className="cardContent">
            <h2>{card.titulo}</h2>
            <em> {card.subtitulo}</em>
            <div className="flexCard" style = {{"flexDirection":card.orderCard}}>
                <div className="CardImage"><img src={imagens[card.id]} alt={"slide " + card.id} ></img></div>
                <p>{card.texto}</p>
            </div>
        </div>
    </div>
    )

    return (
        <div id = "divExperiencias">
            <div id="linhaTempo" style = {{width:comprimento}}></div>
            {window.innerWidth <767 && 
                <div id="formsAnos">
                    <form>
                        <legend>Ano</legend>
                    <select onChange={dropdown}>
                        {optionCards}
                    </select>
                    </form>
                </div>}
            <div className ="listaIcones">
                {iconesCards} 
            </div>
            {elementoCard}
        </div>
    )
  }