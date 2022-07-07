import React, { useState } from 'react';
import '../componenets/css/navbar.css';
// import '../componenets/css/nav';
import { HashLink } from 'react-router-hash-link'
export default function Navigation() {

    const [open,setOpen] = useState(false);
    const handleClick = event => {
        // 👇️ toggle visibility
        setOpen(current => !current);
      };
    
    return (

        
        <>
            <header className='sticky'>
                <nav>
                    <span style={{ fontSize: "2rem", color: "rgb(255, 193, 77)" }}>G</span><span style={{ paddingRight: "1rem", fontSize: "2rem", color: "white" }}>G</span>
                    <span className='gauravgupta' style={{ fontSize: "2rem", color: "rgb(255, 193, 77)" }}>Gaurav </span><span className='gauravgupta' style={{ color: "white", fontSize: "2rem" }}> Gupta</span>
                    <div className="row" style={{ width: "100%" }}>
                        {/* <div className="col-sm-3"></div> */}
                        <div id='headnav' className="col-sm-8">
                            <ul className="mainnavfull">
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="#home">Home</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="#about">About</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="#resume">Resume</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="#hire">Skills</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="#contact">Contact</HashLink>
                                </li>
                                {/* <div className="closeMenu" onClick={handleClick}><i className="fa fa-times"></i></div> */}
                            </ul>
                            <ul className="mainnav" style={{display : open ? "flex" : "none", top : open ? "0" : "-100%"}}>
                                <li className="nav-item">
                                    <HashLink onClick={handleClick} className="nav-link" to="#home">Home</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink onClick={handleClick} className="nav-link" to="#about">About</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink onClick={handleClick} className="nav-link" to="#resume">Resume</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink onClick={handleClick} className="nav-link" to="#hire">Skills</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink onClick={handleClick} className="nav-link" to="#contact">Contact</HashLink>
                                </li>
                                <div className="closeMenu" onClick={handleClick}><i className="fa fa-times"></i></div>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <div className="openMenu" onClick={handleClick}><i className="fa fa-bars"></i></div>
                            <div className="icon1" style={{ textAlign: "left" }}>
                                <a href="https://www.instagram.com/gaurav_2809/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/smartguptagaurav01/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/GauravG2809"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/gaurav-gupta-572589200"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>

    );
    

}