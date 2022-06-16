import React from 'react'
import {Modal} from 'react-bootstrap'


export default function Auction({setModalShow,modalShow}) {

    function MyVerticallyCenteredModal(props) {
        return (
     
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton >
             
            </Modal.Header>
            <Modal.Body >
        
      
              
     
         </Modal.Body>
       
        </Modal>
     
        );
      }


  return (
    <div>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
