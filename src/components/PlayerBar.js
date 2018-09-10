import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button
            id="previous"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
            onClick={this.props.handlePrevClick}
          >
            <span className="ion-skip-backward" />
          </button>
          <button
            id="play-pause"
            class="mdl-button mdl-button--fab mdl-js-button mdl-js-ripple-effect"
            onClick={this.props.handleSongClick}
          >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'} />
          </button>
          <button
            id="next"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
            onClick={this.props.handleNextClick}
          >
            <span className="ion-skip-forward" />
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">
            {this.props.formatTime(this.props.currentTime)}
          </div>
          <input
            type="range"
            className="seek-bar"
            class="mdl-slider mdl-js-slider"
            value={this.props.currentTime / this.props.duration || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
            tabindex="0"
          />
          <div className="total-time">
            {this.props.formatTime(this.props.duration)}
          </div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low" />
          <input
            type="range"
            className="seek-bar"
            class="mdl-slider mdl-js-slider"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            tabindex="0"
          />
          <div className="icon ion-volume-high" />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
