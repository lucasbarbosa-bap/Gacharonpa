import { useState } from "react";
import listaPersonagens from '../dados/chars.json';

function ReportCard() {

    return(
    <section>
        <div class="Report_card">
    <header>
        <h1>Meu nome</h1>
        <nav>
            <ul>
                <li><a href="index.html" class="ativo">Home</a></li>
                <li><a href="pages/galeria.html">Galeria de artes fofas</a></li>
                <li><a href="pages/animes.html">Meus animes</a></li>
                <li><a href="pages/jogos.html">Meus jogos</a></li>
            </ul>
        </nav>
    </header>

    <div className="minhas_contas">
    <h2>STEAM</h2><a href="">STEAM</a>
    <h2>Xbox</h2><a href="">XBOX</a>
    <h2>MyAnimeList</h2><a href="">MyAnimeList</a>
    <h2>Discord</h2><a href="">DISCORD?</a>
    </div>

    <div>
    <h2>Breve resumo de mim</h2>
    <p>ILLYA FAN, NEKOPARA LOVER, PRONOUNS: FATE/STAY NIGHT</p>

    <div className="gosto">
    <h2>gosto</h2>
    <ul>
        <li>exemplo 1, exemplo 2, exemplo 3</li>
    </ul>
    </div>

    <div className="não_gosto">
    <h2>não gosto</h2>
    <ul>
        <li>exemplo 1, exemplo 2, exemplo 3</li>
    </ul>
    </div>

    <div className="SLA">
    <h2>aniversario</h2>
    <p>04/04</p>

    <h2>anime favorito</h2>
    <p>TATE NO YUSHA</p>

    <h2>jogo favorito</h2>
    <p>MINEIRINHO ULTRA ADVENTURES</p>
    </div>

    <figure>
        <img src="src/assets/download.jpg" alt="" />
    </figure>
    </div>

    </div>

    </section>)
}

export default ReportCard;