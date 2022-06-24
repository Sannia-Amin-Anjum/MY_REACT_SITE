import React from 'react';
import'../App.css';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import { useState } from 'react';
import Popup from './popup';

function Clkimg()
{
    const [buttonPopup, setButtonPopup] = useState(false);
    const [imgCLicked, setImgSelected] = useState(img1);

    
    function openFullImg(pic) {
        setImgSelected(pic);
        setButtonPopup(true);
    }
   
    return(
<>

<div className="images">
            <div className="full-img" id="fullImgBox">
                <img src={img1}id="fullImg"/>
                <span onclick="closeFullImg()"> X </span>
            </div>
            <h2>
                CLICK ON IMAGES</h2>
            <div className="img-gallery">
                <img src={img1} onClick={()=> openFullImg(img1)}/>
                <img src={img2} onClick={()=> openFullImg(img2)}/>
                <img src={img3} onClick={()=> openFullImg(img3)}/>
                <img src={img4} onClick={()=> openFullImg(img4)}/>
                <img src={img5} onClick={()=> openFullImg(img5)}/>
                <img src={img6} onClick={()=> openFullImg(img6)}/>
                <img src={img7} onClick={()=> openFullImg(img7)}/>
                <img src={img8} onClick={()=> openFullImg(img8)}/>
            </div>
        </div>
        <Popup img={imgCLicked} trigger={buttonPopup} setButtonTrigger={setButtonPopup}/>
</>
    )
}
export default Clkimg;
