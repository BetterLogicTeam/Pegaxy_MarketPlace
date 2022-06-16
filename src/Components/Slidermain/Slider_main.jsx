import React, { useEffect } from 'react'
import './Slider_here.css'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import $ from 'jquery'



export default function Slider_main() {


   
    return (
        <div>




            <section class="bloodline-section" id="bloodlines">

                <div class="text-slider-wrapper">
                    <div class="text-slider slick-initialized slick-slider">
                        <div class="slick-list draggable">
                            <div class="slick-track" style={{ opacity: "1", width: "14839px", transform: "translate3d(-6745px, 0px, 0px)" }}>
                                <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}>
                                    <div>
                                        <div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                            <h1>Zan <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%3E%3C/svg%3E" width="50" height="50" alt="Bloodline Icon" data-lazy-src="images/f6ab8e5c19e1e84f7942f977e6277b0c.png" /><noscript>
                                                <img src="images/f6ab8e5c19e1e84f7942f977e6277b0c.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                            <p class="slide-descrption">When strong winds come into play, the Zan Pega bloodline only works harder. Designed specifically for wind, Zan Pega should be your choice. Focus and stability are their strengths.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "1349px" }} tabindex="-1"><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Pega Bloodlines </h1>
                                    <p class="slide-descrption">There are 4 different bloodlines in Pegaxy, some rarer than others. If you're a collector, look closely. If you're a racer, get onto the track and get testing. If you see an amazing Pega available, do not hesitate. Greatness waits for no-one.</p>
                                </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "1349px" }} tabindex="-1"><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Hoz <img src="images/c915b8d4d7354b30f3d0220d436b248a.png" width="50" height="50" alt="Bloodline Icon" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="images/c915b8d4d7354b30f3d0220d436b248a.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">Zeus would possess one if he could. The rarest bloodline of the Founding Pega, Hoz are married to lightning. Almost a mythic existence, the Hoz Pega bloodline is powerful and rewarding to owners, and a force to be reckoned with on the track. They are the elite.</p>
                                </div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: "1349px" }} tabindex="-1"><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Campona <img src="images/a99cab0e91e7a89292284c317f93ba17.png" width="50" height="50" alt="Bloodline Icon" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="images/a99cab0e91e7a89292284c317f93ba17.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">Bonded with fire, the Campona bloodline naturally adapts and overcomes to the struggles associated with fiery conditions. Resistant and fast, Campona Pega are known as gods</p>
                                </div></div></div><div class="slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "1349px" }} tabindex="-1"><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Klin <img src="images/101d55aa955246279f643096663b193f.png" width="50" height="50" alt="Bloodline Icon" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="images/101d55aa955246279f643096663b193f.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">The masters of water, the Klin bloodline have it running through their veins. Well performing in rainy and wet weather conditions, a Klin Pega is desired for their reliability and focus during tough weather.</p>
                                </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Zan <img src="images/f6ab8e5c19e1e84f7942f977e6277b0c.png" width="50" height="50" alt="Bloodline Icon" class="lazyloaded" data-ll-status="loaded" /><noscript><img src="images/zan.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption" >When strong winds come into play, the Zan Pega bloodline only works harder. Designed specifically for wind, Zan Pega should be your choice. Focus and stability are their strengths.</p>

                                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Pega Bloodlines </h1>
                                    <p class="slide-descrption">There are 4 different bloodlines in Pegaxy, some rarer than others. If you're a collector, look closely. If you're a racer, get onto the track and get testing. If you see an amazing Pega available, do not hesitate. Greatness waits for no-one.</p>
                                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Hoz <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%3E%3C/svg%3E" width="50" height="50" alt="Bloodline Icon" data-lazy-src="images/c915b8d4d7354b30f3d0220d436b248a.png" /><noscript><img src="images/c915b8d4d7354b30f3d0220d436b248a.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">Zeus would possess one if he could. The rarest bloodline of the Founding Pega, Hoz are married to lightning. Almost a mythic existence, the Hoz Pega bloodline is powerful and rewarding to owners, and a force to be reckoned with on the track. They are the elite.</p>
                                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Campona <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%3E%3C/svg%3E" width="50" height="50" alt="Bloodline Icon" data-lazy-src="images/a99cab0e91e7a89292284c317f93ba17.png" /><noscript><img src="images/a99cab0e91e7a89292284c317f93ba17.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">Bonded with fire, the Campona bloodline naturally adapts and overcomes to the struggles associated with fiery conditions. Resistant and fast, Campona Pega are known as gods</p>
                                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Klin <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%3E%3C/svg%3E" width="50" height="50" alt="Bloodline Icon" data-lazy-src="images/101d55aa955246279f643096663b193f.png" /><noscript><img src="images/101d55aa955246279f643096663b193f.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">The masters of water, the Klin bloodline have it running through their veins. Well performing in rainy and wet weather conditions, a Klin Pega is desired for their reliability and focus during tough weather.</p>
                                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" style={{ width: "1349px" }}><div><div class="text-slide slick-slide" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    <h1>Zan <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%3E%3C/svg%3E" width="50" height="50" alt="Bloodline Icon" data-lazy-src="images/f6ab8e5c19e1e84f7942f977e6277b0c.png" /><noscript><img src="images/f6ab8e5c19e1e84f7942f977e6277b0c.png" width="50" height="50" alt="Bloodline Icon" /></noscript></h1>
                                    <p class="slide-descrption">When strong winds come into play, the Zan Pega bloodline only works harder. Designed specifically for wind, Zan Pega should be your choice. Focus and stability are their strengths.</p>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-control">
                    <div class="prev slick-arrow" style={{ display: "block" }} >
                        <button type="button" aria-label="Previous Button" class="owl-prev   scroll-toggle__button scroll-toggle__button--left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "17px", height: "25px" }}><path fill="#fff" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
                        </button></div>
                    <div class="next slick-arrow" style={{ display: "block" }}>
                        <button type="button" aria-label="Next Button" class="owl-next  scroll-toggle__button scroll-toggle__button--right">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "17px", height: "25px" }}><path fill="#fff" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="blocks">
                    <div class="block-1"></div>
                    <div class="block-2"></div>
                    <div class="block-3"></div>
                </div>

                {/* <div class="overlay"></div> */}

                <div class="swiper mySwiper swiperimage">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="images/zan.png" alt="" className='slider_img' /></div>
                        <div class="swiper-slide"><img src="images/hoz.png" alt="" className='slider_img' /></div>
                        {/* <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                        <div class="swiper-slide">Slide 7</div>
                        <div class="swiper-slide">Slide 8</div>
                        <div class="swiper-slide">Slide 9</div> */}
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                {/* <div class="scroll-toggle">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        navigation={true}
                        modules={[Navigation,Autoplay]}
                        className="mySwiper swiperimage"
                    >
                        <SwiperSlide className='swipitem'><img src="images/zan.png" alt="" className='slider_img' /></SwiperSlide>
                        <SwiperSlide className='swipitem'><img src="images/hoz.png" alt="" className='slider_img' /></SwiperSlide>
                        <SwiperSlide className='swipitem'><img src="images/model.png" alt="" className='slider_img' /></SwiperSlide>
                        <SwiperSlide className='swipitem'><img src="images/klin.png" alt="" className='slider_img' /></SwiperSlide>
                        <SwiperSlide className='swipitem'><img src="images/campona.png" alt="" className='slider_img' /></SwiperSlide>

                    </Swiper>
                </div> */}



                {/* <img src="images/zan.png" alt="" /> */}

                {/* <div class="image-slider slick-initialized slick-slider">
                    <div class="slick-list draggable" style={{ padding: "0px 50px" }}>
                        <div class="slick-track" style={{ opacity: "1", width: "8125px", transform: "translate3d(-3750px, 0px, 0px)" }}>
                            <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide img_compose" id="" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned slick-center" data-slick-index="-2" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" style={{ background: "url('images/klin.png') no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide img_compose" style={{ width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "625px" }} tabindex="-1">
                                <div>
                                    <div class="image-slide slick-slide slick-active" id="three" style={{ background: "url('&quot;images/model.png&quot;) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="false">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "625px" }} tabindex="-1">
                                <div>
                                    <div class="image-slide slick-slide" id="four" style={{ background: "url('images/hoz.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: "625px" }} tabindex="-1">
                                <div>
                                    <div class="image-slide slick-slide" id="two" style={{ background: "url('images/campona.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">

                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "625px" }} tabindex="-1">
                                <div>
                                    <div class="image-slide slick-slide" id="one" style={{ background: "url('images/klin.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-current slick-center" data-slick-index="4" aria-hidden="true" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="five" style={{ background: "url('images/zan.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>

                                </div>

                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="" style={{ background: "url('images/model.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="" style={{ background: "url('images/hoz.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="" style={{ background: "url('images/campona.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="" style={{ background: "url('images/klin.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" style={{ width: "625px" }}>
                                <div>
                                    <div class="image-slide slick-slide" id="" style={{ background: "url('images/zan.png) no-repeat", width: "100%", display: "inline-block" }} aria-hidden="true"></div></div></div></div></div></div> */}
            </section>

        </div>
    )
}
