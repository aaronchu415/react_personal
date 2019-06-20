import React, { Component } from 'react';
import NavBar2 from './NavBar2';
import './ProjectPage.css'

class ProjectPage extends Component {
  state = {}
  render() {
    return (
      <div className="pt-2 background container-fluid">
        <NavBar2></NavBar2>
        <div class='mt-10 w-75 ml-auto mr-auto row'>
          <div class='col-12'>
            <h1 class='text-center text-white'>Course Report</h1>
            <h3 class='text-center text-white'>React Native • Node/Express • Rails • Redis • PostgreSQL</h3>
          </div>
        </div>
        {/* <div class="row justify-content-center align-items-center h-100">
          <div class="col">
            <div class='w-50 text-center ml-auto mr-auto'>
              <h1 className='text-white text-center'>Aaron Chu</h1>
              <hr className='Hr-line text-white'></hr>
              <h6 className='text-white text-center'>Software Engineer</h6>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ProjectPage;