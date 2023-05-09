import React from "react";
import './style.scss'
import messi from '../../asssets/messi.jpeg'
import messi1 from '../../asssets/messi1.jpeg'
import messi2 from '../../asssets/messi2.jpeg'
import messi3 from '../../asssets/messi3.jpeg'
import messi4 from '../../asssets/messi4.jpg'
export default function News(){
    return (
        <div class="main-container">
            <h1>
                NOTICAS
            </h1>
    <div className="news-container">
    <div class="box">
      <div class="imagen zoom">
        <img src={messi} alt="Perro" class="imagen" id="messi-new"data-final-position="0"></img>
      </div>
      <div className="box-text">
        <h1>
          LEO GANA SU SEGUNDO PREMIO LAUREUS
        </h1>
        <p>
        Leo recibió este lunes el premio Laureus World Sportsman of the Year, galardón que le reconoce como el mejor deportista […]
        </p>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-item white-bg flex-container card ">
        <div class="content">
          <h2>EL PSG RECIBE AL LORIENT EN LA JORNADA 33</h2>
          <p>El Paris Saint-Germain recibe este domingo al Lorient en la trigésimo tercera jornada de la Ligue 1. El equipo parisino es líder indiscutible de la liga francesa con 75 puntos</p>
        </div>
        <div class="image-container">

          <img src={messi1} alt="Descripción de la imagen"></img>
       
        </div>
      </div>
    
      <div class="grid-item white-bg flex-container image-right card">
        <div class="content">
          <h2>EL PSG VENCE AL ANGERS Y MANTIENE LA DISTANCIA EN EL LIDERATO</h2>
          <p>El Paris Saint-Germain se llevó los tres puntos ante el Angers tras vencer 1-2 y sigue al frente de la clasificación de la Ligue 1 con 75 puntos.</p>
        </div>
        <div class="image-container">
          <img src={messi2} alt="Descripción de la imagen"></img>
        </div>
      </div>
    
      <div class="grid-item white-bg flex-container image-right card">
        <div class="content">
          <h2 class="right-align">
            EL PSG VIAJA A ANGERS EN LA 32ª JORNADA</h2>

          <p class="right-align">El Paris Saint-Germain juega este viernes ante el Angers, en el partido correspondiente a la trigésimo segunda jornada de la […]</p>
        </div>
        <div class="image-container">
          <img src={messi3} alt="Descripción de la imagen"></img>
        </div>
      </div>
    
      <div class="grid-item dark-blue-bg flex-container card ">
        <div class="content">
          <h3>LEO ANOTA EN EL TRIUNFO QUE DEJA AL PSG MÁS LÍDER</h3>
          <p>El Paris Saint-Germain aumenta su ventaja en la clasificación de la Ligue 1 tras vencer 3-1 al Lens en la […]</p>
        </div>
        <div class="image-container">
          <img src={messi4} alt="Descripción de la imagen"></img>
        </div>
      </div>
    </div>
    </div>
  <script src="script.js"></script>


        </div>
    )
}