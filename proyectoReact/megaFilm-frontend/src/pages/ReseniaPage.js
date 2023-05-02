import React from "react";
import '../styles/pages/ReseniaPage.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";

//IMAGENES
import banner from '../imagenes/resenia/directores/banner-directores.jpg';
import gif from '../imagenes/gifBarra.gif';

const ReseniaPage = () => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(()=>{
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');

            setTimeout(() =>{
                setNovedades(response.data);
                setLoading(false);

            }, 4000);
            
        };
        cargarNovedades();
    }, []);


    return (
        <>
        <section className="banner-directores">
            <img src={banner} className="directores" alt="foto"/>
        </section>
        <section className="caja-pelicula">
            <h2 className="tituloCriticas">Novedades</h2>
                <div className="info-critica">                
                    { 
                    loading ? (
                    <img src={gif} alt="" id="imagenGif" />
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id}
                            title={item.titulo} 
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            body={item.cuerpo} />)
                        )      
                    }         
                </div>
        </section>
        </>
    )
};

export default ReseniaPage;