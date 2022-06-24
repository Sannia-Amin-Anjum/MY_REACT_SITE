import React from 'react';
import'../App.css';


function Form()
{

    // var fullImgBox = document.getElementById("fullImgBox")
    // var fullImg = document.getElementById("fullImg");
    // function openFullImg(pic) {
    //     fullImgBox.style.display = "flex";
    //     fullImg.src = pic;
    // }
    // function closeFullImg() {
    //     fullImgBox.style.display = "none";
    // }

    return(
<>

<center>

<section className="FORM">
    <h1>
        WELCOME TO SANNIA-SOFTWARE-HOUSE</h1>
    <div className="FORM_DIV">

        <form className="form" id="form">
            <div className="form">
                <label for="username">EMPLOYEE NAME</label>
                <input type="text" id="username" placeholder="ENTER YOUR FULL NAME" />
                <i className="fa fa-smile-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <i className="fa fa-frown-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <p className="errorMessage">Error Message</p>
            </div>

            <div className="form">
                <label for="email">PERSONAL ENAIL</label>
                <input type="email" id="email" placeholder="ENTER YOUR PROFESSIONAL EMAIL" />
                <i className="fa fa-smile-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <i className="fa fa-frown-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <p className="errorMessage">Error Message</p>
            </div>
            <div className="form">
                <label for="password">ENTER CREDIENTIAL (PASSWORD)</label>
                <input type="password" id="password" placeholder="SET YOUR PASSWORD" />
                <i className="fa fa-smile-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <i className="fa fa-frown-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <p className="errorMessage">Error Message</p>
            </div>

            <div className="form">
                <label for="password2">CONFIRM CREDIENTIAL (PASSWORD) </label>
                <input type="password" id="password2" placeholder="CONFIRM ENTERED PASSWORD" />
                <i className="fa fa-smile-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <i className="fa fa-frown-o" style={{paddingTop: '15px', paddingRight: '15px'}}></i>
                <p className="errorMessage">Error Message</p>
            </div>

            <button>SUBMIT</button>
        </form>

        <div className="classNameFORM">
            <h2>Successful!</h2>
        </div>
    </div>
</section>
</center>


</>
    )
}
export default Form;