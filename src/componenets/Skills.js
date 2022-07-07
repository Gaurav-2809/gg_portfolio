import React from 'react'
import '../componenets/css/skills.css';
import Carousel from 'react-bootstrap/Carousel'
import harshit from '../images/harshit.jpeg';
import skill from '../images/skill.jpg';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, []);

    return (
        <>
            <section id='hire'>
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="hiremefor"><span style={{ color: "rgb(255, 193, 77)" }}>Hire</span> me for...</div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="container">
                    <div className="row" style={{ width: "100%" }}>
                        <div  data-aos="fade-up" className="col-sm-4">
                            <div className="box1">
                                <div className="icon2">
                                    <i class="fa fa-laptop" aria-hidden="true"></i>
                                </div>
                                <h5>Web development</h5>
                                <p>I have good knowledge and ensure correct implementation of my knowledge in Web Development to develop Web Aplications. I'm quietly confident in Frontend and Backend Development  </p>
                            </div>
                        </div>
                        <div   data-aos="fade-up" className="col-sm-4">
                            <div className="box1">
                                <div className="icon2">
                                    <i class="fa fa-database" aria-hidden="true"></i>
                                </div>
                                <h5>DSA</h5>
                                <p> I love to do competitive programming and have a full knowledge of DSA using C++. And I'm 3 star coder in Problem Solving in Hackerrank. I mainly use GFG and leetcode for the coding.</p>
                            </div>
                        </div>
                        <div  data-aos="fade-up" className="col-sm-4">
                            <div className="box1">
                                <div className="icon2">
                                    <i class="fa fa-linux"></i>
                                </div>
                                <h5>Linux</h5>
                                <p>I have a high dose of knowledge of Linux at administration level and file system. I have also configure my own server by hosting a website. I have also a little bit knowledge of networking in Linux.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="text">SKILLS</div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="container">
                    <div className='row' style={{ width: "100%" }}>
                        <div data-aos="fade-up" className="col-sm-6" id="coln1">
                            <div className='para2'>
                                <p data-aos="fade-up"> Basically I'm a Web developer and Software Developer having knowledge of Frontend and Backend using HTML, CSS, JS, REACT, PHP, AJAX. I'm also a programmer and do Comeptitve Programming using C++ and JAVA on various platform. </p><br />
                                <p data-aos="fade-up">Also I am having good knowledge of UI/UX design using some tools like Figma and Adobe XD. Also I know about operating system that is LINUX in which I know about administration system and file system and user system.</p><br />
                                <p data-aos="fade-up">Now apart from these skills, I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. I'm constantly into learning new concepts to add to my arsenal.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-sm-6" id="coln">
                            <div className="image">
                                <img id="class" src={skill} alt="skill" />
                            </div>

                        </div>

                    </div>
                    <div className='row' style={{ width: "100%" }}>
                        <div className="col-sm-6" data-aos="fade-up">
                            <strong>HTML: 100%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>CSS: 100%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>JAVASCRIPT: 70%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>C++: 75%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                        </div>
                        <div className="col-sm-6" data-aos="fade-up">
                            <strong>REACT JS: 75%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>PHP: 90%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>MY SQL: 80%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                            <strong>LINUX: 70%</strong>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div><br />
                        </div>
                    </div>
                </div>
            </section>
            <section id="recommendsection" data-aos="fade-up">
                <div className="container">
                    <div className="recommend">
                        <h1>Recommendations</h1>
                    </div>
                    <div className="recommend1">
                        Here goes some of the recommendations given by people whom I worked with or whom I worked for, directly or indirectly :
                    </div><br />
                    <Carousel>
                        <Carousel.Item>
                            {/* <h1>hello</h1> */}
                            <div className="imageharshit">
                                <img id="harshit" src={harshit} alt="harshit" />
                            </div>
                            <Carousel.Caption>
                                <h3>NiceSnippets.com slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* <h1>hello</h1> */}
                            <div className="imageharshit">
                                <img id="harshit" src={harshit} alt="harshit" />
                            </div>
                            <Carousel.Caption>
                                <h3> label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}
