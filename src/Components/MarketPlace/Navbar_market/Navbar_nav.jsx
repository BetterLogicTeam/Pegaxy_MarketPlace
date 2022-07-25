import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Items from '../Items/Items'
import './Nav_style.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { loadWeb3 } from '../../../apis/api';
import renting from '../../../Assest/images/renting.png'
import fuse from '../../../Assest/images/fuse.png'

import marketplace_active from '../../../Assest/images/marketplace_active.png'
import { Routes,Route,Link,useNavigate,Outlet} from "react-router-dom";
// import renting from '../../../Assest/images/racing.png'

import breeding from '../../../Assest/images/breeding.png'
import contact from '../../../Assest/images/contact.png'
import my_assets_active from '../../../Assest/images/my_assets_active.png'
import { useSelector } from 'react-redux'
import My_Assets_first from '../My_Assets/My_Assets_first'
import Breeding from '../Breeding/Breeding'
import Racing_main from '../Racing/Racing_main'
import Marketplace_play_game from '../MarketPlace_play_game/Marketplace_play_game'
import Pages from '../Pages/Pages'
import My_Iytems from '../My_Items/My_Iytems'
// import state from '../../../redux/redux/index'





export default function Navbar_nav({ setModalShow, btnTxt }) {
    let navigate = useNavigate();
    const value = useSelector((state) => state.connectWallet.acc)
    console.log("what is value in navbar", value)
    return (
        <div>

            <div class="navbar PlayNow_Navbar">
                <div class="container">
                    {/* <div class="navbar-mp">
                        <a href="/MarketPlace" rel="noreferrer noopener" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                            <div class="anim-mp">
                                <span>MARKETPLACE</span>
                            </div>
                        </a>
                    </div> */}

                    <div class="navbar-inner">

                        <Navbar collapseOnSelect expand="md" className='navbarnav'>
                            <Container>

                                <Nav className="mx-auto nav_link_text">
                                    <Nav.Link href="#features">    
                                     <Link to="/Items/pages"> <img alt="" src={fuse} width="100px" className='navbar_link_img' /> </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#pricing"> <Link to="/Items/Marketplace_play_game">
                                        <img alt="" src={marketplace_active} width="100px" className='navbar_link_img' />
                                    </Link></Nav.Link>
                                    <Nav.Link href="#pricing"> <Link to="/Items/Racing_main">
                                        <li className='nav-item'>
                                            <img alt="" src={renting} width="100px" className='navbar_link_img racing_img' />
                                            <div class="nav-anim">
                                                <div id="views"></div>
                                                <div id="steps"></div>
                                                <div id="transition"></div>
                                            </div>
                                        </li>
                                    </Link>
                                    </Nav.Link>

                                    {
                                        btnTxt == "Connect Metamask" ? (
                                            <>
                                                <Nav.Link href="#pricing">
                                                    <Link to="/Breeding">
                                                        <img alt="" src={breeding} width="100px" className='navbar_link_img' />
                                                    </Link>
                                                </Nav.Link>

                                                <Nav.Link href="#pricing"><img alt="" src={contact} width="100px" className='navbar_link_img' onClick={() => setModalShow(true)} />
                                                </Nav.Link>
                                            </>

                                        ) : (
                                            <>
                                                <Nav.Link href="#pricing">
                                                    <Link to="/Items/Breeding">
                                                        <img alt="" src={breeding} width="100px" className='navbar_link_img' />
                                                    </Link>
                                                </Nav.Link>

                                                <Nav.Link href="#pricing">  
                                                 <Link to="/Items/My_Assets">
                                                    <img alt="" src={my_assets_active} width="100px" className='navbar_link_img' />
                                                </Link>
                                                </Nav.Link>


                                            </>

                                        )
                                    }




                                </Nav>


                            </Container>
                        </Navbar>

                    </div>



                </div>

            </div>
            <Routes>

                <Route exact path="/" element={<Items />} />
                <Route path="/Items/My_Assets" element={<My_Assets_first />} />
                <Route path="/Items/Breeding" element={<Breeding />} />
                <Route path="/Items/Racing_main" element={<Racing_main />} />
                <Route path="/Items/Marketplace_play_game" element={<Marketplace_play_game />} />
                <Route path="/Items/pages" element={<Pages />} />
          {/* <Route path="/Items/My_Items" element={<My_Iytems />} /> */}



            </Routes>
            <Outlet />

        </div>
    )
}
