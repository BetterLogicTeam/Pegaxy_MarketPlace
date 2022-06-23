import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { loadWeb3 } from '../../../apis/api'
import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../../../utilies/Contract'
import modal_close from '../../../Assest/modal_close.png'

export default function Sell_model({ showModal, id, setShowModal }) {

    const [getIputdata, setgetIputdata] = useState()

    let [imageArray, setImageArray] = useState([]);
    let [isSpinner, setIsSpinner] = useState(false)



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
                setIsSpinner(true)

                const web3 = window.web3;
                let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c"
                // let getIputdata=inputdata_price.current.value;

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
                        setIsSpinner(false)

                        toast.success("Approved Successfuly")
                        setIsSpinner(true)

                        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
                        await nftContractOf.methods.createMarketItem(tokenid, getIputdata, 1, false, curreny_time, ownadd).send({
                            from: acc,
                            value: getListingPrice,
                            feelimit: 10000000000
                        })
                        setIsSpinner(false)


                        toast.success("Transion Compelete")
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
                                onChange={(e) => setgetIputdata(e.target.value)}

                            />
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
                </>):(<>
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
                                onChange={(e) => setgetIputdata(e.target.value)}

                            />
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
