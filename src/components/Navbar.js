import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="navbar-nav">
        <LanguageIcon className="navbar-icon" />
        <Link className="navbar-navlink"  to="/">
          <Typography>Home</Typography>
        </Link>
        <Link className="navbar-navlink"  to="/about">
          <Typography>About</Typography>
        </Link>
        <Link className="navbar-navlink"  to="/projects">
          <Typography>Projects</Typography>
        </Link>
        <Link className="navbar-navlink"  to="/contacts">
          <Typography>Contacts</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
