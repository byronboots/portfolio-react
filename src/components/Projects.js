import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Design & development of my own website",
      link: "https://github.com/byronboots/portfolio-react",
      imgUrl: projImg1,
    },
    {
      title: "ChatterDog",
      description: "ChatterDog is a Flask application enabled via the PaLM API from Google and deployed using Google Cloud Run. It consumes user inputs and responds accordingly. The model has been tuned to respond as a dog would.",
      link: "https://github.com/byronboots/chatterdog",
      imgUrl: projImg4,
    },
    {
      title: "Running Rainbow",
      description: "Running Rainbow is a Flask powered website with a MySQL DB used for storing running shoe details for a fictitious running store. The website was developed using agile development practices and asynchronous communication with a partner and with continuous feedback from other students.",
      link: "https://github.com/byronboots/runningrainbow",
      imgUrl: projImg5,
    },
    {
      title: "HashMap",
      description: "A functioning hashmap implemented from scratch",
      imgUrl: projImg3,
    },
    {
      title: "Checkers",
      description: "A checkers game with established rules, played through the terminal",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects I've developed (includes both public and private repos, private repos won't have a link)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(3, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>And more projects!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='background'></img>
    </section>
  )
}