import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'

export default function My_Profile({ setModalShow, btnTxt }) {
    return (
        <div>

            <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} />
            <div className='main_div_app'>
                <div class="container">
                    <div class="bx-view">
                        <div class="bx-full">
                            <div class="bx-header">
                                <div class="header-inner">
                                    <div class="header-tab center">
                                        <ul>
                                        <li class="">
                                            <div class="item-tab">
                                                <div class="item-tab-icon">
                                                    <div className='items_tab_inneree'>
                                                        <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed"  className='items_img_here'/>
                                                            <noscript></noscript>
                                                    </div>
                                                </div>
                                                <Link to="/Mint" className='text_de'>

                                                <span class="item-tab-title">MINT</span>
                                                </Link>
                                            </div>
                                        </li>
                                            <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                <Link to="/My_Items" className='text_de'>

                                                    <span class="item-tab-title">ITEMS</span>
                                                    </Link>
                                                </div>
                                            </li>
                                            {/* <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Bids" className='text_de'>
                                                <span class="item-tab-title">My Bids</span>

                                                </Link>
                                                </div>
                                            </li> */}
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                <Link to="/My_Profile" className='text_de'>

                                                    <span class="item-tab-title active">My Profit</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-content default">
                                <div class="inner-content">
                                    <div class="my-profit">
                                        <div class="header-profit">
                                            <div class="info-table">
                                                <div class="item"><span>Time</span></div>
                                                <div class="item">
                                                    <span>
                                                        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}>
                                                            <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px"}} /></div>
                                                            <img alt="" src="images/coin/VIS.png" decoding="async" data-nimg="intrinsic" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </span>
                                                    <span style={{marginLeft: "5px"}}>Amount</span>
                                                </div>
                                                <div class="item" style={{marginRight: "5px"}}><span>Status</span></div>
                                            </div>
                                            <div class="info-token">
                                                <div class="item">
                                                    <span>0</span>
                                                    <div class="img">
                                                        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}>
                                                            <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px"}} /></div>
                                                            <img alt="" src="images/VIS.png" decoding="async" data-nimg="intrinsic" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <span>0</span>
                                                    <div class="img">
                                                        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}>
                                                            <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px"}} /></div>
                                                            <img alt="" src="images/VIS_OFF.png" decoding="async" data-nimg="intrinsic" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-profit">
                                            <div class="table-profit" style={{height: "70vh", overflowY: "scroll"}}></div>
                                            <div class="info-profit">
                                                <div class="item-token">
                                                    Claimable: <span style={{marginLeft: "5px"}}>0</span>
                                                    <div class="img">
                                                        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}>
                                                            <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px"}} /></div>
                                                            <img alt="" src="images/VIS_OFF.png" decoding="async" data-nimg="intrinsic" className='items_img_here' />
                                                                <noscript></noscript>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="button-game disabled" style={{height: "40px"}}>
                                                    <div class="btn-position button-game-left" style={{width: "16px", height: "40px"}}></div>
                                                    <div class="btn-position button-game-content" style={{height: "40px", paddingRight: "16px", paddingLeft: "16px"}}>
                                                        <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{fontSize: "18px"}}>Claim</span></div>
                                                    </div>
                                                    <div class="btn-position button-game-right" style={{width: "16px", height: "40px"}}></div>
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
