import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { loadWeb3 } from '../../../apis/api';
import { wireNftContractAbi, wireNftContractAddress } from '../../../utilies/constant';
import Navbar_nav from '../Navbar_market/Navbar_nav'
import ReactPlayer from 'react-player'
import Web3 from 'web3';
import { CreateNFT, CreateNFT_ABI } from '../../../utilies/Contract';




export default function My_Iytems({ setModalShow, btnTxt, setshowsell }) {


    let [addtext, setaddtext] = useState("Connect");
    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)
    let [Array_NFT, setArray_NFT] = useState([])

    let nivigating = useNavigate()


    const getAccount = async () => {
        let acc = await loadWeb3();
        console.log("ACC=", acc)
        if (acc == "No Wallet") {
            setaddtext("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setaddtext("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setaddtext(myAcc);

        }

    }

    const loadMore = () => {

        let a = finalLimit + 6
        if (a >= mywalletLength) {
            setInitialLimit(initialLimit + 6)
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            console.log("Loading More Up");
            setFinalLimit(mywalletLength)
        } else {
            console.log("Loading More");
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            setInitialLimit(initialLimit + 6);
            setFinalLimit(finalLimit + 6)
        }
    }

    const loadLess = () => {
        let b = finalLimit - 6

        if (b <= 6) {

            setFinalLimit(6);
            setInitialLimit(0);
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1)
            }
        } else {
            setInitialLimit(initialLimit - 6);
            setPageNumber(pageNumber - 1)
            setFinalLimit(finalLimit - 6)

        }
    }
    // const allImagesNfts = async () => {
    //     let acc = await loadWeb3();
    //     if (acc == "No Wallet") {
    //         console.log("wallet");
    //         setaddtext("Connect Wallet")
    //     }
    //     else if (acc == "Wrong Network") {
    //         setaddtext("Wrong Network")
    //     } else if (acc == "Connect Wallet") {
    //         console.log("Connect Wallet");
    //     }
    //     else {
    //         const web3 = window.web3;
    //         let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
    //         let simplleArray = [];
    //         let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
    //         let walletLength = walletOfOwner.length
    //         setMyWalletLength(walletLength)
    //         console.log("walletOfOwner", walletLength);
    //         for (let i = 0; i <= walletLength; i++) {

    //             try {
    //                 let res = await axios.get(`https://gateway.pinata.cloud/ipfs/QmWC48u2Rj84M9ufzFFxSD41AQmq2QFMUhFhiu7aT2DFq8/${walletOfOwner[i]}.png`)
    //                 // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
    //                 let imageUrl = res.config.url;
    //                 console.log("check", res);
    //                 let dna = walletOfOwner[i]
    //                 simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
    //                 setImageArray(simplleArray);
    //             } catch (e) {
    //                 console.log("Error while Fetching Api", e)
    //             }
    //         }
    //         let ttlPage = parseInt(walletLength) / 6;
    //         ttlPage = Math.ceil(ttlPage);
    //         setTotalPages(ttlPage)
    //         console.log("Total Pages", ttlPage);
    //         if (parseInt(walletLength) > 0) {
    //             {
    //                 let myImgArry = []
    //                 let myNameDate = []

    //             }
    //         }
    //     }
    // }


    // useEffect(() => {
    //     allImagesNfts()
    //     getAccount();

    // }, []);


    const Nft_Collection = async () => {
        let acc = await loadWeb3();
        try {
            const web3 = window.web3
            let Data_Array = []
            let contractOf_Own = new web3.eth.Contract(CreateNFT_ABI, CreateNFT)
            let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
            let wallet_Length = WalletOwnOf.length
            console.log("walletOfOwner", wallet_Length);
            let Wallet_URI
            for (let i = 0; i< wallet_Length; i++) {
                let ArryData = WalletOwnOf[i]
                Wallet_URI = await contractOf_Own.methods.tokenURI(ArryData).call();
                console.log("Image", Wallet_URI);
                let res = await axios.get(Wallet_URI);
                console.log("Res", res.data);
                let Image_Url = res.data.image
                let NFT_Name = res.data.title

                Data_Array = [...Data_Array, { Tokenid: ArryData, Url: Image_Url, price: res.data.name, name: NFT_Name,address:acc }]
                setArray_NFT(Data_Array)
            }
            // console.log("Wallet_URI",Wallet_URI);    

        } catch (e) {
            console.log("Erroe while Call My_cooletion Fuction", e);
        }


    }


    useEffect(() => {
        Nft_Collection()

    }, []);

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
                                            <li class="active">
                                                <div class="item-tab ">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Items" className='text_de'>

                                                        <span class="item-tab-title active">ITEMS</span>
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
                            <div class="bx-content default">
                                <div class="inner-content">
                                    <div class="viewPega ">

                                        <div class="list-pick" >
                                            {
                                                console.log("Array_NFT",Array_NFT)
                                            }

                                            {
                                                Array_NFT.map((items, idex) => {
                                                    let index = idex + 1;
                                                    return (
                                                        <>

                                                            <div class="item-pega">
                                                                <a href="#">
                                                                    <div class="item-box">
                                                                        <div class="item-cover">
                                                                            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "50%" }}></div>
                                                                                <img alt="" src={items.Url} decoding="async" data-nimg="responsive" class="item-cover-img" className='items_img_here ' />
                                                                                {/* <noscript></noscript> */}
                                                                            </div>
                                                                        </div>
                                                                        <div class="item-header">
                                                                            <div class="info-atts">
                                                                                <div class="info-name">
                                                                                    <div class="item-info-title">{items.name}</div>
                                                                                    <div class="item-info-meta">Token Id</div>
                                                                                </div>
                                                                                <div class="info-adds">
                                                                                    <div class="info-adds-title">{ items.address ?.substring(0, 6) + "..." + items.address ?.substring(items.address ?.length - 6)}</div>
                                                                                    <div class="info-property">
                                                                                        <div class="property-title">
                                                                                            <div class="property-coat">
                                                                                                {items.Tokenid}
                                                                                                {/* <div class="item-coat" style={{ backgroundColor: "rgb(21, 151, 229)" }}></div>
                                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(25, 52, 152)" }}></div>
                                                                                                <div class="item-coat" style={{ backgroundColor: "rgb(21, 151, 229)" }}></div> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <div class="item-class class-pega breed">2</div> */}
                                                                    </div>
                                                                </a>
                                                                <div class="info-action">
                                                                    <div class="action-group">
                                                                        <div class="item-link">
                                                                            <div class="button-game primary" style={{ height: "32px" }} onClick={()=>nivigating("/Details/"+ idex)}>
                                                                                <div class="btn-position button-game-left" style={{ width: "16px", height: "32px" }}></div>
                                                                                <div class="btn-position button-game-content" style={{ height: "32px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                                    <div class="content-name"><span class="content-name-sub"></span><span class="content-name-title" style={{ fontSize: "20px" }}>LISTING</span></div>
                                                                                    <div class="button-game-icon i-right">
                                                                                        {/* <div style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                                                                                            <img alt="" src="images/USDT.png" decoding="async" data-nimg="fixed" class="game-icon-img" className='items_img_here' />
                                                                                            <noscript></noscript>
                                                                                        </div> */}
                                                                                    </div>
                                                                                </div>
                                                                                <div class="btn-position button-game-right" style={{ width: "16px", height: "32px" }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>






                                                        </>)
                                                })
                                            }


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
