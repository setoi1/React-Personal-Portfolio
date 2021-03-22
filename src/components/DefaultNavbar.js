import React from 'react';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-scroll';

const DefaultNavbar = () => {
  return (
    <AppBar>
      <Toolbar className="default-navbar-nav">
        <LanguageIcon className="navbar-icon" />
        <Link className="default-navbar-navlink" activeClass="header" to="landing-section" spy={true} smooth={true} duration={1000}>
          <Typography>Home</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="about-section" spy={true} smooth={true} duration={1000}>
          <Typography>About</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="projects-section" spy={true} smooth={true} duration={1000}>
          <Typography>Projects</Typography>
        </Link>
        <Link className="default-navbar-navlink" activeClass="header" to="contacts-section" spy={true} smooth={true} duration={1000}>
          <Typography>Contacts</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

/*
      <Navbar className="default-navbar">
      <LanguageIcon className="language-icon" />
        <Nav className="default-navbar-nav">
          <Nav.Link className="default-navbar-navlink" href="/">Home</Nav.Link>
          <Nav.Link className="default-navbar-navlink" href="/about">About</Nav.Link>
          <Nav.Link className="default-navbar-navlink" href="/projects">Works</Nav.Link>
          <Nav.Link className="default-navbar-navlink" href="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar>
*/

export default DefaultNavbar;
