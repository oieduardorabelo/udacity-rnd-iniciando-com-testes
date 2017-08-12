import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaPlay from 'react-icons/lib/fa/play'

class PlayButton extends Component {
  static contextTypes = {
    audio: PropTypes.object.isRequired
  }

  render() {
    const { audio } = this.context;

    return (
      <button
          {...this.props}
          onClick={audio.loaded ? audio.play : null}
          disabled={audio.loaded ? !audio.paused : false}
      >
        <FaPlay />
      </button>
    )
  }
}

export default PlayButton;
