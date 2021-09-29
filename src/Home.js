import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div>
				<br />
				<a href ="https://tinyurl.com/fern-the-willow-tree-video">
					<iframe title="The Willow Tree (English) - Fern Vale - Music Video (YouTube)" width="560" height="315" src="https://www.youtube.com/embed/mKJCu6OkUu8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
				</a>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			



				                <br />      <br />
			<br />		<br />  <br />      <br />
			<br />		<br />  <br /><br /><br />
			<br />		<br />              <br />
			<br />		<br />              <br />
			<br /><br /><br />				
			<br />		<br />
			<br />		<br />
			<br />		<br />
			<br />		<br />



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
			<iframe title="Telephone Sound songs recommended by Telephone Sound, embedded from Audius." src="https://audius.co/embed/playlist?id=46925&ownerId=167306&flavor=card" width="100%" height="480" allow="encrypted-media" style={{'border': 'none'}} />
			<br/>
			<p style={{fontSize: '10pt', textAlign: 'left', marginLeft: '30px'}}><a href="privacy-policy.html" style={{color: 'white'}}>View Privacy Policy</a></p>
			<br/>
        </div>
      </div>
    );
  }
}
