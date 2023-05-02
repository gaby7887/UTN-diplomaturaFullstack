import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, body, imagen} = props;

    return (
        <>
        <section className="caja-peliculas">
            <div className="imagen-criticas">
                <div className="imagen-critica">
                    <img src={imagen} alt=''className="imagenTapa"/>
                    <div className="info-critica">
                        <h3 id='titulo-critica'>{title}</h3>
                        <h5 id='subtitulo-critica'>{subtitle}</h5>
                        <span className="spanParrafo">Sinopsis</span>
                        <p className="parrafo-critica" dangerouslySetInnerHTML={{__html:body}} /> 
                    </div>
                </div>  
            </div>
        </section>
        </>     
    );
}

export default NovedadItem;
    