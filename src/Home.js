import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
        <div>
            <Link to="/ellipsis-remastered-deluxe">
              <img
                src="./images/ellipsis-remastered-deluxe-album_cover.png"
                alt="The cover art of the 2020 remastered version of the debut album Ellipsis by Telephone Sound, which links to The official web page for the album."
              />
            </Link>
          </div>
          <div>
            <Link to="/empty-spaces">
              <img
                src="./images/empty_spaces-album_cover.png"
                alt="The cover art of the second album Empty Spaces by Telephone Sound, which links to The official web page for the album."
              />
            </Link>
          </div>
          <div>
            <Link to="/ellipsis">
              <img
                src="./images/ellipsis-album_cover.png"
                alt="The cover art of the debut album Ellipsis by Telephone Sound, which links to The official web page for the album."
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
