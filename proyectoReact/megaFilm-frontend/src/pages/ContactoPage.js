import React from "react";
import '../styles/pages/ContactoPage.css';

//IMAGENES
import contacto1 from '../imagenes/contacto/imagen-contacto1.jpg';
import contacto from '../imagenes/contacto/imagen-contacto.jpg';
import contacto3 from '../imagenes/contacto/imagen-contacto3.jpg';
import contacto6 from '../imagenes/contacto/imagen-contacto6.jpg';
import contacto8 from '../imagenes/contacto/imagen-contacto8.jpg';

const ContactoPage = () => {
    return (
        <main className="mainContacto">
       <div className="cajaImagenes">
            <img src={contacto1} className="bannerContacto" alt="foto" /> 
            <img src={contacto} className="bannerContacto" alt="foto" />
            <img src={contacto3} className="bannerContacto" alt="foto" />
            <img src={contacto6} className="bannerContacto" alt="foto" />
            <img src={contacto8} className="bannerContacto" alt="foto" />
            <h2 className="tituloContacto">Recibí tu Newsletter</h2>
        </div> 
        
        <div className="cajaContacto">
            <form action="" method="" className="formulario">
                <div className="form">
                    <label for="name" className="nombre">Nombre</label>
                    <input type="text" name="nombre-apellido" placeholder="Juan Garcia" autofocus required className="nombre" />
                </div>

                <div className="form">
                    <label for="email" className="email">Email</label>
                    <input type="email" name="email" placeholder="nombre@ejemplo.com" required className="email" />
                </div>

                <div className="form">
                    <label for="telefono" className="telefono">Telefono</label>
                    <input type="tel" name="telefono" placeholder="+54 9 1153641185" className="telefono" />
                </div> 
                <div className="form">
                    <label for="mensaje" className="mensajeContacto">Mensaje</label>
                    <textarea name="mensaje" placeholder="Dejanos tu comentario" required className="form-textarea"></textarea>
                </div>  
                <div className="check-form">
                    <input className="check-input" type="checkbox" value="" required />
                    <label className="check-label" for="flexCheckDefault" id="check-label-form">
                      Deseo recibir el Newsletter
                    </label>
                </div> 
                <button type="submit" value="" id="btnEnviar">Enviar</button>
            </form>                   
                        
        </div>       
    </main>
    )
}

export default ContactoPage;