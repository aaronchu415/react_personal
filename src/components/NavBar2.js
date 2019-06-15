import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./NavBar2.css"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Button className="logo navbar-brand" href="#"><span className='logo'></span></Button>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Button className="nav-link" href="#">Home <span className="sr-only"></span></Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" href="#about">About</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" href="#skills">Skills</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" href="#projects">Projects</Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );

}