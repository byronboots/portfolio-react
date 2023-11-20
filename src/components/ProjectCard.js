// ProjectCard.js

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="img-container">
          <img src={imgUrl} alt="project-match" className="proj-img" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <br />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
