import { useState } from 'react';
import './App.css'
import TelaGacha from './components/TelaGacha'
import TelaCriador from './components/TelaCriador'
import TelaInventario from './components/TelaInventario'


function App() {
  const [abaAtiva, setAbaAtiva] = useState (null)
  const [monocoins, setMonocoins] = useState (999)
  const [inventario, setInventario] = useState ([])

return(
  <div>
      <h1>Teste se a tela ta funcioanndo kkkkk</h1>
      <h2>{monocoins}</h2>
      <p>{inventario}</p>
      <nav>
        <button onClick={() => setAbaAtiva('gacha')}>Gacha</button>
        <button onClick={() => setAbaAtiva('criador')}>Criar</button>
        <button onClick={() => setAbaAtiva('inventario')}>inventário</button>
      </nav>

      <main>
        {abaAtiva === "gacha" && <TelaGacha saldo={monocoins} gastar={setMonocoins} slachars={inventario} colocarchar={setInventario}/>}
        {abaAtiva === "criador" && <TelaCriador saldo={monocoins} adicionar={setMonocoins}/>}
        {abaAtiva === "inventario" && <TelaInventario personagens={inventario}/>}
      </main>
  </div>
)
}

export default App;