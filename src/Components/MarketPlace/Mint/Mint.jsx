import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Mint.css'

import { toast } from "react-toastify";
import { loadWeb3 } from '../../../apis/api';
import { busdNftTokenAbi, busdNftTokenAddress, wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../../../utilies/constant';
import Spinner from '../../Loading_Spinner/Spinner';
import axios from 'axios';

export default function Mint({ setModalShow, btnTxt }) {

    let [value, setValue] = useState(1)
    let [point, setPoint] = useState(0);
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With WHE");
    let [btnThree, setButtonThree] = useState("Mint With Busd")
    let [isSpinner, setIsSpinner] = useState(false)




    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }

    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }


    const myMintBNB = async () => {
        let acc = await loadWeb3();
        console.log("mint_Acc=", acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setIsSpinner(true)
                setButtonOne("Please Wait While Processing")
                console.log("mintFor BNB");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);



                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);

                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let maxSupply = await nftContractOf.methods.maxsupply().call();

                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_BNB().call()
                    console.log("jjjjj", mintingbnbPrice);
                    mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                    mintingbnbPrice = parseFloat(mintingbnbPrice)
                    setMintPriceBnb(mintingbnbPrice)
                    let totalMintingPriceBNB = value * mintingbnbPrice
                    console.log("valuehere", value);
                    console.log("ttlSupply", maxLimitprTransaction);

                    console.log("mintingbnbPrice", mintingbnbPrice);

                    // let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    // console.log("iswhitelist", llisted_check);



                    // if (llisted_check == 'true') {
                    if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                        // if (paused == false) {
                        if (value < parseInt(maxLimitprTransaction)) {
                            console.log("Minting Value= ", value);
                            console.log("Minting totalMintingPriceBNB= ", totalMintingPriceBNB);

                            totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())
                            let hash = await nftContractOf.methods.mint_with_bnb(value).send({
                                from: acc,
                                value: totalMintingPriceBNB.toString()

                            })

                                console.log("hash", hash.transactionHash);
                                hash=hash.transactionHash

                                let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                    "uid": "100",
                                    "address": "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c",
                                    "nft": "1",
                                    "token": "0.9999",
                                    "txn": "0x4889a20112816632ba3f2aaccff2a4e40eb7d719ce7e827fe38bdae2acebb719"
                                })

                                console.log("postapi",postapi);

                         


                            toast.success("Transaction Confirmed")
                            setButtonOne("Mint With BNB")
                            setIsSpinner(false)

                        } else {
                            toast.error("No of Minting is Greater than maximum limit Per Transaction")
                            setButtonOne("Mint With BNB")
                            setIsSpinner(false)


                        }
                        // } else {
                        //     toast.error("Paused is False")
                        //     setButtonOne("Mint With BNB")

                        // }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonOne("Mint With BNB")
                        setIsSpinner(false)


                    }
                    // }
                    // else {
                    //     let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

                    //     await nftContractOf.methods.mint_with_MATIC(value).send({
                    //         from: acc,
                    //         value: value * BusdPrice.toString()
                    //     })


                    //     toast.error(" Please White Listed Address")
                    //     setButtonOne("Mint With BNB")


                    // }
                }






            } catch (e) {
                console.log("Error while minting ", e)
                setIsSpinner(false)

                toast.error("Transaction failed")
                setButtonOne("Mint With BNB")

            }

        }
    }
    const myMintWire = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonTwo("Please Wait While Processing")
                console.log("mintFor Wire");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);

                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
                    userBusdBalance = web3.utils.fromWei(userBusdBalance)
                    let maxSupply = await nftContractOf.methods.maxsupply().call();
                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
                    mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                    mintingWirePrice = parseFloat(mintingWirePrice)
                    setmintPriceWire(mintingWirePrice);
                    let totalMintingPriceWire = value * mintingWirePrice
                    console.log("maxSupply", maxSupply);
                    console.log("ttlSupply", maxLimitprTransaction);

                    console.log("mintingWirePrice", mintingWirePrice);
                    let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    console.log("iswhitelist", llisted_check);
                    console.log("Minting Value= ", value);



                    if (llisted_check == 'true') {

                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                                        console.log("Minting Value= ", value);
                                        console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);

                                        totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                                        await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                                            from: acc
                                        })
                                        toast.success("Transaction Confirmed")
                                        setButtonTwo("Please Wait for Second Confirmation")
                                        await nftContractOf.methods.mint_with_MMX(value, totalMintingPriceWire.toString()).send({
                                            from: acc,
                                        })
                                        toast.success("Transaction Succefful")
                                        setButtonTwo("Mint With WHE")

                                    } else {
                                        toast.error("Out Of Balance")
                                        setButtonTwo("Mint With WHE")

                                    }

                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonTwo("Mint With WHE")

                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonTwo("Mint With WHE")

                            }

                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonTwo("Mint With WHE")

                        }

                    }
                    else {

                        let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();
                        totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                        await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                            from: acc
                        })
                        let a = web3.utils.fromWei(BusdPrice);
                        a = parseFloat(a)
                        let b = a * value;
                        let c = web3.utils.toWei(b.toString());

                        await nftContractOf.methods.mint_with_MMX(value, c).send({
                            from: acc,
                        })


                        setButtonTwo("Mint With WHE")


                    }
                }



            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonTwo("Mint With WHE")

            }

        }
    }
    const myMintBUSD = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonThree("Please Wait While Processing")
                console.log("mintFor BUSD");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let busdContractOf = new web3.eth.Contract(busdNftTokenAbi, busdNftTokenAddress);
                // let userBusdBalance = await busdContractOf.methods.balanceOf(acc).call();
                // console.log("maxSupply",busdContractOf);

                // userBusdBalance = web3.utils.fromWei(userBusdBalance)
                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);
                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let maxSupply = await nftContractOf.methods.maxsupply().call();
                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
                    mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
                    mintingBusdPrice = parseFloat(mintingBusdPrice)
                    setMintPriceBUSD(mintingBusdPrice)
                    let totalMintingPriceBusd = value * mintingBusdPrice
                    console.log("maxSupply", maxSupply);
                    console.log("ttlSupply", maxLimitprTransaction);

                    console.log("mintingBusdPrice", mintingBusdPrice);

                    let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    console.log("iswhitelist", llisted_check);


                    if (llisted_check == 'true') {


                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    // if (parseFloat(userBusdBalance) >= totalMintingPriceBusd) {
                                    console.log("Minting Value= ", value);
                                    console.log("Minting totalMintingPriceWire= ", totalMintingPriceBusd);

                                    totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                                    await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                                        from: acc
                                    })
                                    setButtonThree("Please Wait For Second Confirmation")
                                    toast.success("Transaction Confirmed")
                                    await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceBusd.toString()).send({
                                        from: acc,
                                    })
                                    setButtonThree("Mint With Busd")
                                    toast.success("Transaction Succefful")

                                    // } else {
                                    //     toast.error("Out Of Balance")
                                    //     setButtonThree("Mint With Busd")

                                    // }

                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonThree("Mint With Busd")

                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonThree("Mint With Busd")

                            }

                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonThree("Mint With Busd")

                        }
                    }
                    else {
                        let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_BUSD().call();
                        totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                        await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                            from: acc
                        })
                        let a = web3.utils.fromWei(BusdPrice);
                        a = parseFloat(a)
                        let b = a * value;
                        let c = web3.utils.toWei(b.toString());
                        await nftContractOf.methods.mint_with_BUSD(value, c).send({
                            from: acc,
                        })

                        setButtonThree("Mint With Busd")


                    }
                }



            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed BUSD")
                setButtonThree("Mint With Busd")

            }

        }
    }




    const [users, setUsers] = useState([])


    const getMydata = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)


        try {
            // console.log("mintFor BUSD");
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            // let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
            // mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
            // mintingBusdPrice = parseFloat(mintingBusdPrice)
            // setMintPriceBUSD(mintingBusdPrice)

            // let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
            // mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
            // mintingWirePrice = parseFloat(mintingWirePrice)
            // setmintPriceWire(mintingWirePrice);

            let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_BNB().call()
            mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
            mintingbnbPrice = parseFloat(mintingbnbPrice)
            setMintPriceBnb(mintingbnbPrice)


            //   let livebnbprice = await ("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")





            //   mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
            //   mintingbnbPrice = parseFloat(mintingbnbPrice)


        } catch (e) {
            console.log("Error while getting minting Price");
        }

    }





    useEffect(() => {
        setInterval(() => {
            getMydata();

        }, 10000);
        getMydata();

    }, [])
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
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/Mint" className='text_de'>

                                                        <span class="item-tab-title active">MINT</span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="item-tab ">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Items" className='text_de'>

                                                        <span class="item-tab-title ">ITEMS</span>
                                                    </Link>
                                                </div>
                                            </li>
                                            {/* <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Bids" className='text_de'>
                                                        <span class="item-tab-title ">My Bids</span>

                                                    </Link>
                                                </div>
                                            </li> */}
                                            <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Profile" className='text_de'>

                                                        <span class="item-tab-title">My Profit</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-content default  minting_hereeeee">
                                <div class="inner-content minting_page">
                                    {
                                        isSpinner ? (
                                            <>
                                                
                                                <Spinner />

                                            </>
                                        ) : (
                                            <div class="viewPega">
                                                    <div className="innerdiv_mint">
                                                        <div className="row">
                                                            <div className="col-lg-6 mt-4">
                                                                <div className="inner_first_div_img">
                                                                    <img src="images/gameplay-thumbnail2.png" alt="" width="100%" className='minting_img' />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mt-4">
                                                                <div className="mint-content">
                                                                    <div className="mint-item">
                                                                        <div className="quantity">
                                                                            <div className=" inputdiv_here">

                                                                                <input className="count-form" type="text" value={value} onChange={(e) => setValue(e.target.value)} id="qtyBox" />

                                                                            </div>
                                                                            <div className="top_div_here">
                                                                                <div className="btn-area1 mt-5">
                                                                                    {/* <a class="btn btn-box" href="#" onClick={() => myMintBNB()}>
                                                                            {btnOne}
                                                                        </a> */}
                                                                                    <div class="info-action">
                                                                                        <div class="action-group">
                                                                                            <div class="item-link">
                                                                                                <div class="button-game primary" style={{ height: "50px" }} onClick={() => myMintBNB()}>
                                                                                                    <div class="btn-position button-game-left" style={{ width: "50px", height: "50px" }}></div>
                                                                                                    <div class="btn-position button-game-content" style={{ height: "50px" }}>
                                                                                                        <span class="" style={{ fontSize: "20px" }}>{btnOne}</span>

                                                                                                    </div>
                                                                                                    <div class="btn-position button-game-right" style={{ width: "50px", height: "50px" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="fs-4 text-white mt-3"> {mintPriceBnb} BNB</p>
                                                                                </div>
                                                                                {/* <div className="btn-area1 mt-5">
                                                                       
                                                                         <div class="info-action">
                                                                            <div class="action-group">
                                                                                <div class="item-link">
                                                                                    <div class="button-game primary" style={{ height: "50px" }} onClick={() => myMintWire()}>
                                                                                        <div class="btn-position button-game-left" style={{ width: "50px", height: "50px" }}></div>
                                                                                        <div class="btn-position button-game-content" style={{ height: "50px" }}>
                                                                                            <span class="" style={{ fontSize: "20px" }}>{btnTwo}</span>

                                                                                        </div>
                                                                                        <div class="btn-position button-game-right" style={{ width: "50px", height: "50px" }}></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="fs-4 text-white mt-3"> {mintPriceWire} WHE</p>
                                                                    </div>
                                                                    <div className="btn-area1 mt-5">
                                                                        
                                                                        <div class="info-action">
                                                                            <div class="action-group">
                                                                                <div class="item-link">
                                                                                    <div class="button-game primary" style={{ height: "50px" }} onClick={() => myMintBUSD()}>
                                                                                        <div class="btn-position button-game-left" style={{ width: "50px", height: "50px" }}></div>
                                                                                        <div class="btn-position button-game-content" style={{ height: "50px" }}>
                                                                                            <span class="" style={{ fontSize: "20px" }}>{btnThree}</span>

                                                                                        </div>
                                                                                        <div class="btn-position button-game-right" style={{ width: "50px", height: "50px" }}></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="fs-4 text-white mt-3">{mintPriceBUSD} BUSD</p>
                                                                    </div> */}


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    {/* <div class="header-view">
                                            <div class="title-name">
                                                <div class="item-info">Total items: <span style={{ color: "rgb(5, 239, 16)" }}>0</span></div>
                                            </div>
                                            <div class="list-check col"></div>
                                            <div class="list-filter">
                                                <div class="dropdown-filter-inside">
                                                    <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Rarity</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Founding</a></li>
                                                            <li><a href="#">Legendary</a></li>
                                                            <li><a href="#">Epic</a></li>
                                                            <li><a href="#">Rare</a></li>
                                                            <li><a href="#">Pacer</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-filter dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="dropdown-toggle btn btn-link" data-bs-toggle="dropdown">Sort by</button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">All</a></li>
                                                            <li><a href="#">Founding</a></li>
                                                            <li><a href="#">Legendary</a></li>
                                                            <li><a href="#">Epic</a></li>
                                                            <li><a href="#">Rare</a></li>
                                                            <li><a href="#">Pacer</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="list-view" style={{ marginLeft: "10px" }}>
                                                        <div class="item-view active"><i class="fas fa-th"></i></div>
                                                        <div class="item-view"><i class="fas fa-th-list"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                                    <div class="list-pick"></div>
                                                </div>
                                        )
                                        
                                    }

                                </div>
                            </div>


                        </div>
                    </div>
                </div>





            </div>



        </div>
    )
}
