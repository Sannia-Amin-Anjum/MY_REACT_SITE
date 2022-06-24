import { useState } from 'react';
import "./popup.css";

function Popup(props){



    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                
                <img src={props.img}></img>

                <button type="button" className="btn btn-outline btn-lg bg-light" onClick={()=>props.setButtonTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default Popup;