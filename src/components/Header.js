import React, { Component } from 'react';
import "./Header.css"
import NavBar2 from './NavBar2';
import { Fade } from '@material-ui/core';


class Header extends Component {
  state = {}
  render() {
    return (<div className="pt-2 jumbo container-fluid">
      <NavBar2></NavBar2>
      <Fade in={true} timeout={{ enter: 1000, exit: 100 }}>
        <div class="row justify-content-center align-items-center h-100">
          <div class="col">
            <div class='w-50 text-center ml-auto mr-auto'>
              <h1 className='text-white text-center'>Aaron Chu</h1>
              <hr className='Hr-line text-white'></hr>
              <h6 className='text-white text-center'>Software Engineer</h6>
            </div>
          </div>
        </div>
      </Fade>
    </div>);
  }
}

export default Header;