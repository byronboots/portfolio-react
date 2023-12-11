import star from "../assets/img/star.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm continuing to grow my skillset through school and other online resources as well as on the job experience building solutions to real-world challenges<br></br> Check out a few of my highlighted skills below: </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={star} alt="star" />
                                <h5>Software Engineering</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Automation</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Collaboration</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Program Management</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Innovation</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Bash</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>PowerBI</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>CI/CD</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>DevOps</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="star" />
                                <h5>Object Oriented Programming</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}