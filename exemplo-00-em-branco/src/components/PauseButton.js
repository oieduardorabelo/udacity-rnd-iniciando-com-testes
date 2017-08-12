import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaPause from 'react-icons/lib/fa/pause'

class PauseButton extends Component {
  static contextTypes = {
    audio: PropTypes.object.isRequired
  }

  render() {
    const { audio } = this.context;

    return (
      <button
          {...this.props}
          onClick={audio.loaded ? audio.pause : null}
          disabled={audio.loaded ? audio.paused : true}
      >
        <FaPause />
      </button>
    )
  }
}

export default PauseButton;
