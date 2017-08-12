import { Component } from 'react';
import PropTypes from 'prop-types';

class SongProgress extends Component {
  static contextTypes = {
    audio: PropTypes.object.isRequired
  }

  static formatTime = value => value < 10 ? `0${value}` : value;

  getAudioData = (key) => {
    const minutes = Math.floor(this.context.audio[key] / 60) || 0;
    const seconds = Math.floor(this.context.audio[key] % 60) || 0;
    return { minutes, seconds };
  }

  getFormattedCurrentTime = () => {
    const { minutes, seconds } = this.getAudioData('currentTime');
    return `${SongProgress.formatTime(minutes)}:${SongProgress.formatTime(seconds)}`
  }

  getFormattedDuration = () => {
    const { minutes, seconds } = this.getAudioData('duration');
    return `${SongProgress.formatTime(minutes)}:${SongProgress.formatTime(seconds)}`
  }

  render() {
    return this.props.render(this.getFormattedCurrentTime(), this.getFormattedDuration());
  }
}

export default SongProgress;
