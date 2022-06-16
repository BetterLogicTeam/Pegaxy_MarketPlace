import React, { useState } from 'react'
import './Auction_style.css'
import Modal from 'react-bootstrap/Modal'


export default function Auction_model({Auctionmodelopen,setAuctionmodelopen,id}) {
    const [getIputdata, setgetIputdata] = useState()

  return (
    <div>
         <Modal
                show={Auctionmodelopen}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                  <Modal.Header closeButton onClick={() => setAuctionmodelopen(false)} >
        
              </Modal.Header>
                <div class="viewAlert">
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
                            // ref={inputdata_price}
                            />
                            <div class="action-group   main_div_btn_model" >
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


                <Modal.Body className='model_bg'>


                </Modal.Body>

            </Modal>
        

    </div>
  )
}
