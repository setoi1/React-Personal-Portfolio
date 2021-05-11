import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@material-ui/core';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="landing-container">
        <div className="section-header-text">
          <h3>Explore</h3>
        </div>
        <div className="page-transition">
          <Link className="about-section-link"  to="about-section" spy={true} smooth={true} duration={750}>
            <Button className="about-arrow-button"> 
              <ArrowDropDownCircleIcon className="page-transition" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
