import React from 'react';

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="landing-container">
        <video autoplay="autoplay" loop="true" muted id="myVideo">
          <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4"/>
        </video>
        <div className="section-header-text">
          <h3>Explore</h3>
        </div>
      </div>
    </div>
  );
}

export default Landing;
