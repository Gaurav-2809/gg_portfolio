import React from 'react'
import '../componenets/css/Resume.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Resume() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    return (
        <>
            <section id="resume">
                <div id="contain" className="container">
                    <div className="headingr" style={{ textAlign: "center" }}>
                        <h1>Resume</h1>
                    </div>
                    <div className="check">
                        <h5>Check My Resume</h5>
                    </div>
                    <div class="row" style={{ width: "100%" }}>
                        <div class="col-sm-6" data-aos="fade-up">
                            <h3 class="resume-title">Summary</h3>
                            <div class="resume-item pb-0">
                                <h4>Gaurav Gupta</h4>
                                <p><em>Innovative and having multi knowledge about technology such as Web Development, DSA, Linux and Networking as a Fresher.</em></p>
                                <p>
                                    <ul>
                                        <li>Rajeev Colony, Gurgaon</li>
                                        <li>+91 9953551807</li>
                                        <li>gauravgupta1875@gmail.com</li>
                                    </ul>
                                </p>
                            </div>

                            <h3 class="resume-title">Education</h3>

                            <div class="resume-item">
                                <h4>Bachelor of engineering(CSE)</h4>
                                <h5>2020 - 2024</h5>
                                <p><em>Chandigarh University, Mohali</em></p>
                                <p>Pursuing Bachelor of Engineering in Computer Science.<br />
                                    CGPA-8.4</p>
                            </div>
                            <div class="resume-item">
                                <h4>School Education</h4>
                                <h5>XII (2019 - 2020)</h5>
                                <p><em>Lions Public School, Gurgaon</em></p>
                                <p>Complete my 12th with 87.8% </p>
                                <h5>X (2017 - 2018)</h5>
                                <p><em>Lions Public School, Gurgaon</em></p>
                                <p>Complete my 10th with 85.8%</p>
                                <div className="buttonn">
                                    <p id="detail">For more details download Resume.</p>
                                    <Link to="/RESUMEGG.pdf" target="_blank" download><button className='btn btn-primary'>Download CV</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6" data-aos="fade-up">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Internship in web development</h4>
                                <h5>2022 - Present</h5>
                                <p><em>Ludhiana, Punjab</em></p>
                                <p>
                                    <ul>
                                        <li>Lead in the design, development, and implementation of the frontend and backend materials.</li>
                                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                        <li>Supervise the assessment of all materials in order to ensure quality and accuracy of the design.</li>
                                    </ul>
                                </p>
                            </div>
                            <h3 class="resume-title">Project</h3>
                            <div class="resume-item">
                                <h4>Accounting Project</h4>
                                <h5>2022 - 2023</h5>
                                <p><em>Ludhiana, Punjab</em></p>
                                <p>
                                    <ul>
                                        <li>Developed many module like (sales, purchase, product management).</li>
                                        <li>Managed tasks at a given time while under pressure</li>
                                        <li>Created 2+ module with full frontend and backend.</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="resume-item">
                                <h4>Web Server(LINUX)</h4>
                                <h5>2022 - 2023</h5>
                                <p><em>Mohali, Punjab</em></p>
                                <p>
                                    <ul>
                                        <li>Build a web server in which hosting of a project is there with proper given ip and all configuration.</li>
                                    </ul>
                                </p>
                            </div>
                            {/* <div class="resume-item">
                                <h4>Quizyfy</h4>
                                <h5>2021 - 2022</h5>
                                <p><em>Mohali, Punjab</em></p>
                                <p>
                                    <ul>
                                        <li>Basically it's about whole university system in which admin, teacher and student portal is there and all data are in save.</li>
                                        <li>Developed many module like (teacher, student, admin).</li>
                                        <li>Managed tasks at a given time while under pressure</li>
                                        <li>Created all module with full frontend and backend.</li>
                                    </ul>
                                </p> */}
                            {/* </div> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
