import React from 'react';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="navbar-nav">
        <LanguageIcon className="navbar-icon" />
        <Link className="navbar-navlink"  to="landing-section" spy={true} smooth={true} duration={750}>
          <Typography>Home</Typography>
        </Link>
        <Link className="navbar-navlink"  to="about-section" spy={true} smooth={true} duration={750}>
          <Typography>About</Typography>
        </Link>
        <Link className="navbar-navlink"  to="projects-section" spy={true} smooth={true} duration={750}>
          <Typography>Projects</Typography>
        </Link>
        <Link className="navbar-navlink"  to="contacts-section" spy={true} smooth={true} duration={750}>
          <Typography>Contacts</Typography>
        </Link>
        <Typography className="navbar-navlink">Message</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
