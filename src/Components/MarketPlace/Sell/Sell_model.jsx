import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { loadWeb3 } from '../../../apis/api'
import { CreateNFT, CreateNFT_ABI, nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketTokenAddress, nftMarketToken_Abi } from '../../../utilies/Contract'
import { wireNftContractAbi, wireNftContractAddress } from '../../../utilies/constant';
import modal_close from '../../../Assest/modal_close.png'
import cogoToast from 'cogo-toast';
import axios from 'axios'

export default function Sell_model({ showModal, id, setShowModal }) {

    // let [getIputdata, setgetIputdata] = useState()
let selectoption=useRef()


    let [imageArray, setImageArray] = useState([]);
    let [isSpinner, setIsSpinner] = useState(false)


    let inputdatapricehere=useRef()



    let tokenid = id
    
    
    const addOrder = async () => {

        let acc = await loadWeb3();
        let ownadd = acc;
        let web3 = window.web3
        console.log("ACC=", acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {


            try {

                setIsSpinner(true)

                const web3 = window.web3;
                let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c"
                let getIputdata=inputdatapricehere.current.value;

                if (getIputdata == "") {
                    toast.error("Please Enter the Price")
                    setIsSpinner(false)
                }
                else {

                    setIsSpinner(true)


                    if (getIputdata <= 0) {
                        toast.error("Please Enter Price Greater the 0")
                        setIsSpinner(false)
                        // setIsSpinner(true)
                        // getIputdata=web3.utils.toWei(getIputdata)

                    }
                    else {

               let web3 = window.web3

                        getIputdata = web3.utils.toWei(getIputdata).toString()
                        getIputdata=getIputdata.toString()


                        let curreny_time = Math.floor(new Date().getTime() / 1000.0)
                        let nftTokeAddress = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                        let TokkenAddress = await nftTokeAddress.methods.Token().call();



                        console.log("tayyab", TokkenAddress)


                        let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, nftMarketTokenAddress);
                        let getodernumberhere = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
                        let nftContractOf =     new web3.eth.Contract(CreateNFT_ABI, CreateNFT);


                        console.log("inputadata", getIputdata);

                        console.log("Own_token_Address", tokenid)
                        console.log("ownadd", ownadd)
                        console.log("curreny_time", curreny_time)
                        console.log("getIputdata", getIputdata)
                        let selecthere = selectoption.current.value;



                        let contractOf_Own = new web3.eth.Contract(CreateNFT_ABI, CreateNFT)
                        let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
                        console.log("WalletOwnOf", WalletOwnOf[id]);
                        let ArryData = WalletOwnOf[id]
                        let Wallet_URI = await contractOf_Own.methods.tokenURI(ArryData).call();
                        console.log("Image", Wallet_URI);
                        let response=await axios.get(Wallet_URI)
                        console.log("response", response.data.image);
                        let getListingPrice = await getodernumberhere.methods.getListingPrice().call();

                        console.log("getListingPrice", getListingPrice);
                     
                        await nftContractOf.methods.setApprovalForAll(nftMarketContractAddress, true).send({
                            from: acc,
                        })
                        setIsSpinner(false)

                        cogoToast.success("Approved Successfuly")
                        setIsSpinner(true)

                        
                        let hash =await getodernumberhere.methods.createMarketItem(tokenid, getIputdata, 1, false, curreny_time, CreateNFT).send({
                            from: acc,
                            value: getListingPrice,
                            feelimit: 100000000000
                        })
                        setIsSpinner(false)
                        hash = hash.transactionHash
                        console.log("hash", hash);
                        let getItemId = await getodernumberhere.methods.tokenIdToItemId(CreateNFT, tokenid).call();
                        let MarketItemId = await getodernumberhere.methods.idToMarketItem(getItemId).call();
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
                  
                        let postapiPushdata = await axios.post('https://pegaxy-openmarket.herokuapp.com/open_marketplace', {
                            "useraddress": acc,
                            "itemId": itemId,
                            "nftContract": nftContract,
                            "tokenId": tokenid,
                            "owner": acc,
                            "price": getIputdata,
                            "sold": sold,
                            "isOnAuction": isOnAuction,
                            "bidEndTime": bidEndTime,
                            "name": response.data.title,
                            "url": response.data.image,
                            "txn": hash,
                            "category":selectoption

                          })
                          console.log("what is post api response in sell",postapiPushdata);
                    
                        cogoToast.success('Transion Compelete');
                    }
                }
            }
            catch (e) {
                console.log("Error while addOrder ", e)
                setIsSpinner(false)


            }
        }
    }

    return (
        <div>


            <Modal
                show={showModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton onClick={() => setShowModal(false)} >
        
              </Modal.Header> */}
             {

                    isSpinner ? (<>
                        <span className='span_main'>
                            <img alt="" srcset="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif 1x, https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif 2x" src="https://cdn.pegaxy.io/statics/play/public/v4/images/modal/pega_run.gif" decoding="async" data-nimg="fixed" class="alert-icon-img" />
                        </span>
                        <div class="viewAlert">
                            <img src={modal_close} alt="" className='img_model_icon ms-auto ' width="10%" onClick={() => setShowModal(false)} />

                            <div class="bx-login">
                                <div class="login-header">

                                    <p class=" ">Please Enter Sell Value in input Area</p>
                                </div>
                                <div className="single-seller ">


                                    <input
                                        type="text"
                                        placeholder="Enter Sell Value in ETH"
                                        className="d-block btn btn-bordered-white mt-0 ml-4 text-white sell_input"
                                        id="bid"
                                        ref={inputdatapricehere}
                                        // onChange={(e) => setgetIputdata(e.target.value)}

                                    />
                                    
                            <select
                                name="days"
                                class="dropdown__filter mt-2"
                                id=""
                                style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
                                ref={selectoption}
                            >
                                <option value="" selected disabled hidden >
                                   <span className='color_chnge' style={{color:"white"}}> Select category</span>
                                </option>
                                <option value="ULE" class="dropdown__select">

                                    ULE
                                </option>
                                <option value="WHE"> WHE</option>
                                <option value="CST"> CST</option>
                         
                            </select>
                                    <div class="action-group   main_div_btn_model" onClick={() => addOrder()}>
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

                        </div>
                    </>) : (<> 
                        <div class="viewAlert">
                            <img src={modal_close} alt="" className='img_model_icon ms-auto ' width="10%" onClick={() => setShowModal(false)} />

                            <div class="bx-login">
                                <div class="login-header">

                                    <p class="mt-n2">Please Enter Sell Value in input Area</p>
                                </div>
                                <div className="single-seller ">


                                    <input
                                        type="text"
                                        placeholder="Enter Sell Value in ETH"
                                        className="d-block btn btn-bordered-white mt-n3 ml-3 text-white sell_input"
                                        id="bid"
                                        ref={inputdatapricehere}

                                        // onChange={(e) => setgetIputdata(e.target.value)}

                                    />
                                    <select
                                name="days"
                                class="dropdown__filter mt-2"
                                id=""
                                style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
                                ref={selectoption}
                            >
                                <option value="" selected disabled hidden >
                                   <span className='color_chnge' style={{color:"white"}}> Select category</span>
                                </option>
                                <option value="ULE" class="dropdown__select">

                                    ULE
                                </option>
                                <option value="WHE"> WHE</option>
                                <option value="CST"> CST</option>
                         
                            </select>
                                    <div class="action-group   main_div_btn_model" onClick={() => addOrder()}>
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

                        </div>

                    </>)
                }



                <Modal.Body className='model_bg'>


                </Modal.Body>

            </Modal>


        </div>
    )
}
