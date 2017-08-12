import React, { Component } from 'react';

import superMarioBrosMedley from './assets/audios/super-mario-bros-medley.mp3';

import TextHero from './components/TextHero';
import AudioPlayer from './components/AudioPlayer';
import PlayButton from './components/PlayButton';
import PauseButton from './components/PauseButton';
import SongProgress from './components/SongProgress';
import ProgressBar from './components/ProgressBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextHero title="Super Mario Player!" className="ff-mario" />
        <AudioPlayer
            source={superMarioBrosMedley}
            title="Theme Song"
          >
          <div className="flex justify-around mb20">
            <PlayButton className="button-reset" />
            <PauseButton className="button-reset" />
            <SongProgress render={(currentTime, duration) => (
              <span>{currentTime}<span className="lsh-1">/</span>{duration}</span>
            )} />
          </div>
          <ProgressBar />
        </AudioPlayer>
      </div>
    );
  }
}

export default App;
