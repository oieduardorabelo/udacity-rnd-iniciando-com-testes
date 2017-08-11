import React, { Component } from 'react';

import superMarioBrosMedley from './assets/audios/super-mario-bros-medley.mp3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="TextHero TextHero--boss u-fontMario">Super Mario Player!</h1>
        <div className="Player">
          <button onClick={() => this.audio.play()}>Play</button>
          <span>Super Mario Medley</span>
          <audio className="Player-audio" src={superMarioBrosMedley} ref={node => this.audio = node}></audio>
          <div className="Progress">
            <div className="Progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
