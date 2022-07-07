import React, { useState } from 'react'
import './SideBar_style.css'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import Offcanvas from 'react-bootstrap/Offcanvas'
export default function SideBar_MP() {
    const [show, setShow] = useState(true);


    return (
        <>
            <div className="main_div_tabes">
                <div class="viewTabs position-fixed  ">
                    <ul class="nav nav-tabs">
                        <li class="nav-item navitem ">
                            <div class="nav-link with-icon active mt-2">
                                <span className='navlinkiconspan mt-2'>
                                    <img alt="Pegas" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/tab/ic_pegas_active.png" decoding="async" data-nimg="fixed" className='navbarlinkImage mt-2' />

                                </span>
                                <span>PEGA</span>
                            </div>
                        </li>
                        <li class="nav-item navitem">
                            <div class="nav-link with-icon  mt-2">
                                <span className='navlinkiconspan mt-2'>
                                    <img alt="Items" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/tab/ic_items.png" decoding="async" data-nimg="fixed" className='navbarlinkImage mt-2' />

                                </span>
                                <span>ITEM</span>
                            </div>
                        </li>
                        <li class="nav-item navitem">
                            <div class="nav-link with-icon mt-2">
                                <span className='navlinkiconspan mt-2'>
                                    <img alt="Fabled tokens" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/tab/ic_fabled.png" decoding="async" data-nimg="fixed" className='navbarlinkImage mt-2' />

                                </span>
                                <span>FABLED TOKEN</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

