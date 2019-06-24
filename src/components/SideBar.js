import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import './SideBar.css'

class SideBar extends Component {
  state = {}
  render() {
    return (
      <div className='side-bar'>
        <FontAwesomeIcon class='fa-back' icon={faStepBackward} />
      </div>
    );
  }
}

export default SideBar;