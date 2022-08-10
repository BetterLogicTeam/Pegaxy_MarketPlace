import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Horse_style.css'
var myArr = []
const race = "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif"
const race1 = "https://cdn.pegaxy.io/statics/web/race_1.webp";
const race2 = "https://cdn.pegaxy.io/statics/web/race_2.webp";
const race3 = "https://cdn.pegaxy.io/statics/web/race_3.webp";
export default function Horse_Racing({ setModalShow, btnTxt }) {
    const [myArr, setmyArr] = useState([])
    const [array] = React.useState([1, 2, 3, 4, 5]);
    const [displayArray, setDisplayArray] = React.useState([]);
    const [raceArray, setRaceArray]=React.useState([])
    const [displayEl, setDisplayEl] = React.useState();
    const [Itemcount, setItemcount] = useState(1)
    const [isChaling, setIsChaling] = useState(true);
    let [increaseMargin, setIncreaseMargin] = useState(10)
    let [startTime, setStartTime] = useState({
        sec: 0,
        milSec: 0,
    })


    function myMove() {
        // let id = null;


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
            // clearInterval(id);
            let pos = 0.5;
            let id = setInterval(function () {
                pos++;
                Image_tag.style.top = (parseFloat(Image_tag.style.top) - 0) + 'px';
                Image_tag.style.marginLeft = (parseFloat(Image_tag.style.marginLeft) + 0.5) + 'px';
                // console.log("pos", pos);
                if (pos >= 200) {
                    // stop()
                }
                // Image_tag.style.left = pos + "px";

            }, 10 + Math.random() * 2);
            console.log("pos", id);
            const stop = () => {
                console.log("innetr stop", id);
                clearInterval(id)
            }
            // clearInterval(id)
            // if(pos >= 20){

            // }
            Racing_div_id.appendChild(innerdiv)
        }


    }
    let ImageArray = [
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },
        {
            Image: "https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif",
            margin: 0,
            poition: 0,

        },

    ]
    const NameArray = [
        {
            title: "Shohei",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Legendaitlog",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "TURBO DISCO",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Fredrick Nader",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "JSBe E55",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Runblox | 155",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "OMRICON",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "LegendaryDog3",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Rose Gardner",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Rocky Streetrunner",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Jean Schoen",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "P2PG 7",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Mirlind",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "DOM PERIGNON",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Atlas | TCG",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },
        {
            title: "Atlas | TCG",
            Image: "https://cdn.pegaxy.io/statics/play/public/v5/images/race/race_all.png",
            margin: 0,
            poition: 0,

        },

    ]
    let dist = 2;
    const horseRace = () => {
        let marginInc = 0;
        let inc = 0;
        let id = null;
        id = setInterval(() => {
            let pos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            let ranNums = pos.sort(() => Math.random() - 0.5);
            let arrayTest = [];
            marginInc = marginInc + 15;
            inc = inc + 15;
            if (inc <= 1000) {
                for (let i = 0; i < 15; i++) {
                    let obj = {

                        margin: (Math.random() * 10) + marginInc,
                        poition: ranNums[i]
                    }
                    arrayTest.push(obj)
                }
                setRaceArray(arrayTest)
            } else {
                clearInterval(id)
            }
        }, 1000);
    }
    const timeStart = () => {
        let incre = 0;
        let n = 0;
        let s = 0;
        let timeIntervel = null;
        timeIntervel = setInterval(() => {
            if (incre <= 20000) {
                incre++;
                n = n + 1;
                if (n % 1000 == 0) {
                    s = s + 1;
                    n = 0;
                } else {
                    s = s;
                }
                setStartTime({
                    sec: s,
                    milSec: n,
                })

            } else {
                clearInterval(timeIntervel);
            }
        }, 1);
    }

    const delay = (ms) =>
        new Promise((res) => {
            setTimeout(() => {
                res();
            }, ms);
        });

    React.useEffect(() => {
        (async function () {
            let n = 0;
            for (let el of NameArray) {
                await delay(100);
                setDisplayEl(el);
                setItemcount(++n)
            }
            setIsChaling(false)
            timeStart();
            horseRace()
            setDisplayEl(undefined);
        })();
    }, []);

    React.useEffect(() => {
        displayEl && setDisplayArray((prev) => [...prev, displayEl]);
    }, [displayEl]);



    useEffect(() => {

        // horseRace();
    }, [])


    return (
        <div>
            {/* <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} /> */}

            <div className='main_div_app'>

                <div class="container">

                    <div class="bx-view">
                        {/* <p>
                            <button onClick={() => myMove()}>Click Me</button>
                        </p> */}
                        {/* {
                            console.log("Array",myArr)
                        } */}

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
                            {/* <h1>Hello CodeSandbox</h1>
                            {displayArray.map((elem, key) => (
                                <div key={key}>Number: {elem.title}</div>
                            ))} */}


                            <div class="bx-view">
                                <div class="bx-left">
                                    <div class="bx-header">
                                        <div class="header-inner">
                                            <div class="header-title">
                                                <div class="custom-container">
                                                    {
                                                        Itemcount - 1 == 15 ?
                                                            (<>
                                                                <div class="gameState-container">
                                                                    <span>{startTime.sec}: {startTime.milSec}<div class="animate-dot">...</div>
                                                                    </span>
                                                                    {/* <span class="gameState-info">{Itemcount}/15</span> */}
                                                                </div>
                                                            </>) :
                                                            (
                                                                <>
                                                                    <div class="gameState-container">
                                                                        <span>WAITING<div class="animate-dot">...</div>
                                                                        </span>
                                                                        <span class="gameState-info">{Itemcount - 1}/15</span>
                                                                    </div>


                                                                </>
                                                            )

                                                    }

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


                                                                displayArray.map((items, index) => {


                                                                    // setItemcount(index)
                                                                    // console.log("Index",index);
                                                                    return (
                                                                        <>
                                                                            <div class="item-race">
                                                                                <div class="hourse-cover">
                                                                                    <div class="cover-inner" >
                                                                                    </div>
                                                                                </div>
                                                                                <div class="hourse-info" >
                                                                                    <div class="hourse-title" style={{ color: "#fff" }} title="LegendaryDog3">{items.title ? items.title : (<>Waiting..</>)}</div>
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



                                                                    {
                                                                        isChaling ? displayArray.map((items, index) => {
                                                                            return (<>
                                                                                <div id="race-1" class="" >
                                                                                    <span className=''>
                                                                                        <img alt="" src={items.Image} decoding="async" data-nimg="fixed" className='Horse_img' />
                                                                                    </span>
                                                                                </div>
                                                                            </>)
                                                                        })
                                                                            :
                                                                            raceArray.map((items, index) => {
                                                                                // console.log("random", Math.floor((Math.random() * 20)))
                                                                                return (<>
                                                                                    <div id="race-1" class="" style={{ marginLeft: `${items.margin}px` }}>
                                                                                        <span className=''>
                                                                                            {
                                                                                                items.poition == 1 ? <img alt="" src={race1} decoding="async" data-nimg="fixed" className='Horse_img_2' />
                                                                                                : items.poition == 2 ? <img alt="" src={race2} decoding="async" data-nimg="fixed" className='Horse_img_2' />
                                                                                                : items.poition == 3 ? <img alt="" src={race3} decoding="async" data-nimg="fixed" className='Horse_img_2' />
                                                                                                : <img alt="" src={race} decoding="async" data-nimg="fixed" className='Horse_img_2' />
                                                                                            }
                                                                                            
                                                                                        </span>
                                                                                    </div>
                                                                                </>)
                                                                            })
                                                                    }

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
