import React, { Component } from 'react';
import './Section2.css'
import Portfolio from './Portfolio';

class SectionTwo extends Component {
  state = {}
  render() {
    return (
      <div className='sectionTwo container-fluid'>
        <Portfolio></Portfolio>
        {/* <IconSection></IconSection> */}
      </div>);
  }
}

export default SectionTwo;