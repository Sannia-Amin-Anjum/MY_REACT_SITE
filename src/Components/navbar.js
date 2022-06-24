import React from 'react';
import'../App.css';


function Navbar()
{

    return(
<>
<nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-around">
              <a className="navbar-brand" href="#" >SAW</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex align-items-center " style={{height: '70px'}}>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">HOME</a>
                      </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">GALLERY</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">INFORMATION</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">ABOUT</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit" style={{color: 'white'}}>Search</button>
                </form>
              </div>
            </div>
          </nav>

</>
    )
}
export default Navbar;