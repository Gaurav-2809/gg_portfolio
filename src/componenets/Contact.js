import React from 'react'
import '../componenets/css/contact.css'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, []);

    return (
        <>
            <section data-aos="fade-up" id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Me</h2>
                        {/* <p>Contact Me</p> */}
                    </div>

                    <div className="row" style={{ width: "100%" }}>
                        <div className="col-sm-6 ">
                            <div  data-aos="fade-up" className="info-box">
                            
                                <h4><i class="fas fa-address-card"></i> My Address</h4>
                                <p>38/73 Rajeev Colony Gurgaon, Haryana 122001</p>
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div  data-aos="fade-up" className="info-box">
                                <i className="bx bx-share-alt"></i>
                                <h4><i class="fa fa-share-alt" aria-hidden="true"></i> Social Profiles</h4>
                                <div className="social-links">
                                    <a href="https://www.instagram.com/gaurav_2809/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/smartguptagaurav01/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/GauravG2809"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/gaurav-gupta-572589200"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ width: "100%" }}></div>
                        <div className="col-sm-6 ">
                            <div data-aos="fade-up" className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h4><i class="fa fa-envelope" aria-hidden="true"></i> Email Me</h4>
                                <p>gauravgupta1875@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div data-aos="fade-up" className="info-box">
                                <i className="bx bx-phone-call"></i>
                                <h4><i class="fa fa-phone" aria-hidden="true"></i> Call Me</h4>
                                <p>+91 9953551807</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        © 2022 by Gaurav Gupta   |   All rights reserved.<br/>
                        © Designed by <span style={{ color: "rgb(255, 193, 77)" }}>Gaurav Gupta</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
