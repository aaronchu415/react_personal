import React, { Component } from 'react';
import "./AboutMe.css"

class AboutMe extends Component {
  state = {}
  render() {
    return (
      <div id='about' className='About-Me container-fluid'>
        <div class="row justify-content-center align-items-center">
          <div class="aboutMePicture col-md">
          </div>
          <div class="col-md d-flex pl-5 pr-5 justify-content-center align-items-center aboutMeDescription">
            <div class='opacity'></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <h3>About Me</h3>
                </div>
                <div class="col-lg-9">
                  <p>Aaron started his career as an auditor and hedge fund accountant. After 5
                      years in the
                      finance industry he left his career in accounting to pursue a career in technology. He is
                      current a full-stack software developer residing in San Francisco Bay Area.
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default AboutMe;