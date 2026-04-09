import { useState } from "react";
import listaPersonagens from '../dados/chars.json';

function ReportCard() {

    return(
    <section>
        <div className="Report_card">
    <header>
        <h2>Meu nome</h2>
        <figure>
            <img src="" alt="Hope fragments" />
        </figure>
        <nav>
            <ul>
                <li><a href="index.html" className="ativo">1</a></li>
                <li><a href="pages/galeria.html">2</a></li>
                <li><a href="pages/animes.html">3</a></li>
                <li><a href="pages/jogos.html">4</a></li>
                <li><a href="index.html" class="ativo">5</a></li>
                <li><a href="pages/galeria.html">6</a></li>
                <li><figure><img src="" alt="Hope fragments funfacts" /></figure></li>
            </ul>
        </nav>
    </header>

    <div className="status_fisicos"> 
    <h2>Height</h2><a>5'4"</a>
    <h2>Chest</h2><a>35 in</a>
    <h2>Weight</h2><a>125 lbs</a>
    <h2>Blood Type</h2><a>A</a>
    </div>

    <div className="gosto">
    <h2>Date of birth</h2>
    <p>May 12th</p>

    <h2>Likes</h2>
    <ul>
        <li>Bathrooms smells, alcohol</li>
    </ul>
    </div>

    <div className="não_gosto">
    <h2>Dislikes</h2>
    <ul>
        <li>Oversized Things</li>
    </ul>
    </div>

    <div className="SLA">
    <h2>Special Notes</h2>
    <p>Ultimate Nurse</p>
    </div>

    <figure>
        <img src="src/assets/download.jpg" alt="" />
    </figure>
    </div>
    
    </section>)
}

export default ReportCard;