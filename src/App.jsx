import { useState } from 'react';
import './App.css'
import TelaGacha from './components/TelaGacha'
import TelaCriador from './components/TelaCriador'
import TelaInventario from './components/TelaInventario'


function App() {
  const [abaAtiva, setAbaAtiva] = useState (null)
return(
  <div>
      <h1>Teste se a tela ta funcioanndo kkkkk</h1>
      <nav>
        <button onClick={() => setAbaAtiva('gacha')}>Gacha</button>
        <button onClick={() => setAbaAtiva('criador')}>Criar</button>
        <button onClick={() => setAbaAtiva('inventario')}>inventário</button>
      </nav>

      <main>
        {abaAtiva === "gacha" && <TelaGacha/>}
        {abaAtiva === "criador" && <TelaCriador/>}
        {abaAtiva === "inventario" && <TelaInventario/>}
      </main>
  </div>
)
}

export default App;