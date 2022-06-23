import React, { useEffect, useState } from 'react'
import './Model_style.css'
import {Modal} from 'react-bootstrap'
import { loadWeb3 } from '../../../apis/api';




export default function Model_connect({setModalShow,modalShow,getAccount,btnTxt}) {

   // useEffect(() => {
   //     setInterval(() => {
   //         getAccount();
   //     }, 1000);
   // }, []);
   
    

function MyVerticallyCenteredModal(props) {
   return (

       <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header closeButton >
        
       </Modal.Header>
       <Modal.Body >
   
 
          <div class="viewAlert">
             <div class="bx-login">
                <div class="login-header">
                   <div
                      style={{overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "272px", height: "80px"}}>
                      <img alt="" src="images/pegaxy.png" decoding="async" data-nimg="fixed" class="logo-brand" className='items_img_here' style={{paddingBottom:'2rem'}}  /><noscript></noscript>
                   </div>
                   <p class="mt-3 mb-3">You need a Polygon wallet to use Pegaxy</p>
                </div>
                <div class="login-btn">
                   <div class="button-game primary" style={{height: "36px"}}>
                      <div class="btn-position button-game-left" style={{width: "14.4px", height: "36px"}}></div>
                      <div class="btn-position button-game-content"
                         style={{height: "36px", paddingRight: "14.4px", paddingLeft: "14.4px"}}>
                         <div class="button-game-icon i-left">
                            <div
                               style={{ overflow: "hidden", boxSizing: "border-box", display: "inline-block", position: "relative", width: "24px", height: "24px" }}>
                               <img alt="" src="images/metamask.png" decoding="async" data-nimg="fixed"
                                  class="game-icon-img"
                                  className='items_img_here'/><noscript></noscript>
                            </div>
                         </div>
                         <div class="content-name">
                            <span class="content-name-sub"></span>
                            <span class="content-name-title" style={{fontSize: "18px"}} onClick={()=>getAccount()} >{btnTxt}</span>
                         </div>
                      </div>
                      <div class="btn-position button-game-right" style={{width: "14.4px", height: "36px"}}></div>
                   </div>
                </div>
             </div>
        
    </div>

    </Modal.Body>
  
   </Modal>

   );
 }
  return (
    <div>
          {/* <button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        
        

    </div>
  )
}
