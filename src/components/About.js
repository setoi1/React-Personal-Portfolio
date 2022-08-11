import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="section-header-text">
          <h3>About</h3>
        </div>
        <div className="about-description">
          <p className="about-description-paragraph">
            Hi! My name is Ian Seto and I'm a recent graduate from Wentworth Institute of Technology with a bachelors degree in Computer Sciecne. I'm passionate for learning new technologies and building well-designed applications using various languages such as JavaScript / TypeScript, React, Java, and Python. A few of my hobbies include gaming, traveling, and listening to music.
          </p>
        </div>
        <div className="page-transition">
          <Link className="project-section-link"  to="projects-section" spy={true} smooth={true} duration={750}>
            <Button> 
              <ArrowDropDownCircleIcon className="page-transition"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
