import React from 'react';
import gaurav1 from '../images/gaurav.jpeg';
import './css/About.css';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

// import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <section id="about1"  data-aos="fade-up">
                <div className='row' style={{ width: "100%" }}>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        <div className='heading'>
                            <div className='text'>
                                ABOUT
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="row" style={{ width: "100%" }}>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-10'>
                        <div className='para'>
                            <p>
                                I'm a fresher but have did training in a company. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem and bugging at a time. I also love to do competitve programming.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-1'></div>

                </div>
                <div className='container' style={{ width: "100%" }}>
                    <div className='row' style={{ width: "100%" }}>
                        <div className='col-sm-3'>
                            <div className="image1">
                                <img className="gaurav1" src={gaurav1} alt="Gaurav"></img>
                            </div>
                        </div>
                        <div className='col-sm-9'>
                            <div className="row" style={{ width: "100%" }}>
                                <div className="col-sm-6">
                                    <div className='heading'>
                                        <h3>Computer and Science Engineer</h3>
                                    </div>
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                            <div className="row" style={{ width: "100%" }}>
                                <div className='para1'>
                                    <p>I'm both Web Developer and Software Developer. I have full knowledge of frontend, backend and Programming.</p>
                                </div>
                            </div>
                            <div className='row' style={{ width: "100%" }}>
                                <div className='col-sm-5'>
                                    <strong>Birthday: </strong>28th Septmeber 2001<br /><br />
                                    <strong>Phone: </strong>9953551807<br /><br />
                                    <strong>City: </strong>Gurgaon, Haryana<br />
                                </div>
                                <div className='col-sm-2'></div>
                                <div className='col-sm-5'>
                                    <strong>Age: </strong>21<br /><br />
                                    <strong>Degree: </strong>B.E(CSE)<br /><br />
                                    <strong>Mail: </strong>gauravgupta1875@gmail.com<br />
                                </div>
                                <div className='row' style={{ width: "100%" }}>
                                    <div className='para2'>
                                        <p> Living, learning, & leveling up one day at a time. I'm focusing on more to learn and develop myself in more good positions. But still I know web development, Linux, DSA by making project on it. For more information you can download CV attach.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
