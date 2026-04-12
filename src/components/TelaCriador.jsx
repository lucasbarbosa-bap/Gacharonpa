import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
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
    const [img, setImg] = useState(null)

    const [cardGerado, setCardGerado] = useState(null)

    const cardRef = useRef(null)
    const imgRef = useRef(null) /*Para zerar a droga do label do input file*/

    function criarCard() {
        props.adicionar(props.saldo + 1000)
        alert("Upuhuhu! Card criado com sucesso! Tome 1000 monocoins!")

        const personagemGerado = {
            "id": 99,
            "nome": nome,
            "tier": "S",
            "imagem": img,
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

        /* LIMPAR OS CAMPOS QUE SOFRIMENTO ESCREVER TUDO DNV 😣*/
        setNome("")
        setAtura("")
        setPeso("")
        setBusto("")
        setTiposanguineo("")
        setAniversario("")
        setGostos("")
        setDesgostos("")
        setNota("")
        setImg(null)

        if(imgRef.current) {imgRef.current.value = ""}
    }

    function baixarCard() {

        if(!cardRef.current) {return;}
        
        toPng(cardRef.current).then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'card-custom.png'
            link.href = dataUrl
            link.click()
        }) 
    }



    return( /* ARRUMAR ESSES CAMPOS DNV, ADICIONAR UNS TEXTOS DO LADO E TALS*/
        <div>
            <h1>TELA CRIADOR</h1> 

            <label>Name: <input type="text" value={nome} placeholder='Nome...' onChange={(e) => setNome(e.target.value)}/></label>

            <label>Height: <input type="text" value={altura} placeholder='Altura...' onChange={(e) => setAtura(e.target.value)}/></label>

            <label>Weight: <input type="text" value={peso} placeholder='peso...' onChange={(e) => setPeso(e.target.value)}/></label>

            <label>Chest: <input type="text" value={busto} placeholder='Busto' onChange={(e) => setBusto(e.target.value)}/></label>

            <label>Blood Type: <input type="text" value={tipoSanguineo} placeholder='Tipo sanguíneo...' onChange={(e) => setTiposanguineo(e.target.value)}/></label>

            <label>Date of Birth: <input type="text" value={Aniversario} placeholder='Aniversário...' onChange={(e) => setAniversario(e.target.value)}/></label>

            <label>Likes: <input type="text" value={gostos} placeholder='Gostos...' onChange={(e) => setGostos(e.target.value)}/></label>

            <label>Dislikes: <input type="text" value={desgostos} placeholder='Desgostos...' onChange={(e) => setDesgostos(e.target.value)} /></label>

            <label>Special Notes: <input type="text" value={nota} placeholder='Ultimate Talent...' onChange={(e) => setNota(e.target.value)} /></label>

            <label>Image: <input type="file" ref={imgRef} onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} /> </label>
            
            <button onClick={criarCard}>Criar!</button>

            {cardGerado && (
                <>
                    <h2>Card Gerado com sucesso!</h2>
                    <section ref={cardRef}><ReportCard dados={cardGerado}/></section>
                    <button onClick={baixarCard}>Baixar Report Card</button>
                </>
            )}
        </div>
    )
}

export default TelaCriador;