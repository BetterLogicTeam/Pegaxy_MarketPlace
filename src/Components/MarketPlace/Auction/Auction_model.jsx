import React, { useState } from 'react'
import './Auction_style.css'
import Modal from 'react-bootstrap/Modal'
import { loadWeb3 } from '../../../apis/api'
import { toast } from 'react-toastify'
import { CreateNFT, CreateNFT_ABI, nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../../../utilies/Contract'
import { useRef } from 'react'
import axios from 'axios'



export default function Auction_model({ Auctionmodelopen, setAuctionmodelopen, id }) {
    const [getIputdata, setgetIputdata] = useState()
    let [isSpinner, setIsSpinner] = useState(false)

    let selectoption = useRef();
    let selectcategory = useRef();


    const addOrder = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        setIsSpinner(true)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected");
            setIsSpinner(false)

        } else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net");
            setIsSpinner(false)

        } else {
            try {
                setIsSpinner(true)

                const web3 = window.web3;
                let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c";
                let ownadd = acc;
                let tokenid = 18;
                let value_price = getIputdata;
                let selecthere = selectoption.current.value;
                let setdata = selectcategory.current.value


                console.log("ownaddress", value_price);
                if (value_price == " ") {
                    toast.error("Please enter the value")
                    setIsSpinner(false)

                } else {
                    // if (current_time_and_days > curreny_time) {
                    // }

                    setIsSpinner(true)


                    if (selecthere <= 0) {
                        toast.error("Please Select the Days")
                        setIsSpinner(false)

                    } else {
                        setIsSpinner(true)



                        value_price = web3.utils.toWei(value_price);
                        let curreny_time = Math.floor(new Date().getTime() / 1000.0);
                        let current_time_and_days = 60 * selecthere;
                        current_time_and_days = current_time_and_days + curreny_time;

                        // console.log("selecthere", current_time_and_days);
                        // console.log("current_time_and_days", current_time_and_days);
                        // console.log("curreny_time", curreny_time);
                        let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
                        let nftContractInstance = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
                        let nftContractOfNFT = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);

                        // const getItemId = await nftContractInstance.methods.tokenIdToItemId(ownadd, tokenid).call();

                        // console.log("tokenIdToItemId", getItemId);
                        // let response=await axios.get('https://pegaxy-openmarket.herokuapp.com/nft_market_history?id=100')
                        // console.log("name", response.data.data);
                        // response.data.data.map((items,index)=>{
                        //     console.log("title",items.title);
                        //     console.log("Image",items.imageurl);

                        // })
                        let contractOf_Own = new web3.eth.Contract(CreateNFT_ABI, CreateNFT)
                        let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
                        console.log("WalletOwnOf", WalletOwnOf[id]);
                        let ArryData = WalletOwnOf[id]
                        let Wallet_URI = await contractOf_Own.methods.tokenURI(ArryData).call();
                        console.log("Image", Wallet_URI);
                        let response=await axios.get(Wallet_URI)
                        console.log("response", response.data.image);


                        let getListingPrice = await nftContractInstance.methods.getListingPrice().call();

                        await nftContractOfNFT.methods.setApprovalForAll(nftMarketContractAddress, true).send({
                            from: acc,
                        })

                        toast.success("Approve SuccessFul")

                        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

                        let hash = await nftContractOf.methods.createMarketItem(tokenid, value_price, 1, true, current_time_and_days, CreateNFT).send({
                            from: acc,
                            value: getListingPrice,
                        });
                        hash = hash.transactionHash
                        // console.log("hash", hash);
                        // setIsSpinner(false)
                        let getItemId = await nftContractOf.methods.tokenIdToItemId(CreateNFT, tokenid).call();
                        let MarketItemId = await nftContractOf.methods.idToMarketItem(getItemId).call();
                        console.log("MarketItemId", MarketItemId)
                        let bidEndTime = MarketItemId.bidEndTime;
                        let isOnAuction = MarketItemId.isOnAuction;
                        let itemId = MarketItemId.itemId;
                        let nftContract = MarketItemId.nftContract;
                        let owner = MarketItemId.owner;
                        let price = MarketItemId.price;
                        let seller = MarketItemId.seller;
                        let sold = MarketItemId.sold;
                        let tokenId = MarketItemId.tokenId;



                        price = web3.utils.fromWei(price)


                        let postapiPushdata = await axios.post('https://pegaxy-openmarket.herokuapp.com/open_marketplace', {
                            "useraddress": acc,
                            "itemId": itemId,
                            "nftContract": nftContract,
                            "tokenId": tokenId,
                            "owner": owner,
                            "price": price,
                            "sold": sold,
                            "isOnAuction": isOnAuction,
                            "bidEndTime": bidEndTime,
                            "name": response.data.title,
                            "url": response.data.image,

                            "txn": hash,
                            "category": setdata
                        })

                        console.log("what is response in auction post api", postapiPushdata);
                        toast.success("Transion Compelete")

                        setIsSpinner(false)

                    }
                }
                // toast.success("Transion Compelete");
            } catch (e) {
                console.log("Error while addOrder ", e);
                setIsSpinner(false)

            }
        }
    };

    return (
        <div>
            <Modal
                show={Auctionmodelopen}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => setAuctionmodelopen(false)} >

                </Modal.Header>



                <Modal.Body className='model_bg'>
                    <div class="viewAlert">
                        <div class="bx-login">
                            <div class="login-header">

                                <p class=" ">Please Enter Auction Value in input Area</p>
                            </div>
                            <div className="single-seller ">
                                <div className="innderdi">
                                <input
                                    type="text"
                                    placeholder="Enter Auction Value in BNB"
                                    className="d-block btn btn-bordered-white mt-n4 text-white sell_input"
                                    id="bid"
                                    onChange={(e) => setgetIputdata(e.target.value)}
                                // ref={inputdata_price}
                                />

                                <select
                                    name="days"
                                    class="dropdown__filter mt-2"
                                    id=""
                                    style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
                                    ref={selectoption}
                                >
                                    <option value="" selected disabled hidden >
                                        <span className='color_chnge' style={{ color: "white" }}> Select Days</span>
                                    </option>
                                    <option value="1" class="dropdown__select">

                                        1 Munites
                                    </option>
                                    <option value="2"> 2 Munites</option>
                                    <option value="5"> 5 Munites</option>
                                    <option value="10"> 10 Munites</option>
                                    <option value="15"> 15 Munites</option>
                                </select>

                                <select
                                    name="days"
                                    class="dropdown__filter mt-4"
                                    id=""
                                    style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
                                    ref={selectcategory}
                                >
                                    <option value="" selected disabled hidden >
                                        <span className='color_chnge' style={{ color: "white" }}> Select category</span>
                                    </option>
                                    <option value="ULE" class="dropdown__select">

                                        ULE
                                    </option>
                                    <option value="WHE"> WHE</option>
                                    <option value="CST"> CST</option>

                                </select>

                                </div>


                               
                                <div class="action-group   main_div_btn_model mt-n2" onClick={() => addOrder()} >
                                    <div class="item-link btn_in_sell">
                                        <div class="button-game primary" style={{ height: "100px" }} >
                                            <div class="btn-position button-game-left" style={{ width: "40px", height: "50px" }}></div>
                                            <div class="btn-position button-game-content" style={{ height: "50px" }}>
                                                <span class="" style={{ fontSize: "20px" }}>Complete Listing</span>

                                            </div>
                                            <div class="btn-position button-game-right" style={{ width: "40px", height: "50px" }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </Modal.Body>

            </Modal>


        </div>
    )
}
