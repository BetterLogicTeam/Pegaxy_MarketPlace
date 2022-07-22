import React from 'react'
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaFacebookF, FaDiscord } from 'react-icons/fa'
import { BsTwitter, BsTelegram } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'


export default function Header({ChangeItems}) {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className='Header'>
                <Container>
                    <Navbar.Brand href="#home"><img src="pegaxy.png" alt="" width="200px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='main_navmaune' ><span className='menubar'><GiHamburgerMenu /></span></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto Header_nav_text">
                            <Nav.Link href="#" className='navbar_text'>Support</Nav.Link>
                            <Nav.Link href="#" className='navbar_text'>Careers</Nav.Link>
                            <Nav.Link href="#" className='navbar_text'>How To Play</Nav.Link>

                            <Nav.Link href="#" className='navbar_text'>Tokenomics</Nav.Link>

                            <Nav.Link href="#" className='navbar_text'>Team</Nav.Link>

                            <Nav.Link href="#" className='navbar_text'>Roadmap</Nav.Link>
                            <Nav.Link href="#" className='navbar_text'>White Paper</Nav.Link>
                            <Nav.Link href="#" className='navbtn'>
                                <Link to="/Items" className='nav_link_header'>
                                    <span itemprop="name" >Play Now</span>

                                </Link>

                            </Nav.Link>
                            <Nav.Link href="https://62dada26c2a11a18acaa6c7b--spontaneous-fudge-a3fbd7.netlify.app/" target="_blank" className='navbtn ms-3' style={{backgroundColor: "#f4d03f"}}>
                                <a target="_blank" href="https://62dada26c2a11a18acaa6c7b--spontaneous-fudge-a3fbd7.netlify.app/" className='nav_link_header'>
                                    <span itemprop="name" >Play Game</span>

                                </a>

                            </Nav.Link>

                            {/* <div className="socil_icon">
                                <a href="#"> <span className='nav_icon'><FaFacebookF /></span></a>
                                <a href="#"> <span className='nav_icon'><BsTwitter /></span></a>
                                <a href="#"> <span className='nav_icon'><FaDiscord /></span></a>

                                <a href="#"> <span className='nav_icon'><BsTelegram /></span></a>

                            </div> */}





                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

         
        </div >
    )
}
