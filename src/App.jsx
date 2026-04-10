import './App.css'
import { useState } from 'react';
import ReportCard from './components/ReportCard'
import listaPersonagens from './dados/chars.json';

function App() {

  const [personagemSorteado, setPersonagemSorteado] = useState(null);

  function botaoGacha() {
    const numeroAleatorio = Math.floor(Math.random() * listaPersonagens.length);
    const personagem = listaPersonagens[numeroAleatorio];

    setPersonagemSorteado(personagem);
  }
  return (
    <div className="Report_card">
      <h1>Máquina de Gacha da Esperança</h1>
      <p> Aqui está o mais novo produto da monokuma interprises! O GACHARONPA (ou sera que dangagacha puhuhu)!</p>

      <section>
      <h2>PARABÉNS! Seu prêmio foi: </h2>
      <figure>
        {personagemSorteado && <ReportCard dados={personagemSorteado}/>}
        <figcaption>
          <p>Não há garantia... A única garantia é o despair HAHAHAH!</p>
        </figcaption>
      </figure>
      </section>


      <button onClick={botaoGacha}>PULL (100 Monocoins)</button>
    </div>
  )
}

export default App