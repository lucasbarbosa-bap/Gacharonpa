import { useState } from 'react';
import ReportCard from './ReportCard'

function TelaCriador(props) {

    const [nome, setNome] = useState("")
    const [altura, setAtura] = useState("")
    const [peso, setPeso] = useState("")
    const [busto, setBusto] = useState("")
    const [tipoSanguineo, setTiposanguineo] = useState("")
    const [Aniversario, setAniversario] = useState("")
    const [gostos, setGostos] = useState("")
    const [desgostos, setDesgostos] = useState("")
    const [nota, setNota] = useState("")

    const [cardGerado, setCardGerado] = useState(null)

    function criarCard() {
        props.adicionar(props.saldo + 1000)
        alert("Upuhuhu! Card criado com sucesso! Tome 1000 monocoins!")

        const personagemGerado = {
            "id": 99,
            "nome": nome,
            "tier": "S",
            "imagem": "",
            "altura": altura,
            "peso": peso,
            "busto": busto,
            "tipoSanguineo": tipoSanguineo,
            "gostos": [gostos],
            "naoGosta": [desgostos],
            "titulo": nota,
            "aniversario": Aniversario,
            "anime": "Custom",
            "jogo": "Custom"
        }

        setCardGerado(personagemGerado)
    }

    return(
        <div>
            <h1>TELA CRIADOR</h1>

            <input type="text" value={nome} placeholder='Nome...' onChange={(e) => setNome(e.target.value)}/>

            <input type="text" value={altura} placeholder='Altura...' onChange={(e) => setAtura(e.target.value)}/>

            <input type="text" value={peso} placeholder='peso...' onChange={(e) => setPeso(e.target.value)}/>

            <input type="text" value={busto} placeholder='Busto' onChange={(e) => setBusto(e.target.value)}/>

            <input type="text" value={tipoSanguineo} placeholder='Tipo sanguíneo...' onChange={(e) => setTiposanguineo(e.target.value)}/>

            <input type="text" value={Aniversario} placeholder='Aniversário...' onChange={(e) => setAniversario(e.target.value)}/>

            <input type="text" value={gostos} placeholder='Gostos...' onChange={(e) => setGostos(e.target.value)}/>

            <input type="text" value={desgostos} placeholder='Desgostos...' onChange={(e) => setDesgostos(e.target.value)} />

            <input type="text" value={nota} placeholder='Ultimate Talent...' onChange={(e) => setNota(e.target.value)} />
            
            
            <button onClick={criarCard}>Criar!</button>

            {cardGerado && <h2>Card Gerado com sucesso!</h2>}
            {cardGerado && <ReportCard dados={cardGerado}/>}
        </div>
    )
}

export default TelaCriador;