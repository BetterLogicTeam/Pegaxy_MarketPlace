import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Sell_style.css'
import { useParams } from "react-router-dom";
import { loadWeb3 } from '../../../apis/api';
import { wireNftContractAbi, wireNftContractAddress } from '../../../utilies/constant';
import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../../../utilies/Contract'
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Sell({ setModalShow, btnTxt }) {
    const { id } = useParams()
    let [addtext, setaddtext] = useState("Connect");
    const [getIputdata, setgetIputdata] = useState()

    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)

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
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            let simplleArray = [];
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
            let walletLength = walletOfOwner.length
            setMyWalletLength(walletLength)
            console.log("walletOfOwner", walletLength);
            let res = await axios.get(`https://gateway.pinata.cloud/ipfs/QmWC48u2Rj84M9ufzFFxSD41AQmq2QFMUhFhiu7aT2DFq8/${id}.png`)
            // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
            let imageUrl = res.config.url;
            console.log("Imager_here", imageUrl);
            let dna = res.data.dna
            simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
            setImageArray(simplleArray);


        }
    }


    useEffect(() => {
        allImagesNfts()


    }, []);



    let ownadd = "0x0Aaf4C0669044AE375527a03b2886Ff2e13cC11C"
    let tokenid = id


    const addOrder = async () => {
        let acc = await loadWeb3();
        console.log("ACC=", acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {


            try {
                // setIsSpinner(true)

                const web3 = window.web3;
                let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c"
                // let getIputdata=inputdata_price.current.value;

                if (getIputdata == "") {
                    toast.error("Please Enter the Price")
                    // setIsSpinner(false)
                }
                else {

                    // setIsSpinner(true)


                    if (getIputdata <= 0) {
                        toast.error("Please Enter Price Greater the 0")
                        // setIsSpinner(false)
                        // setIsSpinner(true)
                        // getIputdata=web3.utils.toWei(getIputdata)

                    }
                    else {

                        let curreny_time = Math.floor(new Date().getTime() / 1000.0)

                        console.log("tayyab", curreny_time)


                        let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
                        let getodernumberhere = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);


                        console.log("inputadata", getIputdata);

                        console.log("Own_token_Address", tokenid)
                        console.log("ownadd", ownadd)
                        console.log("curreny_time", curreny_time)
                        console.log("getIputdata", getIputdata)




                        let getListingPrice = await getodernumberhere.methods.getListingPrice().call();

                        console.log("getListingPrice", getListingPrice);

                        await nftContractOftoken.methods.setApprovalForAll(nftMarketContractAddress, true).send({
                            from: acc,
                        })
                        // setIsSpinner(false)

                        toast.success("Approved Successfuly")
                        // setIsSpinner(true)

                        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
                        await nftContractOf.methods.createMarketItem(tokenid, getIputdata, 1, false, curreny_time, ownadd).send({
                            from: acc,
                            value: getListingPrice,
                            feelimit: 10000000000
                        })
                        // setIsSpinner(false)


                        toast.success("Transion Compelete")
                    }
                }
            }
            catch (e) {
                console.log("Error while addOrder ", e)
                // setIsSpinner(false)


            }
        }
    }
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

                                            <div className="single-seller mt-5">


                                                <input
                                                    type="text"
                                                    placeholder="Enter Bid Value in ETH"
                                                    className="d-block btn btn-bordered-white mt-4 ml-4 text-white"
                                                    id="bid"
                                                    onChange={(e) => setgetIputdata(e.target.value)}
                                                // ref={inputdata_price}
                                                />
                                                <div class="action-group mt-5  main_div_btn" onClick={() => addOrder()}>
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

                                        </div>




                                        <div className="col-lg-6">
                                            {
                                                imageArray.map((items, index) => {
                                                    return (
                                                        <>
                                                            <div class="single-live-auction home-2">
                                                                <div class="div_sell_image">
                                                                    <img src={items.imageUrl} alt="Image" width="50%" />
                                                                </div>


                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}
