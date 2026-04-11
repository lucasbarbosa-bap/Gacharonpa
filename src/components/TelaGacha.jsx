import { useState } from 'react';
import ReportCard from './ReportCard'
import listaPersonagens from '../dados/chars.json';


function TelaGacha(props) {

    const [personagemSorteado, setPersonagemSorteado] = useState(null);
    const [rodandoGacha, setrodandoGacha] = useState(false)

    function botaoGacha() {

        if (props.saldo < 100) {
        alert("UPUPUPU! Acabou o seu dinheiro! Vá trabalhar (Criar Cards)!"); /*Dps fazer um telinha de erro com o monokuma rindo seria legal...*/
        return;}

        props.gastar(props.saldo - 100) /*Tirar a merda dos monocoins, espero que afr funcione*/

        const numeroAleatorio = Math.floor(Math.random() * listaPersonagens.length);
        const personagem = listaPersonagens[numeroAleatorio];

        props.colocarchar([...props.slachars, personagem['nome']])
        

        setPersonagemSorteado(personagem);
        setrodandoGacha(true);

        setTimeout(() => {
        setrodandoGacha(false);
        }, 2000);
    }
    return (
        <div className="home">
        <h1>Máquina de Gacha da Esperança</h1>
        <p> Aqui está o mais novo produto da monokuma interprises! O GACHARONPA (ou sera que dangagacha puhuhu)!</p>

        <section>
        <h2>PARABÉNS! Seu prêmio foi: </h2>
        <figure className="Card">
            {rodandoGacha && (<figure className={`monokuma tier-${personagemSorteado.tier}`}><img src="/img/ui/monokuma-dance.gif" alt="Sorteando puhuhu..." /></figure>)}
            {!rodandoGacha && personagemSorteado && <ReportCard dados={personagemSorteado}/>}
            <figcaption>
            <p>Não há garantia... A única garantia é o despair HAHAHAH!</p>
            </figcaption>
        </figure>
        </section>


        <button onClick={botaoGacha}>PULL (100 Monocoins)</button>
        </div>
    )
}
  export default TelaGacha;