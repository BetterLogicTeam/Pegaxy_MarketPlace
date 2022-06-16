import React from 'react'
import './About_style.css'
import {FaHorse} from 'react-icons/fa'
import {GiTrojanHorse} from 'react-icons/gi'


export default function About() {
    return (
        <div>

            <section class="about-section section" id="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-lg-1 order-sm-12 text-left">
                            <h1 class="section-title">About<span class="subtitle">Pegaxy</span></h1>
                            <p class="section-subtitle">Learn More About Us</p>
                            <p class="section-description">Pegaxy (Pegasus Galaxy) is a racing game with futuristic mythological styling. Pega (the horses) are descendants of the mighty Pegasus. In this game, players will participate in PvP format races to win rewards in the platforms native utility token, VIS (Vigorus).</p>
                            <a href="#bloodlines" class="cta-button scroll-link" name="bloodline-link">Bloodlines</a>
                        </div>
                        <div class="col-md-6 order-lg-12 order-sm-1">
                            <img width="620" height="697" src="images/about-thumbnail3.png" alt="About Thumbnail" class="lazyloaded" data-ll-status="loaded" />
                            <noscript><img width="620" height="697" src="images/about-thumbnail3.png" alt="About Thumbnail" /></noscript>
                        </div>

                    </div>
                    <div class="feature-box">
                        <div class="feature-item">
                            <div class="entry-content">
                                <div class="entry-icon">
                                    <GiTrojanHorse/>

                                   
                                </div>
                                <h2 class="entry-title">Racing</h2>
                                <p class="entry-description">It’s not as easy as it looks! Mastering the elements is important and winning VIS is the end goal. Refine your skills, understand the mechanics and dominate the competition.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="entry-content">
                                <div class="entry-icon">
                                <FaHorse/>
                                   
                                </div>
                                <h2 class="entry-title">Breeding</h2>
                                <p class="entry-description">Whether you breed Pega for resale profit, for fun or even breed for your scholars, the more Pega you have, the better.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="entry-content">
                                <div class="entry-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="512" height="512"><g id="_16-stable" data-name="16-stable"><path d="M190.946,68.031,160,13.876V0H144V8H48V0H32V13.876L1.054,68.031A8.3,8.3,0,0,0,0,72V184a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A7.992,7.992,0,0,0,190.946,68.031ZM176,128H128V74.125l24-42,24,42Zm-48,16h48v8H128ZM138.214,24,115.357,64H21.786L44.643,24ZM16,176V80h96v96Zm112,0v-8h48v8Z"></path><path d="M64,88a32.036,32.036,0,0,0-32,32v16a8,8,0,0,0,8,8H88a8,8,0,0,0,8-8V120A32.036,32.036,0,0,0,64,88Zm16,40H48v-8a16,16,0,0,1,32,0Z"></path></g></svg>
                                </div>
                                <h2 class="entry-title">Renting</h2>
                                <p class="entry-description">If you plan to be a manager, there’s no need for manual scholar payments and multiple wallets. Everything in Pegaxy is handled via escrow automatically. It’s safe, transparent and fast for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="object-bg"></div>
            </section>
        </div>
    )
}
