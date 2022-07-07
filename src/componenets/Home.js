import React from 'react';
import { useEffect } from 'react';
import gaurav from '../images/gaurav.jpeg';
import gaurav1 from '../images/gaurav1.jpeg';
import '../componenets/css/Home.css';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, []);


    return (
        <>
            <section data-aos="fade-in" className="section1" id="home">
                <div className="row" style={{ width: "100%" }}>
                    <div className='col-sm-8'>
                        <div className="introduction">
                            <div  data-aos="zoom-in" className="row" style={{ width: "100%" }}>
                                <div className='col-sm-2'></div>
                                <div className='col-sm-8'>
                                    <div className="top1">
                                        <div className='intro1'>Hello</div>
                                        <div className='intro2'><span style={{ color: "white" }}>I'm </span>
                                            <Typewriter
                                                options={{
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 200,
                                                    strings: [
                                                        "Gaurav", "Developer", "Programmer"
                                                    ],
                                                }} />
                                        </div>
                                        {/* <div className='intro3'>Front End Web Developer</div> */}
                                        <div className='intro4'>
                                            <p>I'm pursuing Bachelor of Engineering focuse in Computer Science and Engineering from Chandigarh University, Mohali, Punjab. </p>
                                        </div>
                                        <div className="button1">
                                            <a href="#contact"><button id="btn1" class="btn btn-dark">HIRE ME</button></a>
                                            <Link to="/RESUMEGG.pdf" target="_blank" download><button id="btn2" class="btn btn-dark">DOWNLOAD CV</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2'>
                                    <div className="image2">
                                        <img className="gaurav" src={gaurav} alt="Gaurav"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </section>
            <section data-aos="fade-up" className='section2'>
                <div className="container">
                <div className="row" style={{ width: "100%" }}>
                    {/* <div className='col-sm-2'></div> */}
                    <div className='col-sm-12'>
                        <div className='row' style={{ width: "100%" }}>
                            <div className='col-sm-5'>
                                <div className="image3" data-aos="fade-up">
                                    <img data-aos="fade-up" className="gaurav2" src={gaurav1} alt="Gaurav"></img>
                                </div>
                            </div>
                            <div id="col6" className='col-sm-7'>
                                <div className="aboutme">
                                    <div className='underline'>
                                        <div className='about' id="about" data-aos="fade-up">
                                            <span data-aos="fade-up" style={{ color: "rgb(255, 193, 77)" }}>ABOUT </span>ME
                                        </div>
                                    </div>
                                    <div className="full" data-aos="fade-up">
                                        <p>I'm <span style={{ color: "rgb(255, 193, 77)" }}>Gaurav Gupta</span>  and I'm   <span style={{ color: "rgb(255, 193, 77)" }}><Typewriter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 200,
                                                strings: [
                                                    " Developer", " Programmer", " Designer"
                                                ],
                                            }} /></span>

                                        </p>
                                    </div>
                                    <div className='aboutpara'>
                                        <p data-aos="fade-up">An analytical and detail oreinted <span style={{ color: "rgb(255, 193, 77)" }}>Programmer</span> and <span style={{ color: "rgb(255, 193, 77)" }}>Web Developer</span> for web applications as a fresher in building, implementing, integrating, testing and customizing with latest technology and tools with the commitment to viable and easily functional web solutions.</p><br />
                                        <p data-aos="fade-up">I'm pursuing <span style={{ color: "rgb(255, 193, 77)" }}>Bachelor of Engineering</span> focuse in Computer Science and Engineering from <span style={{ color: "rgb(255, 193, 77)" }}>Chandigarh University, Mohali, Punjab.</span> </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className='col-sm-1'></div> */}
                </div>
                </div>
            </section>
        </>
    );
}
