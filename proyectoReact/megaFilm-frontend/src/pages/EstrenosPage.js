import React from "react";
import '../styles/pages/EstrenosPage.css';

const EstrenosPage = () => {
    return (
        <main className="cajaEstrenos">
        <h3 className="tituloEstreno">ESTRENOS</h3>
        <section className="videos">
            <div className="video">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/kOFTZWyaOgc?mute=1" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6WO09GLPYPc" 
                title="YouTube video player" frameborder="0" 
                llow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>    
            </div>
            <div className="video">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/PyakRSni-c0" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/RqrXhwS33yc" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </section>

        <h3 className="tituloProximamente" id="tituloProxi">PROXIMAMENTE</h3>

        <section className="section-video-proximamente">
            <div className="videoProximamente">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/SIwuppdxHjk" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </section>
    </main>
    )
}

export default EstrenosPage;