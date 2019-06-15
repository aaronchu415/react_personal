import React, { Component } from 'react';
import AboutMe from './AboutMe';
import IconSection from './IconSection'
import './Section1.css'

class SectionOne extends Component {
  state = {}
  render() {
    return (
      <div className='sectionOne container-fluid'>
        <AboutMe></AboutMe>
        <IconSection></IconSection>
      </div>);
  }
}

export default SectionOne;