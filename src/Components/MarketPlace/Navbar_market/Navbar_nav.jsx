import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Items from '../Items/Items'
import './Nav_style.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { loadWeb3 } from '../../../apis/api'




export default function Navbar_nav({ setModalShow, btnTxt }) {

    return (
        <div>

            <div class="navbar PlayNow_Navbar">
                <div class="container">


                    <div class="navbar-inner">
                        <Navbar collapseOnSelect expand="md" className='navbarnav'>
                            <Container>
                                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                                <Nav className="mx-auto nav_link_text">
                                    <Nav.Link href="#features">     <Link to="/pages"> <img alt="" src="images/renting.png" width="100px" className='navbar_link_img' /> </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#pricing"> <Link to="/Marketplace_play_game">
                                        <img alt="" src="images/marketplace_active.png" width="100px" className='navbar_link_img' />
                                    </Link></Nav.Link>
                                    <Nav.Link href="#pricing"> <Link to="/Racing_main">
                                        <li className='nav-item'>
                                            <img alt="" src="images/racing.png" width="100px" className='navbar_link_img racing_img' />
                                            <div class="nav-anim">
                                                <div id="views"></div>
                                                <div id="steps"></div>
                                                <div id="transition"></div>
                                            </div>
                                        </li>


                                    </Link></Nav.Link>

                                    {
                                        btnTxt == "Connect Metamask" ? (
                                            <>
                                                <Nav.Link href="#pricing">   <Link to="/Breeding">

                                                    <img alt="" src="images/breeding.png" width="100px" className='navbar_link_img' />

                                                </Link></Nav.Link>

                                                <Nav.Link href="#pricing"><img alt="" src="images/contact.png" width="100px" className='navbar_link_img' onClick={() => setModalShow(true)} />
                                                </Nav.Link>
                                            </>

                                        ) : (
                                            <>
                                                <Nav.Link href="#pricing">   <Link to="/Breeding">

                                                    <img alt="" src="images/breeding.png" width="100px" className='navbar_link_img' />

                                                </Link></Nav.Link>
                                                <Nav.Link href="#pricing">   <Link to="/My_Assets">

                                                    <img alt="" src="images/my_assets_active.png" width="100px" className='navbar_link_img' />

                                                </Link></Nav.Link>


                                            </>

                                        )
                                    }




                                </Nav>


                            </Container>
                        </Navbar>

                    </div>



                </div>

            </div>


        </div>
    )
}
