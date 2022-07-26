import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Horse_style.css'

export default function Horse_Racing({ setModalShow, btnTxt }) {
    function myMove() {
        let id = null;

        for (let i = 0; i <= 15; i++) {
            let innerdiv = document.createElement('div');
            let Span_div = document.createElement('span')
            // innerdiv.setAttribute("className","in-race-horse") 
            let Image_tag = document.createElement('img')
            Image_tag.src = "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif";
            Image_tag.className = "Horse_img";
            Span_div.appendChild(Image_tag);
            innerdiv.appendChild(Span_div)
            let Racing_div_id = document.getElementById('Racing_div_id')
            Image_tag.style.top = "-0px";
            Image_tag.style.marginLeft = "0px";
            Span_div.setAttribute("className", "Span_clas_style")
            // const elem = document.getElementById("race-1");
            let pos = 0;
            // clearInterval(id);

            id = setInterval(function () {
                pos++;
                console.log("check", (parseFloat(Image_tag.style.left) + 0.5) + "px")
                Image_tag.style.top =(parseFloat(Image_tag.style.top) - 0)  + 'px';
                Image_tag.style.marginLeft = (parseFloat(Image_tag.style.marginLeft) + 0.5) + 'px';

                // Image_tag.style.left = pos + "px";

            }, 10 + Math.random() * 2);
            // clearInterval(id)
            // if(pos >= 20){

            // }
            Racing_div_id.appendChild(innerdiv)
        }


    }
    const ImageArray = [
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",

        },

    ]
    const NameArray = [
        {
            title: "Shohei",

        },
        {
            title: "Legendaitlog",

        },
        {
            title: "TURBO DISCO",

        },
        {
            title: "Fredrick Nader",

        },
        {
            title: "JSBe E55",

        },
        {
            title: "Runblox | 155",

        },
        {
            title: "OMRICON",

        },
        {
            title: "LegendaryDog3",

        },
        {
            title: "Rose Gardner",

        },
        {
            title: "Rocky Streetrunner",

        },
        {
            title: "Jean Schoen",

        },
        {
            title: "P2PG 7",

        },
        {
            title: "Mirlind",

        },
        {
            title: "DOM PERIGNON",

        },
        {
            title: "Atlas | TCG",

        },

    ]
    return (
        <div>
            {/* <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} /> */}

            <div className='main_div_app'>

                <div class="container">

                    <div class="bx-view">
                        <p>
                            <button onClick={() => myMove()}>Click Me</button>
                        </p>

                        <div class="bx-left">
                            <div class="bx-header">
                                <div class="header-inner">
                                    <div class="header-title"></div>
                                    <div class="header-tab">
                                        <ul>
                                            <Link to="/Items/horse_racing">
                                                <li class="active">
                                                    <div class="item-tab">
                                                        <div class="item-tab-icon">
                                                            <div className='items_tab_inneree'>
                                                                <img alt="" src="images/ic_start_active.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <a href="Racing.html" class="item-tab-title">Live Racing</a>
                                                    </div>
                                                </li>
                                            </Link>
                                            <Link to="/Items/Finished_race">
                                                <li class="">
                                                    <div class="item-tab">
                                                        <div class="item-tab-icon">
                                                            <div className='items_tab_inneree'>
                                                                <img alt="" src="images/ic_finish.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>

                                                        <a href="Racing_Finished.html" class="item-tab-title">Finished races</a>
                                                    </div>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div class="bx-view">
                                <div class="bx-left">
                                    <div class="bx-header">
                                        <div class="header-inner">
                                            <div class="header-title">
                                                <div class="custom-container">
                                                    <div class="gameState-container">
                                                        <span>WAITING<div class="animate-dot">...</div>
                                                        </span>
                                                        <span class="gameState-info">8/15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bx-content opened">
                                        <div class="inner-content">
                                            <div class="viewOpened">
                                                <div class="viewTable">
                                                    <div class="tableHeader">
                                                        <div class="header-title event">Event</div>
                                                        <div class="header-title location">Location</div>
                                                        <div class="header-title class"> Class</div>
                                                        <div class="header-title distance">Distance</div>
                                                        <div class="header-title date">Date</div>
                                                        <div class="header-title prizepool">Prizepool</div>
                                                    </div>
                                                    <div class="tableContent">
                                                        <div class="item-content disable">
                                                            <div class="item-title event">Race #83138612</div>
                                                            <div class="item-title location align-center">Pegaxy</div>
                                                            <div class="item-title class align-center">
                                                                <div class="class-pega class-4">Class 4</div>
                                                            </div>
                                                            <div class="item-title distance align-center">3500m</div>
                                                            <div class="item-title date align-center">
                                                            </div>
                                                            <div class="item-title prizepool visoff">
                                                                <span className='span_div' >
                                                                    <img alt="" srcset="https://cdn.pegaxy.io/statics/play/public/v4/images/coin/VIS_OFF.png 1x, https://cdn.pegaxy.io/statics/play/public/v4/images/coin/VIS_OFF.png 2x" src="https://cdn.pegaxy.io/statics/play/public/v4/images/coin/VIS_OFF.png" decoding="async" data-nimg="fixed"
                                                                        className='Image_style' />
                                                                </span>
                                                                <span>1550</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="race-container">
                                                <div class="race-view">
                                                    <div class="race-stats">
                                                        <div class="race-horse">
                                                            {
                                                                NameArray.map((items, index) => {
                                                                    return (
                                                                        <>
                                                                            <div class="item-race">
                                                                                <div class="hourse-cover">
                                                                                    <div class="cover-inner" >
                                                                                    </div>
                                                                                </div>
                                                                                <div class="hourse-info" >
                                                                                    <div class="hourse-title" title="LegendaryDog3">{items.title}</div>
                                                                                    <div class="hourse-position">{index + 1}</div>
                                                                                </div>
                                                                            </div>

                                                                        </>
                                                                    )
                                                                })
                                                            }


                                                        </div>
                                                    </div>
                                                    <div class="race-track">
                                                        <div id="racetrack-container" class="racetrack-15">
                                                            <div id="racetrack">
                                                                <div class="view-line">
                                                                    <div class="racetrack-row">
                                                                        <div class="line-row start">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row finish">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                        <div class="line-row">
                                                                        </div>
                                                                    </div>
                                                                    <div class="racetrack-time">
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}>
                                                                            </span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}>
                                                                            </span>
                                                                        </div>
                                                                        <div class="line-row"><span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(221, 196, 18)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                        <div class="line-row">
                                                                            <span style={{ color: "rgb(47, 119, 171)" }}></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="view-racetrack type-1 racetrack-15">
                                                                    <div class="racetrack-col" style={{ width: "3500px", marginLeft: "47.8571px" }}>
                                                                        <div class="racetrack-inner" id="Race_here">
                                                                            <div class="line-row start" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span className='span_div' >
                                                                                        <img alt="" srcset="https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png 1x, https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png 2x" src="https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png" decoding="async" data-nimg="fixed" className='Image_style2' />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="500" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">500m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="1000" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">1000m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="1500" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">1500m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="2000" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">2000m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="2500" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">2500m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row" title="3000" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span class="line-location">3000m</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="line-row finish" style={{ width: "837.5px", minWidth: "837.5px" }}>
                                                                                <div class="line-inner">
                                                                                    <span className='span_div'>
                                                                                        <img alt="" srcset="https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png 1x, https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png 2x" src="https://cdn.pegaxy.io/statics/play/public/v4/images/race/flag_start.png" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                                    </span>
                                                                                    <div class="line-finished">finished</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="racehorse" id="Racing_div_id">
                                                                    {/* {
                                                                        ImageArray.map((items, index) => {
                                                                            return (<>
                                                                                <div id="race-1" class="" >
                                                                                    <span className=''>
                                                                                        <img alt="" src={items.Image} decoding="async" data-nimg="fixed" className='Horse_img' />
                                                                                    </span>
                                                                                </div>
                                                                            </>)
                                                                        })
                                                                    } */}
                                                                    {/* <div id="race-1" class="in-race-horse" style={{ top: "calc(30px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(100px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(180px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(250px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(310px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(380px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>

                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(460px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(530px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(590px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(660px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(730px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(800px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(870px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(940px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div>
                                                                    <div id="race-1" class="in-race-horse" style={{ top: "calc(1000px)", left: "0px", marginLeft: "0px" }}>
                                                                        <span className='span_div'>
                                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" className='Image_style' />
                                                                        </span>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bx-right auto">
                                    <div class="bx-header stadion">
                                        <div class="header-inner">
                                            <div class="header-title">Stadion Metaverse</div>
                                        </div>
                                    </div>
                                    <div class="bx-content">
                                        <div class="inner-content">
                                            <div class="view-scroll">
                                                <div class="view-bottom">
                                                    <div class="item-button">
                                                        <div class="button-game primary" style={{ height: "40px" }}>
                                                            <div class="btn-position button-game-left" style={{ width: "16px", height: "40px" }}>
                                                            </div>
                                                            <div class="btn-position button-game-content" style={{ height: "40px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                <div class="content-name">
                                                                    <span class="content-name-title" style={{ fontSize: "18px" }}>Lobby</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-position button-game-right" style={{ width: "16px", height: "40px" }}>

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
            </div>




        </div>
    )
}
