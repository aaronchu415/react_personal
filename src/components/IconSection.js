import React, { Component } from 'react';
import "./IconSection.css"
import Button from '@material-ui/core/Button';

class IconSection extends Component {

  render() {
    return (
      <div className='IconSection p-5 container-fluid'>
        <div class="row justify-content-center align-items-center">
          <div class="iconBox d-flex flex-column justify-content-center align-items-center col-md-3 col-5">
            <Button href='https://www.linkedin.com/in/aaron-chu4/' id='LinkedinLogo'></Button>
            <h5 className='m-3 text-white'>Linkedin</h5>
          </div>
          <div class="iconBox d-flex flex-column justify-content-center align-items-center col-md-3 col-5">
            <Button href='https://leetcode.com/aaronchu415/' id='LeetCodeLogo'></Button>
            <h5 className='m-3 text-white'>Algorithms</h5>
          </div>
          <div class="iconBox d-flex flex-column justify-content-center align-items-center col-md-3 col-5">
            <Button href='https://github.com/aaronchu415' id='GithubLogo'></Button>
            <h5 className='m-3 text-white'>Github</h5>
          </div>
          <div class="iconBox d-flex flex-column justify-content-center align-items-center col-md-3  col-5">
            <Button href='https://drive.google.com/file/d/1b5Q3eHWQhwHU5kdiEw1v1HY1WMRQHdYm/view' id='ResumeLogo'></Button>
            <h5 className='m-3 text-white'>Resume</h5>
          </div>
        </div>
      </div>);
  }
}

export default IconSection;
