import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { loadWeb3 } from '../../../apis/api';
import { wireNftContractAbi, wireNftContractAddress } from '../../../utilies/constant';
import { CreateNFT, CreateNFT_ABI } from '../../../utilies/Contract';
import Auction_model from '../Auction/Auction_model';
import Navbar_nav from '../Navbar_market/Navbar_nav'
import Sell_model from '../Sell/Sell_model';

export default function Details({ setModalShow, btnTxt }) {
    const { id } = useParams()

    let [addtext, setaddtext] = useState("Connect");

    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [Auctionmodelopen, setAuctionmodelopen] = useState(false)


    const allImagesNfts = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("wallet");
            setaddtext("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            setaddtext("Wrong Network")
        } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
        }
        else {
            const web3 = window.web3;
            let contractOf_Own = new web3.eth.Contract(CreateNFT_ABI, CreateNFT)
            let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
            console.log("WalletOwnOf", WalletOwnOf[id]);
            let ArryData = WalletOwnOf[id]
            let Wallet_URI = await contractOf_Own.methods.tokenURI(ArryData).call();
            console.log("Image", Wallet_URI);
            let response = await axios.get(Wallet_URI)
            console.log("response", response.data.image);

            setImageArray(response.data.image)


        }
    }


    useEffect(() => {
        allImagesNfts()


    }, []);




    return (
        <div>
            <Sell_model showModal={showModal} setShowModal={setShowModal} id={id} />
            <Auction_model id={id} setAuctionmodelopen={setAuctionmodelopen} Auctionmodelopen={Auctionmodelopen} />

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
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
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
                                            {/* <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
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
                                                            <img alt="" src="images/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Profile" className='text_de'>

                                                        <span class="item-tab-title ">My Profit</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-content default ">
                                <div class="inner-content sel_section container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h1 className='text-white ms-4'>SELL NFT</h1>

                                            <div className="single-seller mt-5 " onClick={() => setShowModal(true)}>



                                                <div class="action-group mt-5  main_div_btn"  >
                                                    <div class="item-link btn_in_sell">
                                                        <div class="button-game primary" style={{ height: "100px" }} >
                                                            <div class="btn-position button-game-left" style={{ width: "50px", height: "70px" }}></div>
                                                            <div class="btn-position button-game-content" style={{ height: "70px" }}>
                                                                <span class="" style={{ fontSize: "20px" }}>SEll</span>

                                                            </div>
                                                            <div class="btn-position button-game-right" style={{ width: "50px", height: "70px" }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="single-seller mt-3" onClick={() => setAuctionmodelopen(true)} >



                                                <div class="action-group mt-3  main_div_btn">
                                                    <div class="item-link btn_in_sell">
                                                        <div class="button-game primary" style={{ height: "100px" }} >
                                                            <div class="btn-position button-game-left" style={{ width: "50px", height: "70px" }}></div>
                                                            <div class="btn-position button-game-content" style={{ height: "70px" }}>
                                                                <span class="" style={{ fontSize: "20px" }}>AUCTION</span>

                                                            </div>
                                                            <div class="btn-position button-game-right" style={{ width: "50px", height: "70px" }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-lg-6 mt-5">
                                        <div class="single-live-auction home-2" >
                                                                <div class="div_sell_image">

                                                                    <img src={imageArray} alt="Image" width="50%" />
                                                                </div>


                                                            </div>
                                            {/* {
                                                imageArray.map((items, index) => {
                                                    return (
                                                        <>
                                                            <div class="single-live-auction home-2" >
                                                                <div class="div_sell_image">

                                                                    <img src={items} alt="Image" width="50%" />
                                                                </div>


                                                            </div>

                                                        </>
                                                    )
                                                })
                                            } */}
                                        </div>





                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
