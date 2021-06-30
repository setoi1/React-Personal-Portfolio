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
          <p>
            Hello! My name is Ian Seto, currently a unior at Wentworth Institute of Technology studying Computer Science for my major. I am passionate for learning new technologies and building well-designed applications using various languages such as JavaScript, React, Java, and Python.
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
