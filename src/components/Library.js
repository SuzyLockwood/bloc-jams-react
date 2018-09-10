import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <div class="list-all">
        <ul class="list-item mdl-list" className="library">
          {this.state.albums.map((album, index) => (
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons">album</i>
                  {album.title}
                </span>
              </li>
              <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons">record_voice_over</i>
                  {album.artist}
                </span>
              </li>
              <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons">library_music</i>
                  {album.songs.length} songs
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Library;
