import React from 'react';
import'../App.css';
import bbl from '../img/bbl.png'
import circle from '../img/circle.jpg'

function Animation()
{
return (
    <>
<div className="dv4">
            <div className="sani">
                <h1 style={{fontSize: '45px', fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
                    SANNIA-SOFTWARE HOUSE</h1>
                <hr /><br />
                <h2
                    style={{fontStyle: 'italic', fontSize: '35px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
                    SAFE AND SECURE FUTURE</h2><br />
                <button type="button">VISIT MY COMPANY</button>
            </div>
            <div className="bubl">
                <img src={bbl} alt=""/>
                <img src={bbl} alt="" />
                <img src={bbl} alt=""/>
                <img src={bbl} alt=""/>
                <img src={bbl} alt=""/>
                <img src={bbl} alt=""/>
                <img src={bbl} alt=""/>
                <img src={bbl} alt=""/>
            </div>
            <div className="circl">
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
                <img src={circle} alt=""/>
            </div>
        </div>

    </>
)
}
export default Animation;