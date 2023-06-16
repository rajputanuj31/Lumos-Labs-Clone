import React from 'react'
import "./Opportunity.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Opportunity = () => {
    return (
        <div className="opp">

            <Swiper
               breakpoints= {{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                700: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10
                }
            }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='slider'
            >
                <SwiperSlide>
                    <div className="main">
                        <div className='sec1'>
                            <div className='sec2'>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className='sec3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                                    nisi, doloribus vitae, labore facilis id minus, beatae eaque
                                    eius ratione quas. Illo porro cupiditate, error, vitae, omnis sapiente es
                                    t commodi deleniti voluptatibus quod nihil? Voluptates nisi neque ut placeat,
                                    exercitationem totam quis
                                    facere quibusdam nemo beatae cupiditate similique soluta ducimus?
                                </p>
                            </div>
                            <a href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main">
                        <div className='sec1'>
                            <div className='sec2'>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className='sec3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                                    nisi, doloribus vitae, labore facilis id minus, beatae eaque
                                    eius ratione quas. Illo porro cupiditate, error, vitae, omnis sapiente es
                                    t commodi deleniti voluptatibus quod nihil? Voluptates nisi neque ut placeat,
                                    exercitationem totam quis
                                    facere quibusdam nemo beatae cupiditate similique soluta ducimus?
                                </p>
                            </div>
                            <a href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main">
                        <div className='sec1'>
                            <div className='sec2'>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className='sec3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                                    nisi, doloribus vitae, labore facilis id minus, beatae eaque
                                    eius ratione quas. Illo porro cupiditate, error, vitae, omnis sapiente es
                                    t commodi deleniti voluptatibus quod nihil? Voluptates nisi neque ut placeat,
                                    exercitationem totam quis
                                    facere quibusdam nemo beatae cupiditate similique soluta ducimus?
                                </p>
                            </div>
                            <a href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main">
                        <div className='sec1'>
                            <div className='sec2'>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className='sec3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                                    nisi, doloribus vitae, labore facilis id minus, beatae eaque
                                    eius ratione quas. Illo porro cupiditate, error, vitae, omnis sapiente es
                                    t commodi deleniti voluptatibus quod nihil? Voluptates nisi neque ut placeat,
                                    exercitationem totam quis
                                    facere quibusdam nemo beatae cupiditate similique soluta ducimus?
                                </p>
                            </div>
                            <a href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main">
                        <div className='sec1'>
                            <div className='sec2'>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                            </div>
                            <div className='sec3'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                                    nisi, doloribus vitae, labore facilis id minus, beatae eaque
                                    eius ratione quas. Illo porro cupiditate, error, vitae, omnis sapiente es
                                    t commodi deleniti voluptatibus quod nihil? Voluptates nisi neque ut placeat,
                                    exercitationem totam quis
                                    facere quibusdam nemo beatae cupiditate similique soluta ducimus?
                                </p>
                            </div>
                            <a href=" ">LEARN MORE</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Opportunity
