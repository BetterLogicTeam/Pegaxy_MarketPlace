import React from 'react'
import './game_play.css'

export default function Game_play() {
    return (
        <div>
            <section class="gameplay-section" id="gameplay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bg-holder" style={{background: "url('images/gameplay-bg.png')"}}>
                                <div class="entry-content">
                                    <div class="text-content">
                                        <h2 class="gameplay-title">Game Play</h2>
                                        <p class="gameplay-description">Pegaxy has a very unique ecosystem that allows players to enter any race, for free. With this economic model, gameplay is very competitive, however the rewards are still lucrative. Players compete against 11 other racers in an attempt to earn a top 3 placement. All players inside the top 3 earn VIS tokens, the platforms utility token. Knowledge, strategy and skill are all required to place in the top 3. Be prepared to race, dedicate time and be one with your Pega, the rewards will make it all worthwhile.</p>
                                        <a href="#htp" class="scroll-link gameplay-cta-button" name="cta-link">How To Play</a>
                                    </div>
                                    <div class="image-content">
                                        <img class="gameplay-thumbnail lazyloaded" src="images/gameplay-thumbnail2.png" alt="gameplay-thumbnail" data-ll-status="loaded"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
