import React from 'react';

import '../../styles/AboutPage.scss';

const AboutPage = () => {
    return (
        <div className='aboutme-section'>
            <section>
                <h1>Soy realizador audivisual</h1>
                <p>Hola, soy JuanB. Mis destrezas en realización audiovisual están soportadas en una experiencia de muchos años.<br/><br/>
                    Para mi creación audiovisual es fundamental la observación, a través de ella, voy indagando sobre las relaciones entre los objetos, las cosas, los procesos, las historias, las situaciones, la misma vida; con las personas, sus cuestionamientos, sus temores, sus alegrías, en otras palabras, la confrontación vida y vida, vidas vividas, o muertes, también es una forma de vida en pasado.<br/><br/>
                    La búsqueda es indispensable como herramienta para encontrar algo que me impulsa a expresar sensaciones, ideas y emociones.<br/><br/>
                    Las imágenes y sonidos expresados desde mi interior, son registrados en soporte análogo o digital, tanto imagen fija como en movimiento; es la captura de instantes con los que juego a través del espacio y del tiempo, intentando encontrar una respuesta que me ayude a comprender este entramado de experiencias que al fin y al cabo fluyen en instantes eternamente.<br/><br/>
                    Si algo encuentra un espectador que le haga detenerse a mirar mi trabajo, entonces, he logrado mi cometido porque mi expresión rebota continuamente como el eco en la cueva.
                </p>
            </section>
            <aside>
            <img src='https://juanb.pro/img/juanb.jpg' alt='realizador audiovisual y fotógrafo, en medio del campo con una montaña en el fondo, rodeado de equipos de grabación, mirando hacia la distancia, inspirado por la naturaleza y capturando momentos únicos con su cámara.'/>
                
            </aside>
        </div>
    );
}

export default AboutPage;
