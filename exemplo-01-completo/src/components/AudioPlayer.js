import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AudioPlayer.css';

class AudioPlayer extends Component {
  static childContextTypes = {
    audio: PropTypes.object.isRequired
  }

  state = {
    loaded: false,
  }

  getChildContext() {
    return {
      audio: {
        loaded: this.state.loaded,
        paused: this.audio && this.audio.paused,
        duration: this.audio && this.audio.duration,
        currentTime: this.audio && this.audio.currentTime,
        setTime: (time) => this.audio && (this.audio.currentTime = time),
        play: () => this.audio && this.audio.play(),
        pause: () => this.audio && this.audio.pause(),
      }
    }
  }

  onLoadedData = () => {
    this.setState({ loaded: true })
  }

  onTimeUpdate = () => {
    this.forceUpdate();
  }

  onEnded = () => {
    this.audio.currentTime = 0;
  }

  render() {
    return (
      <div className="AudioPlayer">
        <b className="AudioPlayer-title">{this.props.title}</b>
        <audio
          className="AudioPlayer-audio"
          onEnded={this.onEnded}
          onLoadedData={this.onLoadedData}
          onTimeUpdate={this.onTimeUpdate}
          ref={node => this.audio = node}
          src={this.props.source}
        ></audio>
        {this.props.children}
      </div>
    )
  }
}

export default AudioPlayer;
