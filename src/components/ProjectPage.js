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

    const PROJECT_ID = this.props.match.params.id;
    console.log(this.props, PROJECT_ID)
    const PROJECT = this.props.projects.filter(p => p.id === PROJECT_ID)[0]

    return (
      <div className="pt-2 background container-fluid">
        <div className='transparent-bg-container'>
          <NavBar2 fixed={true}></NavBar2>
          <Fade in={true} timeout={{ enter: 500, exit: 100 }}>

            <div class='mt-10 w-75 ml-auto mr-auto row'>
              <div class='col-12'>
                <h1 class='project-name text-white'>{PROJECT.name}</h1>
                <h4 class='text-white'>{PROJECT.header}</h4>
                <p class='mt-6 text-white'>{PROJECT.description}</p>
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
                {/* <div class='mt-5 mb-5' style={{ position: 'relative', paddingBottom: 'calc(54.95% + 44px)' }}><iframe src='https://gfycat.com/ifr/BrokenWelldocumentedEel' frameborder='0' scrolling='no' width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }} allowfullscreen></iframe></div> */}
                <Carousel project={PROJECT} />
              </div>
            </div>
          </Fade>


        </div>
      </div >
    );
  }
}

export default ProjectPage;