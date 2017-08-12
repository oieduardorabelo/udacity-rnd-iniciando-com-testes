import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

class ProgressBar extends Component {
  static contextTypes = {
    audio: PropTypes.object.isRequired
  }

  onClickProgressBar = (event) => {
    const { audio } = this.context;
    const { clientX, currentTarget } = event;

    const { left, width } = currentTarget.getBoundingClientRect();
    const click = clientX - left;

    const time = (click/width) * audio.duration;
    audio.setTime(time);

    if (audio.paused) {
      audio.play();
    }
  }

  render() {
    const { audio } = this.context;
    const barWidth = { width: audio ? (audio.currentTime/audio.duration)*100 + '%' : 0 };

    return (
      <div className="Progress" onClick={this.onClickProgressBar}>
        <div className="Progress-bar" style={barWidth}></div>
        <div className="Progress-bar Progress-bar--placeholder"></div>
      </div>
    )
  }
}

export default ProgressBar;
