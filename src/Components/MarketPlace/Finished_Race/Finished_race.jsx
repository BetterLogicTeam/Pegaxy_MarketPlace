import React from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Finished_race.css'

export default function Finished_race({ setModalShow,btnTxt }) {
    return (
        <div>

            <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} />
            <div className='main_div_app'>
                <div class="container">
                    <div class="bx-view">
                        <div class="bx-left">
                            <div class="bx-header">
                                <div class="header-inner">
                                    <div class="header-title"></div>
                                    <div class="header-tab">
                                        <ul>
                                            <Link to="/Racing_main">

                                                <li class="">
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

                                            <Link to="/Finished_race">

                                                <li class="active">
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
                            <div class="bx-content default">
                                <div class="inner-content">
                                    <div class="viewTable">
                                        <div class="tableHeader">
                                            <div class="header-title event first"><span>Event</span></div>
                                            <div class="header-title location"><span>Location</span></div>
                                            <div class="header-title class">
                                                <div class="dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Class</button></div>
                                            </div>
                                            <div class="header-title distance"><span>Distance</span></div>
                                            <div class="header-title date"><span>Date</span></div>
                                            <div class="header-title prizepool"><span>Prizepool</span></div>
                                            <div class="header-title action end"><span>Action</span></div>
                                        </div>
                                        <div class="tableContent">
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921764</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t9baa8b22-bebc-43ae-a824-a6665fb79e92 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921763</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip tafd145c7-4fe8-4a76-ab19-7a4771fbd29b place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921762</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t7898b3f6-4da4-4169-8317-8b0673d4201b place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921761</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t89b64d62-4d6c-4e2b-9dc3-89b2dc7def68 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921760</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t4fb7e9a5-e832-4381-8e2d-06f86e3e4718 place-top type-dark" id="copy" data-id="tooltip">

                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921759</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t81384b82-c8c8-4879-921d-b92a48289355 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921758</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t6b08ea37-d704-464a-862b-72cf982c5cd3 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921757</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t1f3f6487-790f-4e69-81b7-37faf2995fce place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921756</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t9f09d2c9-1e40-4197-88fb-fc5f42a4b099 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921755</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t1e620324-d375-40cf-9cbc-66d66c5aac81 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921754</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip t58a34fa3-34b3-42f7-8e46-fd180bc2503f place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921753</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">4000m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip tf9715a12-2859-4a79-bf12-4ed1aef84626 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
                                                </div>
                                            </div>
                                            <div class="item-content">
                                                <div class="item-title event first">Race #17921752</div>
                                                <div class="item-title location">Pegaxy</div>
                                                <div class="item-title class">
                                                    <div class="class-pega">Class 1</div>
                                                </div>
                                                <div class="item-title distance">3500m</div>
                                                <div class="item-title date">0</div>
                                                <div class="item-title prizepool">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "14px", height: "14px" }}>
                                                        <img alt="" src="images/VIS.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                    <span>175</span>
                                                </div>
                                                <div class="item-title action end">
                                                    <div class="__react_component_tooltip tab5efdfe-21b3-4c08-82f5-f69689074355 place-top type-dark" id="copy" data-id="tooltip">


                                                    </div>
                                                    <div data-tip="true" data-for="copy" class="action-share" currentitem="false" style={{ cursor: "pointer" }}><span>share</span></div>
                                                    <div class="action-replay" style={{ cursor: "pointer" }}><span>replay</span></div>
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
                                                <div class="item-pagination"><span>111</span></div>
                                                <div class="item-pagination-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                        <img alt="" src="images/arrow-right.png" decoding="async" data-nimg="fixed" class="pagination-img pagination-right" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bx-right auto">
                            <div class="bx-header">
                                <div class="header-inner">
                                    <div class="header-title">Start racing</div>
                                </div>
                            </div>
                            <div class="bx-content">
                                <div class="inner-content">
                                    <div class="pick-pega">
                                        <div class="btn-pick">
                                            <div>
                                                <div class="btn-pick-icon">
                                                    <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "120px", height: "120px" }}>
                                                        <img alt="pick" src="images/start_race.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                        <noscript></noscript>
                                                    </div>
                                                </div>
                                                <div class="button-game pinks" style={{ height: "40px" }}>
                                                    <div class="btn-position button-game-left" style={{ width: "16px", height: "40px" }}></div>
                                                    <div class="btn-position button-game-content" style={{ height: "40px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                        <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "18px" }}>Pick a Pega</span></div>
                                                    </div>
                                                    <div class="btn-position button-game-right" style={{ width: "16px", height: "40px" }}></div>
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
