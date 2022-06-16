import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Market_place.css'

export default function Marketplace_play_game({ setModalShow,btnTxt }) {
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
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree' >
                                                            <img alt="" src="images/ic_all_active.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>

                                                    <Link to="/Marketplace_play_game">  <a class="item-tab-title" href="PlayGame.html">ALL</a></Link>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree' >
                                                            <img alt="" src="images/ic_my_pegas.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/pages">  <a class="item-tab-title" href="pages.html">PEGAS</a>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li class="">
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
                                                    <div class="dropdown">
                                                        <button type="button" data-toggle="dropdown" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Sort By</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Newest</a></li>
                                                            <li><a href="#">Oldest</a></li>
                                                            <li><a href="#">Price [Low-High]</a></li>
                                                            <li><a href="#">Price [High-Low]</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Currency</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#" class="active">All</a></li>
                                                            <li><a href="#">PGX</a></li>
                                                            <li><a href="#">USDT</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list-pick">
                                            <div class="item-pega">
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645754544026.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#236077 GiG2</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x00554...20F62</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(21, 151, 229)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(25, 52, 152)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(21, 151, 229)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">2</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>459</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645772674736.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#235714 Marion Casper</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x24701...E5754</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(238, 133, 114)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(251, 206, 181)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(238, 133, 114)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>455</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645420251960.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#217048 EUPHORIA</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x91302...54493</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(246, 244, 230)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 182, 119)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(246, 244, 230)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>458</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1643921520992.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#133693 BIG TUNA Bank</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x6b881...E066A</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(250, 238, 231)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(219, 198, 235)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(250, 238, 231)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>420</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/ponypega.webp" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#285136 Lhaedine Alreen | GG</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x191e4...23cA5</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(215, 172, 212)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(250, 219, 172)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(215, 172, 212)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">0</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>574</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/ponypega.webp" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#285115 Lluvia</div>
                                                                    <div class="item-info-meta">Campona <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xDBa55...64409</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 154, 118)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(103, 155, 155)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(248, 238, 238)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">0</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>539</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/ponypega.webp" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#284732 PhantomPepper</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xb8168...3a6A7</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(31, 64, 104)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(244, 5, 82)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(31, 64, 104)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">0</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>5949</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645136631676.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#195457 Logitech </div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xc438b...C74D9</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(108, 91, 123)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(246, 114, 128)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(108, 91, 123)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>469</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645292921746.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#201272 Ernest Feest</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x2A38b...D66DE</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(232, 212, 180)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(229, 228, 204)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(232, 212, 180)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>450</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/pega/1645771239426.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#230176 Xenos 017</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x6953d...54357</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 240, 240)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 0, 200)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 240, 240)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>460</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/ponypega.webp" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#284389 Mercury || DANROG</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x38E42...45bEf</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 240, 240)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 0, 200)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 240, 240)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">0</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>799</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                <a href="#">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645793106234.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#242704 GiG3</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x00554...20F62</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(249, 196, 154)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(241, 120, 8)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(249, 196, 154)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">2</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>459</span></div>
                                                                    <div class="button-game-icon i-right">
                                                                        <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
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
                                                        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="pagination-img pagination-left" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                                <div class="item-pagination active"><span>1</span></div>
                                                <div class="item-pagination"><span>2</span></div>
                                                <div class="item-pagination"><span>3</span></div>
                                                <div class="item-pagination"><span>4</span></div>
                                                <div class="item-pagination"><span>5</span></div>
                                                <span>...</span>
                                                <div class="item-pagination"><span>132</span></div>
                                                <div class="item-pagination-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fixed" class="pagination-img pagination-right" className='items_img_here' />
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
