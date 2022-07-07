import React, { useEffect, useState } from 'react'
import './Buy_nft_style.css'
import { BsHeartFill } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { FaMarsStroke } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Buy_nft() {
    const [apiData, setapiData] = useState()




    const Fatch_Api_data = async () => {
        try {

            let res = await axios.get("https://whenftapi.herokuapp.com/OnAuction_marketplace_history?id=100")
            console.log("res", res.data.data);
            res = res.data.data
            console.log("res", res.bidEndTime);
            setapiData(res)



        } catch (e) {
            console.log("Error while fatching API ", e);
        }
    }








    useEffect(() => {

        Fatch_Api_data()


    }, []);


    return (
        <div>

            <div className="container">


                <div className="main_div_buy_nft">
                    {
                        apiData?.map((items, index) => {
                            return (
                                <>
                                    <div class="cardPega default breed-type breed-pacer classPega-1">
                                        <div class="card-inner flip-card-inner">
                                            <div class="hover-action">
                                                <div class="action-inner">i</div>
                                            </div>
                                            <div class="card-main flip-card-front">
                                                <div class="card-cover">
                                                    <div class="thumb-card">
                                                        <div class="horse-inner">
                                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                                <img alt="Pega #948329 - Maiya Heller" src="https://cdn.pegaxy.io/data/pega/1656337322315" decoding="async" data-nimg="fill" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="info-energy">
                                                        <IoIosFlash className='flash_icon' />
                                                        <span className='text-white'> 0/25</span>
                                                    </div>
                                                    <div class="meta-card">
                                                        <div class="tracking">
                                                            <div class="id">Pega #948329</div>
                                                            <div class="information">
                                                                <div class="properties">
                                                                    <div class="symbol hoz">
                                                                        <IoIosFlash className='flash_icon' />

                                                                    </div>
                                                                    <div class="symbol male">
                                                                        <FaMarsStroke className='strok_icon' />
                                                                    </div>
                                                                </div>
                                                                <div class="holder text-white">{items.name}</div>
                                                            </div>
                                                        </div>
                                                        {/* <AiOutlineHeart/> */}
                                                        <div class="breedcount">
                                                            {/* <i class="fa-solid fa-heart" ></i> */}
                                                            <BsHeartFill className='icon_heart' style={{ textShadow: "rgb(255, 255, 255) 0px 0px 1px" }}>0</BsHeartFill>
                                                            <span>{index}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-info">
                                                    <div class="info-left">
                                                        <div class="title">Current price</div>
                                                        <div class="value">
                                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                            </span>
                                                            <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" width="15%" />
                                                            <span>{items.price}</span>
                                                        </div>
                                                    </div>
                                                    <div class="info-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        }
                        )
                    }

                </div>



            </div>


        </div>
    )
}
