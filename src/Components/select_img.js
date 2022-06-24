import React from 'react';
import'../App.css';
import img9 from '../img/img9.PNG'
import img10 from '../img/img10.PNG'
import img11 from '../img/img11.PNG'
import img12 from '../img/img12.PNG'
import img13 from '../img/img13.PNG'
import img14 from '../img/img14.PNG'
import {useState} from 'react'




function Form()
{

   

    const [imgselected, setImgSelected] = useState(img9);

    function myFuntion(imgx) {
        setImgSelected(imgx);
    }

    return(
<>

<div className="click_container">
    
        <div className="product">
            <h1>
                OUR SOFTWARE-TOOLS</h1>
            <div className="product_img">
                <img src={img9} alt="" onClick={()=>myFuntion(img9)} />
                <img src={img10} alt="" onClick={()=>myFuntion(img10)}/>
                <img src={img11} alt="" onClick={()=>myFuntion(img11)}/>

            </div>
            <div className="product_img">
                <img src={img12} alt="" onClick={()=>myFuntion(img12)}/>
                <img src={img13} alt="" onClick={()=>myFuntion(img13)}/>
                <img src={img14} alt="" onClick={()=>myFuntion(img14)}/>

            </div>
        </div>

        <div className="img_container">
            <h1>YOUR SELECTED IMAGE </h1><br/>
            <img src={imgselected} id="imagebox" alt=""/>
        </div>

        </div>

</>
    )
}
export default Form;