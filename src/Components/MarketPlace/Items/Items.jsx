import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Items.css'

export default function Items({ setModalShow,btnTxt }) {
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
                                            <li>
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree' >
                                                            <img alt="" src="images/ic_all_active.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/Marketplace_play_game">
                                                        <a class="item-tab-title" href="PlayGame.html">ALL
                                                        </a>
                                                    </Link>
                                                </div><a class="item-tab-title" href="PlayGame.html">
                                                </a></li><a class="item-tab-title" href="PlayGame.html">
                                            </a><li class=""><a class="item-tab-title" href="PlayGame.html">
                                            </a><div class="item-tab"><a class="item-tab-title" href="PlayGame.html">
                                                <div class="item-tab-icon">
                                                    <div className='items_tab_inneree'>
                                                        <img alt="" src="images/ic_my_pegas.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                            </a>
                                                    <Link to="/pages"><a class="item-tab-title" href="pages.html">PEGAS</a> </Link>
                                                </div>
                                            </li>
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree' >
                                                            <img alt="" src="images/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/Items"><a class="item-tab-title" href="item.html">ITEM</a></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-content default">
                                <div class="inner-content">
                                    <div class="viewPega">
                                        <div class="header-view">
                                            <div class="list-check"></div>
                                            <div class="list-filter">
                                                <div class="dropdown-filter-inside">
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Listing type</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Auction</a></li>
                                                            <li><a href="#">Fixed Price</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="true" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown" >Rarity</button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdown-basic">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Rare</a></li>
                                                            <li><a href="#">Epic</a></li>
                                                            <li><a href="#">Legendary</a></li>
                                                        </ul>
                                                    </div>


                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown" >Currency</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">PGX</a></li>
                                                            <li><a href="#">USD</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown" >Sort by</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Newest</a></li>
                                                            <li><a href="#">Oldest</a></li>
                                                            <li><a href="#">Price [Low-High]</a></li>
                                                            <li><a href="#">Price [High-Low]</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-pick">
                                            <div class="item-pega">
                                                <div class="item-box frame-yellow">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_yellow.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#43 Legendary valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0xd7681...a04fC</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>1,099</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1947 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x24F5A...03e2e</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>1,200</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1599 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x059C7...8Ca8a</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>315</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-yellow">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_yellow.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#313 Legendary valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x6d624...11c89</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>70,000</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-yellow">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_yellow.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1371 Legendary valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x2B4eF...AC9AA</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>4,000</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-yellow">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_yellow.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#78 Legendary valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x7A350...3B6d7</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>9,999</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#768 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x572d1...012d5</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>4,000</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1519 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x572d1...012d5</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>4,000</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/tickets/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1289 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x5aA04...7FcD9</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>800</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#119 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x5aA04...7FcD9</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>800</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-yellow">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_yellow.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#1393 Legendary valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x5BCCd...55BB5</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>1,345</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-pega">
                                                <div class="item-box frame-blue">
                                                    <div class="item-cover">
                                                        <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                            <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                            <img alt="" src="images/bg_ticket_blue.jpg" decoding="async" data-nimg="responsive" class="item-cover-img items_img_here " />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <div class="item-header">
                                                        <div class="info-atts">
                                                            <div class="info-name">
                                                                <div class="item-info-title">#2216 Rare valentine ticket</div>
                                                                <div class="item-info-meta">Valentine event item</div>
                                                            </div>
                                                            <div class="info-adds">
                                                                <div class="info-adds-name">Seller</div>
                                                                <div class="info-adds-address">0x53475...076ba</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>3,000</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img items_img_here " />
                                                                            <noscript></noscript>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="viewPagination">
                                            <div class="pagination-inner">
                                                <div class="item-pagination-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="pagination-img pagination-left items_img_here " />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                                <div class="item-pagination active"><span>1</span></div>
                                                <div class="item-pagination"><span>2</span></div>
                                                <div class="item-pagination"><span>3</span></div>
                                                <div class="item-pagination"><span>4</span></div>
                                                <div class="item-pagination"><span>5</span></div>
                                                <span>...</span>
                                                <div class="item-pagination"><span>29</span></div>
                                                <div class="item-pagination-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="pagination-img pagination-right items_img_here " />
                                                        <noscript></noscript>
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
