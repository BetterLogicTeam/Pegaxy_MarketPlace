import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useHistory,useNavigate } from 'react-router-dom'
import { loadWeb3 } from '../../../apis/api';
import { wireNftContractAbi, wireNftContractAddress } from '../../../utilies/constant';
import Navbar_nav from '../Navbar_market/Navbar_nav'
import ReactPlayer from 'react-player'



export default function My_Iytems({ setModalShow, btnTxt,setshowsell }) {


    let [addtext, setaddtext] = useState("Connect");
    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)
    let nivigating=useNavigate()


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
            for (let i = 0; i <= walletLength; i++) {

                try {
                    let res = await axios.get(`https://gateway.pinata.cloud/ipfs/QmWC48u2Rj84M9ufzFFxSD41AQmq2QFMUhFhiu7aT2DFq8/${walletOfOwner[i]}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    console.log("check", res);
                    let dna = walletOfOwner[i]
                    simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }
            let ttlPage = parseInt(walletLength) / 6;
            ttlPage = Math.ceil(ttlPage);
            setTotalPages(ttlPage)
            console.log("Total Pages", ttlPage);
            if (parseInt(walletLength) > 0) {
                {
                    let myImgArry = []
                    let myNameDate = []

                }
            }
        }
    }


    useEffect(() => {
        allImagesNfts()
        getAccount();

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
                                    <div class="viewPega">
                                        <div class="row justify-content-center">

                                            {
                                                imageArray.map((items, idex) => {
                                                    let index=idex+1;
                                                    return (

                                                        <div class="col-sm-6 col-lg-4" style={{cursor:"pointer"}}>
                                                            <div class="single-live-auction home-2">
                                                                <div class=" home-2"
                                                                 onClick={()=>nivigating("/Details/"+ index)}
                                                                // onClick={()=>setshowsell(true) }
                                                                 
                                                                 >
                                                                    {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
                                                                    <img src={items.imageUrl} alt="Image" width="100%" />
                                                                </div>

                                                                <div class="collection-text home-2 text-center">
                                                                    <a href="#"> NFT {items.num}</a>

                                                                </div>
                                                            </div>
                                                        </div>



                                                    )
                                                })
                                            }

                                        </div>


                                        <div class="list-pick"></div>
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
