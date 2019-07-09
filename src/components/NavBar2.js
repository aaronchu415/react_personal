import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink as Link } from 'react-router-hash-link';


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

export default class NavBar extends Component {

  state = {
    navCollapse: false
  }

  handleClick = () => {

    this.setState(st => ({ navCollapse: !st.navCollapse }))
  }

  render() {

    let linkColor
    if (this.props.fixed) linkColor = 'text-light'
    else linkColor = !this.state.navCollapse ? 'text-dark' : 'text-light'

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/"><Button className="logo navbar-brand" href="#"><span className='logo'></span></Button></Link>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span onClick={this.handleClick} className="navbar-toggler-icon text-dark"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/"><Button className={`nav-link ${linkColor}`}>Home <span className="sr-only"></span></Button></Link>
              </li>
              <li className="nav-item">
                <Link to="/#about"><Button className={`nav-link ${linkColor}`}>About</Button></Link>
              </li>
              <li className="nav-item">
                <Link to="/#projects"><Button className={`nav-link ${linkColor}`}>Projects</Button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}
