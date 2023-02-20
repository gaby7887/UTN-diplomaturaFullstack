import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/pages/TiendaPage.css';
import '../pages/TiendaPage.js';

/*const mySwiper = () => {
    return (
        <>
        <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        loop={true}
        pagination={{clickable:true}}
        slidesPerview={7}
        className='swiper-pagination'
        >

        <SwiperSlide></SwiperSlide>
                <SwiperSlide className="slide-content"></SwiperSlide>
        </Swiper>
        
        </>
    )
}*/

const mySwiper = () => {
    return (
        <>
        <Swiper
            slidesPerview={7}
            spaceBetween={5}
            navigation={true}
            pagination={{clickable:true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>                   
            </Swiper>
            </>
    );
}

/*const mySwiper = () => {
    return (
        <>
        <Swiper
            slidesPerview={7}
            spaceBetween={5}
            slidesPerGroup={7}
            loop={true}
            centeredSlides={true}
            fade={true}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets:true,
            }}
            modules={[Pagination, Navigation]}
            className='slide-content'
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            onSlideChange={(swiper) => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                    
            </Swiper>


            </>
    );
}*/

export default mySwiper;