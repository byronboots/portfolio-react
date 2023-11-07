import star from "../assets/img/star.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
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
                                <img src={star} alt="Image" />
                                <h5>Software Engineering</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="Image" />
                                <h5>Automation</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="Image" />
                                <h5>Collaboration</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="Image" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="Image" />
                                <h5>Program Management</h5>
                            </div>
                            <div className="item">
                                <img src={star} alt="Image" />
                                <h5>Innovation</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}