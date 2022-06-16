import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'

export default function My_Bids({ setModalShow, btnTxt }) {
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
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Bids" className='text_de'>
                                                        <span class="item-tab-title active">My Bids</span>

                                                    </Link>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
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
                                    <div style={{ padding: "20px" }}>
                                        <div class="viewTable">
                                            <div class="tableHeader">
                                                <div class="header-title">Listing</div>
                                                <div class="header-title">NFT</div>
                                                <div class="header-title">Your Bid</div>
                                                <div class="header-title">End Date</div>
                                                <div class="header-title">Action</div>
                                            </div>
                                            <div class="tableContent"></div>
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
