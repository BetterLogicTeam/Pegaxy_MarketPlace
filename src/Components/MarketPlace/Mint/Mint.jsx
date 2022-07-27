import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Mint.css'
import { getWallet, NftData } from '../../../redux/redux/actions/actions'

import { toast } from "react-toastify";
import { loadWeb3 } from '../../../apis/api';
import { busdNftTokenAbi, busdNftTokenAddress, wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../../../utilies/constant';
import Spinner from '../../Loading_Spinner/Spinner';
import axios from 'axios';
import { useMoralis, useMoralisFile } from 'react-moralis'
import { CreateNFT, CreateNFT_ABI, MintingContractAddress, MintingContract_ABI } from '../../../utilies/Contract';
import { Moralis } from 'moralis'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import zan from '../../../Assest/gameplay-thumbnail2.png'

export default function Mint({ setModalShow, btnTxt }) {
    let dispatch = useDispatch();
    let { acc } = useSelector(state => state.connectWallet);

    console.log("check", acc);
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '0', name: 'NFT Name', description: '' })
    const [nftImage, setNftImage] = useState("")
    let [getInpiut, setGetInput] = useState({ first: "", second: "", third: "", image: "" })
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");
    let [myData, setMydata] = useState(null);
    let [addressacc, setaddressacc] = useState();
    let [isSpinner, setIsSpinner] = useState(false)
    let [myUrl, setMyUrl] = useState()
    const { saveFile, moralisFile } = useMoralisFile()
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, initialize } = useMoralis();

    let [value, setValue] = useState(1)
    let [point, setPoint] = useState(0);
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With JTO");
    let [btnThree, setButtonThree] = useState("Mint With Busd")
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
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonOne("Please Wait While Processing")
                console.log("mintFor BNB");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(MintingContract_ABI, MintingContractAddress);
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
                console.log("maxSupply", maxSupply);
                console.log("ttlSupply", maxLimitprTransaction);

                console.log("mintingbnbPrice", mintingbnbPrice);

                // let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                // console.log("iswhitelist", llisted_check);



                // if (llisted_check == 'true') {
                    if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                        if (paused == true) {
                            if (value < parseInt(maxLimitprTransaction)) {
                                console.log("Minting Value= ", value);
                                console.log("Minting totalMintingPriceBNB= ", totalMintingPriceBNB);

                                totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())
                                await nftContractOf.methods.mint_with_bnb(value).send({
                                    from: acc,
                                    value: totalMintingPriceBNB.toString()

                                })
                                toast.success("Transaction Confirmed")
                                setButtonOne("Mint With BNB")

                            } else {
                                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                setButtonOne("Mint With BNB")

                            }
                        } else {
                            toast.error("Paused is False")
                            setButtonOne("Mint With BNB")

                        }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonOne("Mint With BNB")

                    }
                // }
                // else {
                //     let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

                //     await nftContractOf.methods.mint_with_MATIC(value).send({
                //         from: acc,
                //         value: value * BusdPrice.toString()
                //     })


                //     toast.success("Transaction Confirmed")
                //     setButtonOne("Mint With BNB")


                // }




            } catch (e) {
                console.log("Error while minting ", e)
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
                                    setButtonTwo("Mint With JTO")

                                } else {
                                    toast.error("Out Of Balance")
                                    setButtonTwo("Mint With JTO")

                                }

                            } else {
                                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                setButtonTwo("Mint With JTO")

                            }
                        } else {
                            toast.error("Paused is False")
                            setButtonTwo("Mint With JTO")

                        }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonTwo("Mint With JTO")

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


                    setButtonTwo("Mint With JTO")


                }


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonTwo("Mint With JTO")

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


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed BUSD")
                setButtonThree("Mint With Busd")

            }

        }
    }

    const getMydata = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {

            try {
                console.log("mintFor BUSD");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
                mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
                mintingBusdPrice = parseFloat(mintingBusdPrice)
                setMintPriceBUSD(mintingBusdPrice)

                let mintingWirePrice = await nftContractOf.methods.MinitngPricein_wire().call()
                mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                mintingWirePrice = parseFloat(mintingWirePrice)
                setmintPriceWire(mintingWirePrice);

                let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_BNB().call()
                mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                mintingbnbPrice = parseFloat(mintingbnbPrice)
                setMintPriceBnb(mintingbnbPrice)
            } catch (e) {
                console.log("Error while getting minting Price");
            }
        }
    }


    useEffect(() => {
        setInterval(() => {
            getMydata();

        }, 10000);
        getMydata();
    }, [])



    const IpfsStorage = async (e) => {
        e.preventDefault()
        console.log("nftImage", nftImage.name)
        console.log("formInput", formInput);

        if (nftImage == undefined) {
            toast.error("Please Upload Image")
        } else {
            let nftImageName = nftImage.name;
            if (nftImageName.endsWith(".jpg") || nftImageName.endsWith(".png") || nftImageName.endsWith(".gif") || nftImageName.endsWith(".mp4") || nftImageName.endsWith(".webp") || nftImageName.endsWith(".jpeg") || nftImageName.endsWith(".PNG") || nftImageName.endsWith(".JPG") || nftImageName.endsWith(".JPEG") || nftImageName.endsWith(".jpeg") || nftImageName.endsWith(".GIF") || nftImageName.endsWith(".WEBP") || nftImageName.endsWith(".MP4") || nftImageName.endsWith(".pjpeg") || nftImageName.endsWith(".jfif") || nftImageName.endsWith(".avif")
                || nftImageName.endsWith(".SVG") || nftImageName.endsWith(".svg") || nftImageName.endsWith(".apng") || nftImageName.endsWith(".APNG") || nftImageName.endsWith(".AVIF")
            ) {
                if (formInput.name == '' || formInput.price == '' || formInput.description == '') {
                    toast.error("Please Enter Data In Input Field")

                } else {
                    await authenticate({ signingMessage: "Log in using Moralis" }
                    ).then(async function (user) {
                        console.log("logged in user:", user);
                        const fileIpfs = new Moralis.File(formInput.name, nftImage)
                        await fileIpfs.saveIPFS(null, { useMasterKey: true })
                        console.log("Iamge", fileIpfs._ipfs);
                        let urlimage = fileIpfs._ipfs
                        setMyUrl(fileIpfs._ipfs)
                        let metaData = {
                            image: fileIpfs._ipfs,
                            description: formInput.description,
                            title: formInput.name,
                            name: formInput.price
                        }
                        const fileIpf = new Moralis.File("metadata.json", {
                            base64: btoa(JSON.stringify(metaData))
                        })
                        await fileIpf.saveIPFS(null, { useMasterKey: true })
                        console.log("files", fileIpf._ipfs);
                        let response = await axios.get(fileIpf._ipfs)
                        console.log("what is ipfs data", response.data)
                        let postapiPushdata = await axios.post('https://pegaxy-openmarket.herokuapp.com/nft_market', {
                            "imageurl": response.data.image,
                            "description": response.data.description,
                            "title": response.data.title,
                            "price": response.data.name,

                        })

                        console.log("what is post request response", postapiPushdata)

                        setGetInput(fileIpf._ipfs)

                        CreateNftUR(fileIpf._ipfs)

                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            } else {
                toast.error("Please Upload PNG, JPG, GIF, WEBP or MP4 Data")

            }

        }


        // let res = await axios.get("https://ipfs.moralis.io:2053/ipfs/QmdxwzpRRkfJfwLdqxbm2YsgaMXCopSJhJURLYuYw13S2h");
        // console.log("res", res.data);


    }

    const CreateNftUR = async (url) => {
        setIsSpinner(true)
        let acc = await loadWeb3();
        const web3 = window.web3;
        console.log("myUrl", url);
        try {
            let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
            await nftContractOf.methods.createToken(url).send({
                from: acc,

            });
            setIsSpinner(false)


        } catch (e) {
            console.log("Error While Call Create Nft Function", e);
            setIsSpinner(false)

        }
    }

    const callfunctionhere = async () => {
        let acc = await loadWeb3()
        acc = acc.substring(0, 4) + '...' + acc.substring(acc.length - 4)
        setaddressacc(acc)

    }


    useEffect(() => {

        callfunctionhere()

    }, [])


    return (
        <div>

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
                                                    <Link to="/Items/Mint" className='text_de'>

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
                                                    <Link to="/Items/My_Items" className='text_de'>

                                                        <span class="item-tab-title ">COLLECTION</span>
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
                                                    <Link to="/Items/My_Profile" className='text_de'>

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
                                                        <div className="col-lg-5 mt-4">
                                                            <div className="inner_first_div_img">
                                                                <img src={zan} alt="" width="100%" className='minting_img' />
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-6 mt-4">
                                                            <div className="mint_div_main"> */}
                                                        <div class=" col-lg-7 col-md-12 d-flex flex-column justify-content-start align-items-flex-start">



                                                            <div className='d-flex flex-row justify-content-center pt-lg-5 pt-3'>
                                                                <a style={{ cursor: "pointer" }}><img onClick={() => decreaseValue()} src="https://i.ibb.co/FswxxGJ/Group-187.png" width="60px" /></a>
                                                                <div className='mintboxsss mt-1 ms-4'>{value}</div>
                                                                <a className='ms-4' style={{ cursor: "pointer" }}><img onClick={() => increaseValue()} src="https://i.ibb.co/ZGpn9P7/Group-188.png" width="60px" /></a>
                                                            </div>
                                                            <div class="btnallhere">

                                                                <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                                                    <button
                                                                        onClick={() => myMintBNB()} 
                                                                        className='btn mintbtn firstbtn ms-4 '>{btnOne}</button>
                                                                    <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price : {mintPriceBnb} BNB</p>
                                                                </div>
                                                                {/* <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                                                            <button onClick={() => myMintWire()} className='btn mintbtn '>{btnTwo}</button>
                                                                            <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price :{mintPriceWire} JTO</p>

                                                                        </div>
                                                                        <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                                                            <button onClick={() => myMintBUSD()} className='btn mintbtn firstbtn ms-4'>{btnThree}</button>
                                                                            <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price : {mintPriceBUSD} BUSD</p>

                                                                        </div> */}

                                                            </div>



                                                        </div>
                                                        {/* </div> */}



                                                        {/* <div className="mint-content">
                                                                <div className="mint-item">
                                                                    <div className="quantity">

                                                                        <div class="form-create-item">
                                                                           
                                                                            <h4 class="title-create-item">Upload file</h4>
                                                                            <label class="uploadFile">
                                                                                <span class="filename text-white">{nftImage.name? nftImage.name : ("PNG, JPG, GIF, WEBP or MP4.")}</span>
                                                                                <input type="file" class="inputfile form-control" name="fileInput" id="fileInput"
                                                                                    onChange={(e) => {
                                                                                        e.preventDefault();
                                                                                        setNftImage(e.target.files[0])

                                                                                    }}
                                                                                />
                                                                            </label>
                                                                           
                                                                            <div class="flat-tabs tab-create-item">
   
                                                                                <div class="content-tab">
                                                                                    <div class="content-inner" >
                                                                                        <form action="#">
                                                                                            <h4 class="title-create-item">Price</h4>
                                                                                            <input type="text" placeholder="Enter price for one item (ETH)"
                                                                                                onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                                                                                            />

                                                                                            <h4 class="title-create-item">Title</h4>
                                                                                            <input type="text" placeholder="Item Name" name="metadataName" id="metadataName"
                                                                                                onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                                                                                            />

                                                                                            <h4 class="title-create-item">Description</h4>
                                                                                            <textarea placeholder="e.g. “This is very limited item”" name="metadataDescription" id="metadataDescription" rows="5"  cols="44" className=' text_area'
                                                                                                onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                                                                                            ></textarea>
                                                                                       
                                                                                            {
                                                                                                fileUrl && (
                                                                                                    <img className="rounded mt-4" width="350" src={fileUrl} alt='' />
                                                                                                )
                                                                                            }

                                                                                            <button className="mt-3 btn_create" onClick={IpfsStorage}>
                                                                                                Create NFT
                                                                                            </button>


                                                                                            
                                                                                        </form>
                                                                                    </div>
                                                                                    <div class="content-inner" style={{ display: "none" }}>
                                                                                        <form action="#">
                                                                                            <h4 class="title-create-item">Minimum bid</h4>
                                                                                            <input type="text" placeholder="enter minimum bid" />
                                                                                            <div class="row">
                                                                                                <div class="col-md-6">
                                                                                                    <h5 class="title-create-item">Starting date</h5>
                                                                                                    <input type="date" name="bid_starting_date" id="bid_starting_date" class="form-control" min="1997-01-01" />
                                                                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                    <h4 class="title-create-item">Expiration date</h4>
                                                                                                    <input type="date" name="bid_expiration_date" id="bid_expiration_date" class="form-control" />
                                                                                                </div>
                                                                                            </div>

                                                                                            <h4 class="title-create-item">Title</h4>
                                                                                            <input type="text" placeholder="Item Name" />

                                                                                            <h4 class="title-create-item">Description</h4>
                                                                                            <textarea placeholder="e.g. “This is very limited item”" onChange={(e) => setDescription(e.target.value)}></textarea>
                                                                                        </form>
                                                                                    </div>



                                                                                   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        {/* </div> */}

                                                    </div>
                                                </div>



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
