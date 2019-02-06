import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './emptySpaces.scss';

export default class EmptySpaces extends Component {
  render() {
    return (
      <div>
        <div className="image">
          <Link to="/">
            <div className="ts-es"><span className="t">T</span><span className="s">elephone Sound</span></div>
            <div className="es">Empty Spaces</div>
            <img className="album-cover" src="./images/empty_spaces-album_cover.png" alt="A digital illustration of a happy skull with neck bones attached, on a black background." />
          </Link>
        </div>

        <div className="links">
          <h4><Link to="/">Telephone Sound</Link> is an electronic music band from <a href="https://goo.gl/maps/68jtLij9kX72" target="_blank" rel="noopener noreferrer">Ottawa, Ontario, Canada</a>, consisting of partners <a href="https://prettyweird.ca" target="_blank" rel="noopener noreferrer">Daphne Volante</a> and <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">Jeremy Carter</a>.</h4>

          <h2>Empty Spaces, released in 2019:</h2>

          <div className="choon-player" style={{ border: '0px solid silver', overflow: 'hidden', margin: '15px auto', marginLeft: '-190px', width: '1450px', }}><iframe title="Empty Spaces by Telephone Sound, embedded from Choon." style={{ border: '0px none', marginLeft: '-260px', height: '1020px', marginTop: '-50px', width: '100%' }} src="https://choon.co/albums/0qunzdv3kc5/empty-spaces" scrolling="no"><span style={{ display: 'inline-block', width: '0px', overflow: 'hidden', lineHeight: 0 }} data-mce-type="bookmark" class="mce_SELRES_start">?</span></iframe></div>

          <h3><a href="https://defcronyke.github.io/ts-camera-filter" target="_blank" rel="noopener noreferrer">Click here to try the Telephone Sound Audio-Reactive Camera Filter, you can use it with any device that has a screen, camera, and microphone attached.</a> <a href="https://github.com/defcronyke/ts-camera-filter" target="_blank" rel="noopener noreferrer">Click here for the source code.</a></h3>

          <ul>
            <li><a href="https://telephonesound.bandcamp.com/album/empty-spaces" target="_blank" rel="noopener noreferrer">Stream or buy on BandCamp</a></li>
            <li>Stream or buy on Google Play Music Store (Coming Soon)</li>
            {/* <li><a href="https://play.google.com/store/music/album/Telephone_Sound_Ellipsis_Deluxe?id=Bjhbpztgl4hfj75bd4opfp4grai" target="_blank" rel="noopener noreferrer">Stream or buy on Google Play Music Store</a></li> */}
            <li>Buy on iTunes (Coming Soon)</li>
            {/* <li><a href="https://itunes.apple.com/us/album/ellipsis-deluxe/1435660482?uo=4&app=music&at=1001lry3&ct=dashboard&app=itunes&at=1001lry3&ct=dashboard" target="_blank" rel="noopener noreferrer">Buy on iTunes</a></li> */}
            <li>Buy on Amazon (Coming Soon)</li>
            {/* <li><a href="https://www.amazon.com/gp/product/B07H63SC99" target="_blank" rel="noopener noreferrer">Buy on Amazon</a></li> */}
            <li><a href="https://www.youtube.com/watch?v=p2NIETwuiAQ&list=PLA9w7gX4C1R2vbq8Q2M3xqtB63xf6DKVG" target="_blank" rel="noopener noreferrer">Stream on YouTube</a></li>
            <li><a href="https://soundcloud.com/telephonesound/sets/empty-spaces" target="_blank" rel="noopener noreferrer">Stream or download on SoundCloud</a></li>
            <li><a href="https://audiomack.com/album/telephonesound/empty-spaces" target="_blank" rel="noopener noreferrer">Stream on Audiomack</a></li>
            <li>Stream on Spotify (Coming Soon)</li>
            {/* <li><a href="https://open.spotify.com/album/7fn1nRLB78zsFscu8Sn2t6" target="_blank" rel="noopener noreferrer">Stream on Spotify</a></li> */}
            <li>Stream on Apple Music (Coming Soon)</li>
            {/* <li><a href="https://itunes.apple.com/us/album/ellipsis-deluxe/1435660482?uo=4&app=music&at=1001lry3&ct=dashboard" target="_blank" rel="noopener noreferrer">Stream on Apple Music</a></li> */}
            <li>Stream on Deezer (Coming Soon)</li>
            {/* <li><a href="https://www.deezer.com/album/72630732" target="_blank" rel="noopener noreferrer">Stream on Deezer</a></li> */}
            <li>Stream on Tidal (Coming Soon)</li>
            {/* <li><a href="https://www.tidal.com/album/94767312" target="_blank" rel="noopener noreferrer">Stream on Tidal</a></li> */}
            <li><a href="https://choon.co/albums/0qunzdv3kc5/empty-spaces" target="_blank" rel="noopener noreferrer">Stream on Choon</a></li>
            <li>Stream on Napster (Coming Soon)</li>
            {/* <li><a href="https://us.napster.com/artist/telephone-sound/album/ellipsis-deluxe" target="_blank" rel="noopener noreferrer">Stream on Napster</a></li> */}
            <li>Stream on KKBox (Coming Soon)</li>
            {/* <li><a href="https://www.kkbox.com/sg/en/album/wdKVeUJTvMSoj0F2MfQG009H-index.html" target="_blank" rel="noopener noreferrer">Stream on KKBox</a></li> */}
            <li><a href="https://archive.org/details/telephone_sound-empty_spaces" target="_blank" rel="noopener noreferrer">Stream or download on Archive.org</a></li>
            <li><a href="https://www.facebook.com/telephonesound" target="_blank" rel="noopener noreferrer">Follow our Facebook page</a></li>
            <li><a href="https://www.patreon.com/telephonesound" target="_blank" rel="noopener noreferrer">Support us on Patreon</a></li>
            <li>Support us by sending an <a href="https://en.wikipedia.org/wiki/Interac_e-Transfer" target="_blank" rel="noopener noreferrer">Interac eTransfer</a> or <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">PayPal transfer</a> to: <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a></li>
            <li>Support us by sending <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank" rel="noopener noreferrer">Bitcoin</a> to BTC address: <a href="bitcoin:35VPDNv2fKoVEnKAsKhVMfNtks31tma1Mi?amount=0.0018">35VPDNv2fKoVEnKAsKhVMfNtks31tma1Mi</a></li>
          </ul>

          <h2>Buy the album with Bitcoin:</h2>

          <div className="bitcoin">
            <ol>
              <li>Send an email to <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a> and give us a heads-up that you&#39;ll be buying the album. You must do this before you send the BTC, for verification purposes. You don&#39;t need to wait for us to respond.</li>
              <li>Send 0.0018 BTC to this address: <a href="bitcoin:3LLPmxEotzC72w4hFcQNbTgoKzKB8gweKr?amount=0.0018">3LLPmxEotzC72w4hFcQNbTgoKzKB8gweKr</a></li>
              <li>Email the TX ID of your transaction to <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>, from the same email address you used before.</li>
              <li>After we process your order, you will receive a password protected .7z file with the .wav and .flac files in it by email. You can extract the .7z file using <a href="http://p7zip.sourceforge.net/" target="_blank" rel="noopener noreferrer">p7zip</a> on <a href="https://en.wikipedia.org/wiki/Linux" target="_blank" rel="noopener noreferrer">Linux</a> or <a href="https://www.7-zip.org/" target="_blank" rel="noopener noreferrer">7zip</a> on other platforms.</li>
            </ol>
          </div>

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
