import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Pages.css'

export default function Pages({ setModalShow,btnTxt } ) {
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
                                                        <div className='items_tab_inneree'>
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
                                            </a><li class="active"><a class="item-tab-title" href="PlayGame.html">
                                            </a><div class="item-tab"><a class="item-tab-title" href="PlayGame.html">
                                                <div class="item-tab-icon">
                                                    <div className='items_tab_inneree'>
                                                        <img alt="" src="images/ic_my_pegas.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                            </a>
                                                    <Link to="/pages">

                                                        <a class="item-tab-title" href="pages.html">PEGAS</a>
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
                                            <div class="list-check">
                                                <label class="formCheck">
                                                    <input type="checkbox" className='inputcheckbox' checked />
                                                    <span class="checkmark"></span>
                                                    <span class="check-title">All</span>
                                                </label>
                                                <label class="formCheck">
                                                    <input type="checkbox" className='inputcheckbox' />
                                                    <span class="checkmark"></span>
                                                    <span class="check-title">Hoz</span>
                                                </label>
                                                <label class="formCheck">
                                                    <input type="checkbox" className='inputcheckbox' />
                                                    <span class="checkmark"></span>
                                                    <span class="check-title">Campona</span>
                                                </label>
                                                <label class="formCheck">

                                                    <input type="checkbox" className='inputcheckbox' />
                                                    <span class="checkmark"></span>
                                                    <span class="check-title">Klin</span>
                                                </label>
                                                <label class="formCheck">
                                                    <input type="checkbox" className='inputcheckbox' />
                                                    <span class="checkmark"></span>
                                                    <span class="check-title">Zan</span>
                                                </label>
                                            </div>
                                            <div class="list-filter">
                                                <div class="dropdown-filter-inside">
                                                    <div class=" dropdown">
                                                        <button id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Listing type</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Auction</a></li>
                                                            <li><a href="#">Fixed Price</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Gender</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Male</a></li>
                                                            <li><a href="#">Female</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Breed Type</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Founding</a></li>
                                                            <li><a href="#">Legendary</a></li>
                                                            <li><a href="#">Epic</a></li>
                                                            <li><a href="#">Rare</a></li>
                                                            <li><a href="#">Pacer</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Breed Count</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Founding</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Rarity</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Rare</a></li>
                                                            <li><a href="#">Epic</a></li>
                                                            <li><a href="#">Legendary</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown">
                                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Event</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">No event</a></li>
                                                            <li><a href="#">Valentine event</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-sort" type="button" class="dropdown-toggle btn btn-link">Sort By</button></div> -->
                                                <!-- <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link">Currency</button></div> --> */}
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
                                                                <img alt="" src="images/1645771178520.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#239826 TIKKA IPC</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xfC69e...54442</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(173, 238, 207)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(41, 89, 57)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(173, 238, 207)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>407.88</span></div>
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
                                                                <img alt="" src="images/1645764408015.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#237070 Artemis | DXS</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x5d72C...8AE44</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(209, 234, 163)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(53, 208, 186)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(209, 234, 163)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>385</span></div>
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
                                                                <img alt="" src="images/1645760585412.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#229241 BigDaddyDaksTV | Cess 4</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x3c399...E6C3b</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(250, 207, 90)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(35, 49, 66)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(250, 207, 90)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>411</span></div>
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
                                                                <img alt="" src="images/1645758764402.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#234462 SAR13</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x1D08C...2Dc91</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(50, 224, 196)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(249, 192, 192)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(50, 224, 196)" }}></div>
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
                                                                <img alt="" src="images/1646217657516.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#248356 RP1</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xad4a5...12D8b</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(163, 210, 202)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 142, 113)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(163, 210, 202)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">1</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>483</span></div>
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
                                                                    <div class="item-info-title">#293812 Autumn 10</div>
                                                                    <div class="item-info-meta">Klin <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xBc398...76A4A</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(32, 44, 197)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(249, 173, 141)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(55, 51, 49)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>630</span></div>
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
                                                                <img alt="" src="images/1645005061642.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#189140 Kamryn Rodriguez</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x06C5b...DfE46</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(5, 102, 116)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(224, 236, 228)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(5, 102, 116)" }}></div>
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
                                                                <img alt="" src="images/1645485395120.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#221759 H_471 | Tefaria x VIP</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x30aBc...9A6c1</div>
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
                                                        <div class="item-class class-pega breed">3</div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-game primary" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>440</span></div>
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
                                                                <img alt="" src="images/1644897428362.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#182197 Gerardo Gaylord</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0x06C5b...DfE46</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 211, 29)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 233, 197)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 211, 29)" }}></div>
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
                                                <a href="/marketplace/auction/252317">
                                                    <div class="item-box">
                                                        <div class="item-cover">
                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                <img alt="" src="images/1645156252399" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-inner">
                                                                <div class="item-info-time">00:53:48</div>
                                                            </div>
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#198639 Lucas Hansen</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xeDF14...fB2ad</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 205, 163)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(239, 79, 79)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(255, 205, 163)" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-class class-pega breed">2</div>
                                                        <div class="item-badge">
                                                            <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "16px", height: "16px" }}>
                                                                <img alt="" src="images/ic_item_badge.png" decoding="async" data-nimg="fixed" class="item-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="info-action">
                                                    <div class="action-group">
                                                        <div class="item-link">
                                                            <div class="button-mask" style={{ height: "32px" }}>
                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                    <div class="content-name">
                                                                        <span class="content-name-sub">Current Bid:</span>
                                                                        <div class="button-game-icon">
                                                                            <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                                <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
                                                                                <noscript></noscript>
                                                                            </div>
                                                                        </div>
                                                                        <span class="content-name-title" style={{ fontSize: "17px" }}>580</span>
                                                                    </div>
                                                                </div>
                                                                <div class="button-game primary" style={{ height: "32px" }}>
                                                                    <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                    <div class="btn-position button-game-content" style={{ height: "32px" }}>
                                                                        <div class="content-name"><span class="content-name-title" style={{ fontSize: "17px" }}>Bid</span></div>
                                                                    </div>
                                                                    <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                                </div>
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
                                                                    <div class="item-info-title">#293809 Autumn 09</div>
                                                                    <div class="item-info-meta">Klin <span>•</span> Pacer<span>•</span> Male</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xBc398...76A4A</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(246, 215, 67)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(87, 169, 154)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(236, 155, 59)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>650</span></div>
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
                                                                <img alt="" src="images/1644442297941.png" decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <div class="item-header">
                                                            <div class="info-atts">
                                                                <div class="info-name">
                                                                    <div class="item-info-title">#138657 H_253 | Wick x VIP</div>
                                                                    <div class="item-info-meta">Hoz <span>•</span> Pacer<span>•</span> Female</div>
                                                                </div>
                                                                <div class="info-adds">
                                                                    <div class="info-adds-title">0xf9CF5...2AD3B</div>
                                                                    <div class="info-property">
                                                                        <div class="property-title">
                                                                            <div class="property-coat">
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(157, 227, 208)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(232, 249, 233)" }}></div>
                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(157, 227, 208)" }}></div>
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
                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>443</span></div>
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
                                                        <img alt="" src="images/arrow-left.png" decoding="async" data-nimg="fixed" class="pagination-img pagination-left" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                                <div class="item-pagination active"><span>1</span></div>
                                                <div class="item-pagination"><span>2</span></div>
                                                <div class="item-pagination"><span>3</span></div>
                                                <div class="item-pagination"><span>4</span></div>
                                                <div class="item-pagination"><span>5</span></div>
                                                <span>...</span>
                                                <div class="item-pagination"><span>92</span></div>
                                                <div class="item-pagination-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                        <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/arrow-right.png" decoding="async" data-nimg="fixed" class="pagination-img pagination-right" className='items_img_here' />
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
