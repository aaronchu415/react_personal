import React, { Component } from 'react';
import NavBar2 from './NavBar2';
import './ProjectPage.css'

class ProjectPage extends Component {
  state = {}
  render() {
    return (
      <div className="pt-2 background container-fluid">
        <div className='transparent-bg-container'>
          <NavBar2></NavBar2>
          <div class='mt-10 w-75 ml-auto mr-auto row'>
            <div class='col-12'>
              <h1 class='project-name text-white'>Course Report</h1>
              <h4 class='text-white'>React Native • Node/Express • Rails • Redis • PostgreSQL</h4>
              <p class='mt-8 text-white'>Lorem ipsum dolor amet mumblecore hell of schlitz, street art cloud bread fanny pack fingerstache 3 wolf moon. Tote bag celiac polaroid, enamel pin irony af PBR&B heirloom. Whatever lumbersexual thundercats, craft beer small batch vape put a bird on it jianbing prism drinking vinegar air plant. Health goth fam chartreuse meggings actually selvage sartorial yr hot chicken fashion axe biodiesel cred +1. Stumptown tattooed forage copper mug, food truck fam pabst bitters wayfarers deep v chicharrones knausgaard pitchfork mixtape. Scenester keffiyeh put a bird on it raclette, knausgaard cray everyday carry tilde quinoa 3 wolf moon af meditation fanny pack. Hammock brunch raw denim tbh vegan, chicharrones scenester four dollar toast craft beer tousled quinoa gochujang small batch godard.</p>
            </div>
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