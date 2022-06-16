import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'

export default function My_Assets_first({ setModalShow, btnTxt }) {
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
                                                        <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed"  className='items_img_here'/>
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
                                                        <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed"  className='items_img_here'/>
                                                            <noscript></noscript>
                                                    </div>
                                                </div>
                                                <Link to="/My_Bids" className='text_de'>
                                                <span class="item-tab-title">My Bids</span>

                                                </Link>
                                               
                                               
                                            </div>
                                        </li> */}
                                        <li class="">
                                            <div class="item-tab">
                                                <div class="item-tab-icon">
                                                    <div className='items_tab_inneree'>
                                                        <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed"  className='items_img_here'/>
                                                            <noscript></noscript>
                                                    </div>
                                                </div>
                                                <Link to="/My_Profile" className='text_de'>

                                                <span class="item-tab-title">My Profit</span>
                                                </Link>
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
                                        <div class="list-check"><label class="formCheck"><input type="checkbox" checked=""/><span class="checkmark"></span><span class="check-title">All</span></label><label class="formCheck"><input type="checkbox" /><span class="checkmark"></span><span class="check-title">Hoz</span></label><label class="formCheck"><input type="checkbox" /><span class="checkmark"></span><span class="check-title">Campona</span></label><label class="formCheck"><input type="checkbox" /><span class="checkmark"></span><span class="check-title">Klin</span></label><label class="formCheck"><input type="checkbox" /><span class="checkmark"></span><span class="check-title">Zan</span></label></div>
                                        <div class="list-filter">
                                            <div class="dropdown-filter-inside">
                                                <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Gender</button>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Male</a></li>
                                                        <li><a href="#">Female</a></li>
                                                    </ul>
                                                </div>
                                                <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Breed type</button>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Founding</a></li>
                                                        <li><a href="#">Legendary</a></li>
                                                        <li><a href="#">Epic</a></li>
                                                        <li><a href="#">Rare</a></li>
                                                        <li><a href="#">Pacer</a></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-pick"></div>
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
