import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ellipsisRemasteredDeluxe.scss';

export default class EllipsisRemasteredDeluxe extends Component {
  render() {
    return (
      <div className="page">
        <div className="image">
          <Link to="/">
            <div className="ts-el"><span className="t">T</span><span className="s">elephone Sound</span></div>
            <div className="el">…</div>
            <img className="album-cover" src="./images/ellipsis-remastered-deluxe-album_cover.png" alt="A digitally modified photograph of clouds, taken from above." />
          </Link>
        </div>

        <div className="links">
          <h4><Link to="/">Telephone Sound</Link> is an electronic music band from <a href="https://goo.gl/maps/68jtLij9kX72" target="_blank" rel="noopener noreferrer">Ottawa, Ontario, Canada</a>, consisting of partners <a href="https://prettyweird.ca" target="_blank" rel="noopener noreferrer">Fern Vale Volante</a> and <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">Jeremy Carter</a>.</h4>

          <a href="https://distrokid.com/hyperfollow/telephonesound/ellipsis-remastered-deluxe-2">
            <h2>Coming Soon...</h2>

            <h3>Ellipsis (Remastered Deluxe) is coming to your favourite online music stores and streaming platforms on March 23, 2020.</h3>
          </a>

          <ul>
            <li><a href="https://www.facebook.com/telephonesound" target="_blank" rel="noopener noreferrer">Follow our Facebook page</a></li>
            <li><a href="https://www.patreon.com/telephonesound" target="_blank" rel="noopener noreferrer">Support us on Patreon</a></li>
            <li>Support us by sending an <a href="https://en.wikipedia.org/wiki/Interac_e-Transfer" target="_blank" rel="noopener noreferrer">Interac eTransfer</a> or <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">PayPal transfer</a> to: <a href="mailto:jeremy@jeremycarter.ca">jeremy@jeremycarter.ca</a></li>
            <li>Support us by sending <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank" rel="noopener noreferrer">Bitcoin</a> to BTC address: <a href="bitcoin:bc1quka4yv0tpfym8hpc34ljys0qfk92u5cljrfzxm?amount=0.0003">bc1quka4yv0tpfym8hpc34ljys0qfk92u5cljrfzxm</a></li>
          </ul>

          <iframe title="Facebook Page Embed" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftelephonesound%2F&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=191450255397229" width="340" height="500" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

          <h3>Check out what we&#39;re working on for our next album. New tracks get posted to our <a href="https://audiomack.com/artist/telephonesound" target="_blank" rel="noopener noreferrer">Audiomack</a> and <a href="https://soundcloud.com/telephonesound" target="_blank" rel="noopener noreferrer">SoundCloud</a> while we&#39;re working on the next album:</h3>

          <iframe title="All songs by Telephone Sound, embedded from Audiomack." src="https://audiomack.com/embed/playlist/telephonesound/all?background=1" scrolling="no" width="100%" height="400" scrollbars="no" frameBorder="0" />
          {/* <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/583796493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/> */}

          <h4>If you like this, check out <a href="https://www.youtube.com/watch?v=lQHezciPEDI" target="_blank" rel="noopener noreferrer">Daphne Volante&#39;s solo work here</a>, and <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">Jeremy Carter</a>&#39;s solo work under the name Defcronyke: <a href="https://defcronyke.com" target="_blank" rel="noopener noreferrer">defcronyke.com</a></h4>
          <h4>The source code for this website is available here: <a href="https://github.com/defcronyke/telephonesound" target="_blank" rel="noopener noreferrer">github.com/defcronyke/telephonesound</a></h4>
          <h4>Part of <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">The Eternal Void Network</a>.</h4>
          <br /><br />
        </div>
      </div >
    );
  }
}
