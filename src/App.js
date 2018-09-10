import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App" class="mdl-layout mdl-js-layout">
        <header class="mdl-layout__header">
          <div class="mdl-layout-icon" />
          <div class="mdl-layout__header-row">
            <span class="mdl-layout__title">Bloc Jams</span>
            <div class="mdl-layout-spacer" />
            <nav class="mdl-navigation">
              <Link class="mdl-navigation__link" to="/">
                Landing
              </Link>
              <Link class="mdl-navigation__link" to="/library">
                Library
              </Link>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout__title">Bloc Jams</span>
          <nav class="mdl-navigation">
            <Link class="mdl-navigation__link" to="/">
              Landing
            </Link>
            <Link class="mdl-navigation__link" to="/library">
              Library
            </Link>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
