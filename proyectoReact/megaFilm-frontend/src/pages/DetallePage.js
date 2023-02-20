import React from "react";
import '../styles/pages/DetallePage.css';
//IMAGENES
import director from '../imagenes/detalle/director.jpg';
import reparto from '../imagenes/detalle/reparto.jpg';
import reparto1 from '../imagenes/detalle/reparto1.jpg';
import reparto2 from '../imagenes/detalle/reparto2.jpg';
import reparto3 from '../imagenes/detalle/reparto3.jpg';
import reparto4 from '../imagenes/detalle/reparto4.jpg';
import reparto5 from '../imagenes/detalle/reparto5.jpg';
import reparto6 from '../imagenes/detalle/reparto6.jpg';

const DetallePage = () => {
    return (
        <div>
        <div className="caja-detalle">
            <div className="titulos-detalles">
            <h6 className="subtitulo-detalle"> Acción - Aventura - Ciencia ficción </h6>
            <h1 className="titulo-detalle">Black Adam</h1>
            </div>
                <div className="iconos-info-detalles">
                    <div className="iconos-detalles">
                    <i className="fa-regular fa-circle-play"></i><span className="trailer">Tráiler</span>
                    <i className="fa-regular fa-plus"></i><span className="favoritos">Favoritos</span>           
                    <i className="fa-solid fa-square-share-nodes compartir"></i><span className="compartir">Compartir</span>
                    </div>
                    <div className="iconos-detal">
                    <mark>IMDb</mark><span >6.9</span><span>2022</span><span>125min</span>
                    <mark className="uhd">UHD</mark><span>5.1</span><span>ATMOS</span><span>12</span>
                    </div>
                    <p className="info-detalles">
                    Casi 5000 años después de recibir los poderes omnipresentes de los dioses 
                    egipcios y acabar preso, Black Adam (Johnson) es liberado de su tumba 
                    terrenal y se dispone a dar forma al mundo moderno con su particular sentido 
                    de la justicia.
                    </p>
                </div>
                <hr />
                <div className="reparto-detalle">
                    <h4 className="reparto">Director y reparto</h4>
                    <div className="imagenes-detalle">
                        <div className="detalle-nombres">
                            <img src={director} alt="director" className="img-reparto" />
                            <p className="detalle-nombre-titulo">Jaume Collet-Serra</p><span id="director-reparto">Director</span>
                        </div>
                        <div className="img-detal">
                            <img src={reparto} alt="reparto" className="img-reparto" />
                            <p className="detalle-nombre-titulo">Dwayne Johnson</p>
                        </div> 
                        <div className="img-detal">
                            <img src={reparto1} alt="reparto1" className="img-reparto" />
                            <p className="detalle-nombre-titulo1">Aldis Hodge</p>
                        </div>
                        <div className="img-detal">
                            <img src={reparto2} alt="reparto2" className="img-reparto" />
                            <p className="detalle-nombre-titulo2">Pierce Brosnan</p>
                        </div>
                        <div className="img-detal">
                            <img src={reparto3} alt="reparto3" className="img-reparto" />
                            <p className="detalle-nombre-titulo2">Noah Centineo</p>
                        </div>
                        <div className="img-detal">
                            <img src={reparto4} alt="reparto4" className="img-reparto" />
                            <p className="detalle-nombre-titulo2">Sarah Shahi</p>
                        </div>
                        <div className="img-detal">
                            <img src={reparto5} alt="reparto5" className="img-reparto" />
                            <p className="detalle-nombre-titulo2">Marwan Kenzari</p>
                        </div>
                        <div className="img-detal">
                            <img src={reparto6} alt="reparto6" className="img-reparto" />
                            <p className="detalle-nombre-titulo">Marwan Quintessa</p>
                        </div>                         
                    </div>
                </div>
                <hr/>
            <div className="caja-detalle-detalles">
                <h4 className="detalles">Detalles</h4>
                <div className="detalle-detalles">
                    <div className="detalle-detalle">
                        <h5 className="detalle" id="idioma">Idioma de audio</h5>
                        <span className="span-detalles">Inglés, Español</span>
                    </div>
                    <div className="detalle-detalle">
                        <h5 className="detalle" id="audiencia">Audiencia</h5>
                        <span className="span-detalles1">No recomendada para menores de 12 años</span>
                    </div>
                    <div className="detalle-detalle">
                        <h5 className="detalle" id="puntuacion">Puntuación</h5>
                        <mark id="detalle-puntuacion">IMDb</mark><span>6.9/10</span>
                    </div>
                    </div> 
                    <div className="detalle-detalles">
                    <div className="detalle-detalle">
                        <h5 className="detalle" id="subtitulos">Subtítulos</h5>
                        <span className="span-detalles" id="idioma-subtitulo">Inglés, Español, Sin Subtítulos</span>
                    </div>
                    <div className="detalle-detalle">
                        <h5 className="detalle" id="calidad-video">Calidad de vídeo</h5>
                        <span className="span-detalles1" id="sh">SD, HD, UHD, HDR10, HDR10+</span>
                    </div>
                    <div className="detalle-detalle2">
                        <strong className="tmd">T M D B</strong><span>7.22/10</span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    )
};

export default DetallePage;