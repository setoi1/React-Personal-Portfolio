import React from 'react';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="default-navbar-nav">
        <LanguageIcon className="navbar-icon" />
        <Link className="default-navbar-navlink" activeClass="header" to="landing-section" spy={true} smooth={true} duration={750}>
          <Typography>Home</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="about-section" spy={true} smooth={true} duration={750}>
          <Typography>About</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="projects-section" spy={true} smooth={true} duration={750}>
          <Typography>Projects</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="contacts-section" spy={true} smooth={true} duration={750}>
          <Typography>Contacts</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;