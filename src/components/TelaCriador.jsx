import { useState } from 'react';

function TelaCriador(props) {

    function criarCard() {
        props.adicionar(props.saldo + 1000)
        alert("Upuhuhu! Card criado com sucesso! Tome 1000 monocoins!")
    }

    return(
        <div>
            <h1>TELA CRIADOR</h1>

            <input type="text" placeholder='Nome...' />
            <input type="text" placeholder='Ultimate Talent...' />

            <button onClick={criarCard}>Criar!</button>
        </div>
    )
}

export default TelaCriador;