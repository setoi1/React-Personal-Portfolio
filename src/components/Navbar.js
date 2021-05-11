import React from 'react';
import { AppBar, Toolbar, Button, Typography  } from '@material-ui/core';
import { Link } from 'react-scroll';
import LanguageIcon from '@material-ui/icons/Language';
import MailIcon from '@material-ui/icons/Mail';

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
        <Button className="navbar-navlink" disabled>
          <MailIcon className="navbar-navlink"/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
