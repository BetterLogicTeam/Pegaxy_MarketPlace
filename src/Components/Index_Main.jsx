import React from 'react'
import About from './About_page/About'
import Game_play from './Game_play/Game_play'
import Header from './Header/Header'
import How_to_play from './How_to_play/How_to_play'
import INVESTORS from './INVESTORS/INVESTORS'
import Our_team from './Meet_our_team/Our_team'
import RoadMap from './RoadMap/RoadMap'
import Slider_main from './Slidermain/Slider_main'
import Tokenomics from './Tokenomics/Tokenomics'

export default function Index_Main() {
    return (
        <div>

            <Header />
            <About />
             <Slider_main/>
            <Game_play />
            <How_to_play />
            <Tokenomics />
            <Our_team />
            <INVESTORS />
            <RoadMap />
        </div>
    )
}
