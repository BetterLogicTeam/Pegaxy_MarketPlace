import React from 'react'
import Model_connect from '../Model_connect/Model_connect'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Breeding.css'

export default function Breeding({setModalShow,getAccount,btnTxt}) {
    return (
        <div>

            <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt}/>
            <div className='main_div_app'>

            <div class="container">
                <div class="bx-view">
                    <div class="bx-full">
                        <div class="bx-header">
                            <div class="header-inner">
                                <div class="header-tab center"></div>
                            </div>
                        </div>
                        <div class="bx-content default">
                            <div class="inner-content">
                                <div style={{flex: "1 1 0%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div class="viewAlert">
                                        <div class="bx-login">
                                            <div class="login-header">
                                                <div style={{overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "272px", height: "110px"}}>
                                                    <img alt="" src="images/pegaxy.png" decoding="async" data-nimg="fixed" class="logo-brand" className='items_img_here' style={{paddingBottom:'4rem'}}/>
                                                        <noscript></noscript>
                                                </div>
                                                <p class="mt-1 mb-3">You need a Polygon wallet to use Pegaxy</p>
                                            </div>
                                            <div class="login-btn">
                                                <div class="button-game primary" style={{height: "36px"}}>
                                                    <div class="btn-position button-game-left" style={{width: "14.4px", height: "36px"}}></div>
                                                    <div class="btn-position button-game-content" style={{height: "36px", paddingRight: "14.4px", paddingLeft: "14.4px"}}>
                                                        <div class="button-game-icon i-left">
                                                            <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                <img alt="" src="images/metamask.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here'/>
                                                                    <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="content-name">
                                                            <span class="content-name-sub"></span>
                                                            <span class="content-name-title"  style={{width:"auto"}} onClick={()=>getAccount()}>{btnTxt}</span>
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="btn-position button-game-right" style={{width: "14.4px", height: "36px"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
