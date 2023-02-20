import React from "react";
import "../styles/pages/TiendaPage.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

//IMAGENES
import blackAdam from '../imagenes/banner-black-adam1.png';
import raya from '../imagenes/banner-raya.jpg';
import topGun from '../imagenes/baaner-top-gup.png';
import avatar from '../imagenes/home/accion/avatar.jpeg';
import pixels from '../imagenes/home/comedia/pixels.jpeg';
import viajeParaiso from '../imagenes/home/comedia/viaje-al-paraiso.jpeg';
import transporteLegacy from '../imagenes/home/accion/transporter-legacy.jpeg';
import vengadores from '../imagenes/home/accion/vengadores-endgame.jpeg';
import niniosGrandes2 from '../imagenes/home/comedia/ninos-grandes2.jpeg';
import blackAdamTapa from '../imagenes/home/accion/black-adam.jpeg';
import cuatroFantasticos from '../imagenes/home/accion/cuatro-fantasticos.jpeg';
import justiciero from '../imagenes/home/accion/el-justiciero.jpeg';
import reyEscorpion from '../imagenes/home/accion/el-rey-escorpion.jpeg';
import soldadoDeDios from '../imagenes/home/accion/el-soldado-de-dios.jpeg';
import theGame from '../imagenes/home/suspenso-drama/the-game.jpeg';
import niniosGrandes from '../imagenes/home/comedia/ninos-grandes.jpeg';
import ipMan3 from '../imagenes/home/accion/ip-man-3-dragon-master.jpeg';
import losJuegosDelHambre from '../imagenes/home/accion/los-juegos-del-hambre-en-llamas.jpeg';
import rayaTapa from '../imagenes/home/accion/raya-y-el-ultimo-dragon.jpeg';
import vengadoresInfinity from '../imagenes/home/accion/vengadores-infinity-war.jpeg';
import planDeVuelo from '../imagenes/home/suspenso-drama/plan-de-vuelo-desaparecida.jpeg';
import hotelTransilvania2 from '../imagenes/home/comedia/hotel-transilvania-2.jpeg';
import jackYGemelas from '../imagenes/home/comedia/jack-y-su-gemela.jpeg';
import juegoDeGemelas from '../imagenes/home/comedia/juego-de-gemelas.jpeg';
import laBodaDeMiMejorAmigo from '../imagenes/home/comedia/la-boda-de-mi-mejor-amigo.jpeg';
import masAllaDeLosSuenios from '../imagenes/home/comedia/mas-alla-de-los-sueños.jpeg';
import elCodigoDavinci from '../imagenes/home/suspenso-drama/el-codigo-da-vinci.jpeg';
import elJuegoPerfecto from '../imagenes/home/suspenso-drama/el-juego-perfecto.jpeg';
import elPatriota from '../imagenes/home/suspenso-drama/el-patriota.jpeg';
import elSilencioDeLosCorderos from '../imagenes/home/suspenso-drama/el-silencio-de-los-corderos.jpeg';
import elUltimoSamurai from '../imagenes/home/suspenso-drama/el-ultimo-samurai.jpeg';
import algoPasaConMary from '../imagenes/home/comedia/algo-pasa-con-mary.jpeg';
import click from '../imagenes/home/comedia/click.jpeg';
import descubriendoALosRobinson from '../imagenes/home/comedia/descubriendo-a-los-robinsons.jpeg';
import familiaAlInstante from '../imagenes/home/comedia/familia-al-instante.jpeg';
import invencible from '../imagenes/home/suspenso-drama/invencible.jpeg';
import juegoDeHonor from '../imagenes/home/suspenso-drama/juego-de-honor.jpeg';
import thorLove from '../imagenes/home/accion/thor-love-and-thunder.jpeg';
import topGunMaverick from '../imagenes/home/accion/top-gun-maverick.jpeg';
import transformers3 from '../imagenes/home/accion/transformers-3-el-lado-oscuro-de-la-luna.jpeg';
import transformersElUltimoCaballero from '../imagenes/home/accion/transformers-el-ultimo-caballero.jpeg';
import transformersLaEraDeLaExtincion from '../imagenes/home/accion/transformers-la-era-de-la-extincion.jpeg';
import transformers from '../imagenes/home/accion/transformers.jpeg';
import transporter2 from '../imagenes/home/accion/transporter-2.jpeg';


const TiendaPage = () => {
    return (
        <main className="main">
            <section className="banner">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" className="active"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={blackAdam} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={raya} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={topGun} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon ms-n1" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon me-n1" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>  
                </div>
            </section>

            <section className="swiper swiper-container1"> 
            <div className="slide-content">
              <h3 className="titulos">La mejor seleccion de peliculas</h3> 

              <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img src={avatar} alt="avatar" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pixels} alt="pixels" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={viajeParaiso} alt="viajeParaiso" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transporteLegacy} alt="transporteLegacy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vengadores} alt="vengadores" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={niniosGrandes2} alt="niniosGrandes2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blackAdamTapa} alt="blackAdam" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cuatroFantasticos} alt="cuatroFantasticos" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={justiciero} alt="justiciero" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={reyEscorpion} alt="reyEscorpion" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={soldadoDeDios} alt="soldadoDeDios" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={theGame} alt="theGame" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={niniosGrandes} alt="niniosGrandes" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ipMan3} alt="ipMan3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={losJuegosDelHambre} alt="losJuegosDelHambre" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={rayaTapa} alt="raya" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vengadoresInfinity} alt="vengadoresInfinity" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={planDeVuelo} alt="planDeVuelo" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={hotelTransilvania2} alt="hotelTransilvania2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={jackYGemelas} alt="jackYGemelas" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={juegoDeGemelas} alt="juegoDeGemelas" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={laBodaDeMiMejorAmigo} alt="laBodaDeMiMejorAmigo" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={masAllaDeLosSuenios} alt="masAllaDeLosSuenios" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elCodigoDavinci} alt="elCodigoDaVinci" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elJuegoPerfecto} alt="elJuegoPerfecto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elPatriota} alt="elPatriota" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elSilencioDeLosCorderos} alt="elSilencioDeLosCorderos" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elUltimoSamurai} alt="elUltimoSamurai" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={algoPasaConMary} alt="algoPasaConMary" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={click} alt="click" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={descubriendoALosRobinson} alt="descubriendoALosRobinson" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={familiaAlInstante} alt="familiaAlInstante" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={invencible} alt="invencible" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={juegoDeHonor} alt="juegoDeHonor" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={thorLove} alt="thorLove" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={topGunMaverick} alt="topGunMaverick" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformers3} alt="transformers3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformersElUltimoCaballero} alt="transformersElUltimoCaballero" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformersLaEraDeLaExtincion} alt="transformersLaEraDeLaExtincion" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformers} alt="transformers" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transporter2} alt="transporter2" className="card-img" />
                </SwiperSlide>
              </Swiper>
                  
            </div>
          </section>

          <section className="swiper swiper-container1"> 
            <div className="slide-content">
              <h3 className="titulos">Películas de acción, aventura y ciencia ficcion</h3>

              <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img src={blackAdamTapa} alt="blackAdam" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cuatroFantasticos} alt="cuatroFantasticos" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={justiciero} alt="justiciero" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={reyEscorpion} alt="reyEscorpion" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={soldadoDeDios} alt="soldadoDeDios" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ipMan3} alt="ipMan3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={losJuegosDelHambre} alt="losJuegosDelHambre" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={rayaTapa} alt="rayaTapa" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={thorLove} alt="thorLove" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={topGunMaverick} alt="topGunMaverick" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformers3} alt="transformers3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformersElUltimoCaballero} alt="transformersElUltimoCaballero" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformersLaEraDeLaExtincion} alt="transformersLaEraDeLaExtincion" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transformers} alt="transformers" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transporter2} alt="transporter2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={transporteLegacy} alt="transporteLegacy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vengadores} alt="vengadores" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={vengadoresInfinity} alt="vengadoresInfinity" />
                </SwiperSlide>    
              </Swiper>
    
           
            </div>   
          </section>

          <section className="swiper swiper-container1"> 
            <div className="slide-content">
              <h3 className="titulos">Películas de suspenso y drama</h3>  

              <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img src={elCodigoDavinci} alt="elCodigoDavinci" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elJuegoPerfecto} alt="elJuegoPerfecto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elPatriota} alt="elPatriota" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elSilencioDeLosCorderos} alt="elSilencioDeLosCorderos" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={elUltimoSamurai} alt="elUltimoSamurai" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={invencible} alt="invencible" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={juegoDeHonor} alt="juegoDeHonor" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={planDeVuelo} alt="planDeVuelo" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={theGame} alt="theGame" />
                </SwiperSlide>
              </Swiper>
              
            </div>
          </section>

          <section className="swiper swiper-container1"> 
            <div className="slide-content"> 
              <h3 className="titulos">Películas de comedia</h3> 

              <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
              >
                  <SwiperSlide>
                    <img src={algoPasaConMary} alt="algoPasaConMary" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={click} alt="click" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={descubriendoALosRobinson} alt="descubriendoALosRobinson" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={familiaAlInstante} alt="familiaAlInstante" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={hotelTransilvania2} alt="hotelTransilvania2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={jackYGemelas} alt="jackYGemelas" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={juegoDeGemelas} alt="juegoDeGemelas" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={laBodaDeMiMejorAmigo} alt="laBodaDeMiMejorAmigo" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={masAllaDeLosSuenios} alt="masAllaDeLosSuenios" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={niniosGrandes} alt="niniosGrandes" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={niniosGrandes2} alt="niniosGrandes2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pixels} alt="pixels" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={viajeParaiso} alt="viajeParaiso" />
                  </SwiperSlide>       
              </Swiper> 

            </div>
          </section>
        </main>
    );
};

export default TiendaPage;