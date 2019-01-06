import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Link to="/ellipsis">
            <img
              src="./images/album-cover.png"
              alt="The cover art of the debut album Ellipsis by Telephone Sound, which links to The official web page for the album."
            />
          </Link>
        </div>
      </div>
    );
  }
}
