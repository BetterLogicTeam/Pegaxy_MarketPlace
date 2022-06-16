import React from 'react'
import './How_to_play.css'
import {FaLink,FaFlagCheckered } from 'react-icons/fa'
import {BsFillBasketFill,BsFillCheckCircleFill} from 'react-icons/bs'
import {GiHorseHead} from 'react-icons/gi'



export default function How_to_play() {
    return (
        <div>
            <div class="how-to-play-section parallax-img-container" id="htp">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <img class="mw-100 htp-thumbnail d-none d-md-block lazyloaded" width="700" height="473" src="images/track-map-1.png" alt="htp thumbnail" data-ll-status="loaded" /><noscript><img class="mw-100 htp-thumbnail d-none d-md-block" width="700" height="473" src="images/track-map-1.png" alt="htp thumbnail" /></noscript>
                            <img class="mw-100 htp-thumbnail lazyloaded" width="700" height="473" src="images/track-map2.png" alt="htp thumbnail" data-ll-status="loaded" /><noscript><img class="mw-100 htp-thumbnail" width="700" height="473" src="images/track-map2.png" alt="htp thumbnail" /></noscript>
                        </div>
                        <div class="col-lg-4 offset-lg-1">
                            <h2 class="section-title">How<span class="subtitle">To Play</span></h2>
                            <h3 class="step-title"> <FaLink/> Connect</h3>
                            <p class="step-description">Connect your Wallet to the Polygon Chain and Pegaxy Website.</p>
                            <h3 class="step-title"><BsFillBasketFill/> Purchase or Rent</h3>
                            <p class="step-description">Purchase or rent a single Pega from the Marketplace.</p>
                            <h3 class="step-title"><FaFlagCheckered/> Enter Race</h3>
                            <p class="step-description">Click the Enter Race button and you will be pushed into a lobby matching your Pega’s class, instantly.</p>
                            <h3 class="step-title"><BsFillCheckCircleFill/> Prepare</h3>
                            <p class="step-description">Once the lobby is full, you will have 60 seconds to assess the tracks variables and fit gear to help your Pega match the tracks variables.</p>
                            <h3 class="step-title"><GiHorseHead/>Race</h3>
                            <p class="step-description">Watch your Pega race against 11 others! If you place in the top 3, you win VIS tokens!</p>
                        </div>
                    </div>
                </div>
                <div class="object-bg"></div>

            </div>


        </div>
    )
}
