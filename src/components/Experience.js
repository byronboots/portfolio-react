import Accordion from 'react-bootstrap/Accordion';
import { BriefcaseFill, CalendarFill, MortarboardFill } from 'react-bootstrap-icons';
import colorSharp from "../assets/img/color-sharp.png"

export function Experience() {
  return (
    <section className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education & Experience</h2>
                        <Accordion className='accordion' alwaysOpen>
                            <Accordion.Item className="accordion-item" eventKey="0">
                                <Accordion.Header className='experience-bx'><BriefcaseFill className='icon'/>  Senior Security Assurance Engineer, GitLab</Accordion.Header>
                                    <Accordion.Body className='experience-p'>
                                        <CalendarFill className='icon'/>October 2020 - Present
                                            <br></br>
                                            <br></br>
                                        I help support the Security division through development of automations to support the ongoing monitoring of security controls. Most of my work is done in Python with some Rego. When I am not developing automations I'm helping evaluate our existing control set to identify efficiencies and areas to improve.
                                            <br></br>
                                            <br></br>
                                        I've been a team member at GitLab since October 2020, originally joining to support the process of going public through an IPO which was accomplished in October 2021.
                                    </Accordion.Body>
                                </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='experience-bx'><BriefcaseFill className='icon'/>Senior Associate IT Advisory, KPMG</Accordion.Header>
                                    <Accordion.Body className='experience-p'>
                                        <CalendarFill className='icon'/>July 2016 - October 2020
                                            <br></br>
                                            <br></br>
                                        During my time at KPMG I led a variety of attestation, assurance and advisory engagements (SOX, SOC 1 and SOC 2) across industries from mid-market to Global 100 companies. I focused heavily on conducting business process and IT design evaluations for clients to then develop and tactically implement strong and scalable risk management frameworks and streamline compliance. As part of my work I led teams of staff and  managed the budget for both first year and recurring engagements.
                                    </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='experience-bx'><MortarboardFill className='icon'/>BS Computer Science, Oregon State University</Accordion.Header>
                                    <Accordion.Body className='experience-p'>
                                    <CalendarFill className='icon'/>September 2022 - December 2024 (Anticipated)
                                        <br></br>
                                        <br></br>
                                    I'm a current Computer Science student at Oregon State University with anticipated graduation in December 2024. I've completed courses in Python Development, Data Structures, Algorithms, Discrete Structures, Web Development, Architecture and Assembly Development, and Database Management. During my time in the program I've gained experience with Python, JavaScript, SQL and NoSQL DBs, HTML, CSS, x86 Assembly, Git, React, Flask, Bash and other technologies and frameworks.
                                    <br></br>
                                    <br></br>
                                    I've also participated in sponsored Hackathons and school sponsored events to gain additional experience and apply my learned skills. Building outside of school, I've enjoyed playing around with Web Development, Security, and puzzle solving through activities such as Advent of Code.
                                    </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='experience-bx'><MortarboardFill className='icon'/>BS Management Information Systems, University of Montana</Accordion.Header>
                                    <Accordion.Body className='experience-p'>
                                    <CalendarFill className='icon'/>August 2012 - May 2016
                                        <br></br>
                                        <br></br>
                                    </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='experience-bx'><MortarboardFill className='icon'/>BS International Business, University of Montana</Accordion.Header>
                                    <Accordion.Body className='experience-p'>
                                    <CalendarFill className='icon'/>August 2012 - May 2016
                                        <br></br>
                                        <br></br>
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
    
  );
}

export default Experience;