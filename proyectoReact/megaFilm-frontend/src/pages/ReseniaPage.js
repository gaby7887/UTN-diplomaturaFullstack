import React from "react";
import '../styles/pages/ReseniaPage.css';

//IMAGENES
import banner from '../imagenes/resenia/directores/banner-directores.jpg';
import tapaAvatar from '../imagenes/resenia/avatar.jpg';
import tapaElGatoConBotas from '../imagenes/resenia/elGatoConBotas.jpg';

const ReseniaPage = () => {
    return (
        <>
        <section className="banner-directores">
            <img src={banner} className="directores" alt="foto"/>
        </section>
        {/* INFO AVATAR */}
        <section className="caja-peliculas">
            <h2 className="tituloCriticas">Críticas de cine</h2>
            <div className="imagen-criticas">
                <div className="imagen-critica">
                    <img src={tapaAvatar} className="imagenTapa" alt=""/>
                    <div className="info-critica">
                    <h4>Avatar <span> El sentido del agua</span></h4>
                    <span className="spanParrafo">Sinopsis</span>
                    <p className="parrafo-critica">Más de una década después 
                        de los acontecimientos de 'Avatar', los Na'vi Jake Sully, Neytiri y 
                        sus hijos viven en paz en los bosques de Pandora hasta que regresan 
                        los hombres del cielo. Entonces comienzan los problemas que persiguen 
                        sin descanso a la familia Sully, que decide hacer un gran sacrificio 
                        para mantener a su pueblo a salvo y seguir ellos con vida. </p>
                    <button className="boton-critica" id="leerMas" type="button">Leer más</button>
                </div>
            </div>  
            </div>
            {/* FIN INFO AVATAR */}
            <div className="imagenEstrellas">
                <i className="fa-regular fa-star" id="iUno" ></i>
                <i className="fa-regular fa-star" id="iDos" ></i>
                <i className="fa-regular fa-star" id="iTres" ></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            {/* INFO EL GATO CON BOTAS */}
            <div className="imagen-criticas">
                <div className="imagen-critica">
                    <img src={tapaElGatoConBotas} className="imagenTapa" alt=""/>
                    <div className="info-critica">
                        <h4>Gato con botas <span> El Último deseo</span></h4>
                        <span className="spanParrafo">Sinopsis</span>
                        <p className="parrafo-critica">Secuela de 'El gato con botas' (2011). 
                            El Gato con Botas descubre que su pasión por la aventura le ha 
                            pasado factura: ha consumido ocho de sus nueve vidas, por ello 
                            emprende un viaje épico para encontrar el mítico Último Deseo y 
                            restaurar sus nueve vidas...</p>
                        <button className="boton-critica" id="leerMas" type="button">Leer más</button>
                    </div>
                </div>  
            </div>
            {/* FIN INFO EL GATO CON BOTAS */}
            <div className="imagenEstrellas">
                <i className="fa-regular fa-star" id="uno" ></i>
                <i className="fa-regular fa-star" id="dos" ></i>
                <i className="fa-regular fa-star" id="tres" ></i>
                <i className="fa-regular fa-star" id="cuatro" ></i>
                <i className="fa-regular fa-star"></i>
            </div>
        </section>
        </>
    );
};

export default ReseniaPage;