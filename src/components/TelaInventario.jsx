function TelaInventario(props) {
    return(
        <div>
            <h1>TELA INVENTARIO</h1>
            <p>{props.personagens.join(', ')}</p>
        </div>
    )
}

export default TelaInventario;