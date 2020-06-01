import React from "react";
import { useContext } from "react";
import {Context} from "../Context/userContext"
import { Modal } from "react-bootstrap";

  const Popup = (props) => {

    const {resetGames, popUp,setPopUp} = useContext(Context);
    const handleClose = () => setPopUp(false);
   // const handleShow = () => setShow(true);

    return( 
        <div className="">

      <Modal show={popUp} onHide={handleClose} animation={false}>
        <Modal.Body style={{margin: "20px auto 0 auto",
    fontWeight: "bold",color: "red",
    textTransform: "capitalize"}}>there is no such a game</Modal.Body>
       
          <button className="popup-btn" onClick={resetGames} style={{margin:"50px auto 25px auto", border: "none"}}>start over</button>
        
      </Modal>
        </div>
    )
  }
export default Popup ;