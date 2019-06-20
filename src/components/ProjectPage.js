import React, { Component } from 'react';
import NavBar2 from './NavBar2';
import './ProjectPage.css'
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';

import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProjectPage extends Component {
  state = {}
  render() {
    return (
      <div className="pt-2 background container-fluid">
        <div className='transparent-bg-container'>
          <NavBar2></NavBar2>
          <Fade in={true} timeout={{ enter: 100, exit: 100 }}>

            <div class='mt-10 w-75 ml-auto mr-auto row'>
              <div class='col-12'>
                <h1 class='project-name text-white'>Course Report</h1>
                <h4 class='text-white'>React Native • Node/Express • Rails • Redis • PostgreSQL</h4>
                <p class='mt-6 text-white'>Lorem ipsum dolor amet mumblecore hell of schlitz, street art cloud bread fanny pack fingerstache 3 wolf moon. Tote bag celiac polaroid, enamel pin irony af PBR&B heirloom. Whatever lumbersexual thundercats, craft beer small batch vape put a bird on it jianbing prism drinking vinegar air plant. Health goth fam chartreuse meggings actually selvage sartorial yr hot chicken fashion axe biodiesel cred +1. Stumptown tattooed forage copper mug, food truck fam pabst bitters wayfarers deep v chicharrones knausgaard pitchfork mixtape. Scenester keffiyeh put a bird on it raclette, knausgaard cray everyday carry tilde quinoa 3 wolf moon af meditation fanny pack. Hammock brunch raw denim tbh vegan, chicharrones scenester four dollar toast craft beer tousled quinoa gochujang small batch godard.</p>
              </div>
            </div>
          </Fade>

          <Fade in={true} timeout={{ enter: 1000, exit: 1000 }}>
            <div class='image-carousel-container ml-auto mr-auto row'>
              {/* <div class='mt-4 col-12'>
                <img width='100%' src="https://zdnet1.cbsistatic.com/hub/i/r/2019/04/17/1f68c3a6-495e-4325-bc16-cc531812f0ec/thumbnail/770x433/84ff4194826e8303efb771cd377a854f/chuwi-herobook-header.jpg"></img>
              </div>
              <div class='mt-4 col-12'>
                <img width='100%' src="https://zdnet1.cbsistatic.com/hub/i/r/2019/04/17/1f68c3a6-495e-4325-bc16-cc531812f0ec/thumbnail/770x433/84ff4194826e8303efb771cd377a854f/chuwi-herobook-header.jpg"></img>
              </div> */}
              <div class='mt-4 col-12'>
                <Carousel />
              </div>
            </div>
          </Fade>


        </div>
      </div >
    );
  }
}

export default ProjectPage;