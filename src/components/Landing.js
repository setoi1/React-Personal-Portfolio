import React from 'react';
import { Button } from '@material-ui/core';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="section-header-text">
        <h3>Explore</h3>
      </div>
      <Button className="landing-button" variant="contained" href="/about">
        Enter
      </Button>
      <video autoPlay="autoplay" loop={true} muted id="myVideo">
        <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4"/>
      </video>

    </div>
  );
}

export default Landing;
