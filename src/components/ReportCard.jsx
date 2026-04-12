function ReportCard(props) {

    return(
    <section>
        <div className={"Report_card animacao-surgir"}>
    <header>
        <h2>{props.dados.nome}</h2>
        <figure>
            <img src="https://media.tenor.com/-gTn_5f10uUAAAAi/teto-kasane-teto.gif" alt="Hope fragments" />
        </figure>
        <nav>
            <ul>
                <li><a href="index.html" className="ativo">1</a></li>
                <li><a href="pages/galeria.html">2</a></li>
                <li><a href="pages/animes.html">3</a></li>
                <li><a href="pages/jogos.html">4</a></li>
                <li><a href="index.html">5</a></li>
                <li><a href="pages/galeria.html">6</a></li>
                <li><figure><img src="https://media.tenor.com/-gTn_5f10uUAAAAi/teto-kasane-teto.gif" alt="Hope fragments funfacts" /></figure></li>
            </ul>
        </nav>
    </header>

    <div className="status_fisicos"> 
    <h2>Height</h2><a>{props.dados.altura}</a>
    <h2>Chest</h2><a>{props.dados.busto}</a>
    <h2>Weight</h2><a>{props.dados.peso}</a>
    <h2>Blood Type</h2><a>{props.dados.tipoSanguineo}</a>
    </div>

    <div className="gosto">
    <h2>Date of birth</h2>
    <p>{props.dados.aniversario}</p>

    <h2>Likes</h2>
    <ul>
        <li>{props.dados.gostos.join(', ')}</li>
    </ul>
    </div>

    <div className="não_gosto">
    <h2>Dislikes</h2>
    <ul>
        <li>{props.dados.naoGosta.join(', ')}</li>
    </ul>
    </div>

    <div className="SLA">
    <h2>Special Notes</h2>
    <p>{props.dados.titulo}</p>
    </div>

    <figure>
        <img src={props.dados.imagem} alt={ "Foto" + props.dados.nome} />
    </figure>
    </div>
    
    </section>)
}

export default ReportCard;