import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ellipsis.scss";

export default class Ellipsis extends Component {
  render() {
    return (
      <div>
        <div className="image">
          <Link to="/">
            <div className="ts-el">
              <span className="t">T</span>
              <span className="s">elephone Sound</span>
            </div>
            <div className="el">…</div>
            <img
              className="album-cover"
              src="./images/ellipsis-album_cover.png"
              alt="A digitally modified photograph of clouds, taken from above."
            />
          </Link>
        </div>

        <div className="links">
          <h4>
            <Link to="/">Telephone Sound</Link> is an electronic music band from{" "}
            <a
              href="https://goo.gl/maps/68jtLij9kX72"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ottawa, Ontario, Canada
            </a>
            , consisting of partners{" "}
            <a
              href="https://prettyweird.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fern Vale Volante
            </a>{" "}
            and{" "}
            <a
              href="https://eternalvoid.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeremy Carter
            </a>
            .
          </h4>

          <h2>Ellipsis (Deluxe), released in 2016:</h2>

          <iframe
            title="Ellipsis (Deluxe) by Telephone Sound, embedded from Audiomack."
            src="https://audiomack.com/embed/playlist/telephonesound/ellipsis-deluxe?background=1"
            scrolling="no"
            width="100%"
            height="400"
            scrollBars="no"
            frameBorder="0"
          />
          {/* <iframe
            title="Ellipsis (Deluxe) by Telephone Sound, embedded from YouTube."
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLA9w7gX4C1R2_-rC1e3lvHRogXcTg9isU"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          /> */}

          <h3>
            <a
              href="https://defcronyke.github.io/ts-camera-filter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to try the Telephone Sound Audio-Reactive Camera
              Filter, you can use it with any device that has a screen, camera,
              and microphone attached.
            </a>{" "}
            <a
              href="https://github.com/defcronyke/ts-camera-filter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for the source code.
            </a>
          </h3>

          <ul>
            <li>
              <a
                href="https://telephonesound.bandcamp.com/album/ellipsis-deluxe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream or buy on BandCamp
              </a>
            </li>
            <li>
              <a
                href="https://music.youtube.com/playlist?list=OLAK5uy_l4K4jTsPGEPoTMZ44BZCvTlKXdxiNnAvg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on YouTube Music
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/music/album/Telephone_Sound_Ellipsis_Deluxe?id=Bwffsvzgbil7t3ekjtrshadkzmu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream or buy on Google Play Music Store
              </a>
            </li>
            {/* <li><a href="https://play.google.com/store/music/album/Telephone_Sound_Ellipsis_Deluxe?id=Bjhbpztgl4hfj75bd4opfp4grai" target="_blank" rel="noopener noreferrer">Stream or buy on Google Play Music Store</a></li> */}
            <li>
              <a
                href="https://itunes.apple.com/us/album/ellipsis-deluxe/1435660482?uo=4&app=music&at=1001lry3&ct=dashboard&app=itunes&at=1001lry3&ct=dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on iTunes
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.com/gp/product/B07H63SC99"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ajVU8D9jpKQ&list=PLA9w7gX4C1R2_-rC1e3lvHRogXcTg9isU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on YouTube
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/telephonesound/sets/ellipsis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream or download on SoundCloud
              </a>
            </li>
            <li>
              <a
                href="https://audiomack.com/album/telephonesound/ellipsis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Audiomack
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/7fn1nRLB78zsFscu8Sn2t6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Spotify
              </a>
            </li>
            <li>
              <a
                href="https://itunes.apple.com/us/album/ellipsis-deluxe/1435660482?uo=4&app=music&at=1001lry3&ct=dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Apple Music
              </a>
            </li>
            <li>
              <a
                href="https://www.deezer.com/album/72630732"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Deezer
              </a>
            </li>
            <li>
              <a
                href="https://www.tidal.com/album/94767312"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Tidal
              </a>
            </li>
            <li>
              <a
                href="https://us.napster.com/artist/telephone-sound/album/ellipsis-deluxe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on Napster
              </a>
            </li>
            <li>
              <a
                href="https://www.kkbox.com/sg/en/album/wdKVeUJTvMSoj0F2MfQG009H-index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream on KKBox
              </a>
            </li>
            <li>
              <a
                href="https://archive.org/details/telephone_sound-ellipsis_deluxe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stream or download on Archive.org
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/telephonesound"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow our Facebook page
              </a>
            </li>
            <li>
              <a
                href="https://www.patreon.com/telephonesound"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support us on Patreon
              </a>
            </li>
            <li>
              Support us by sending an{" "}
              <a
                href="https://en.wikipedia.org/wiki/Interac_e-Transfer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interac eTransfer
              </a>{" "}
              or{" "}
              <a
                href="https://paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PayPal transfer
              </a>{" "}
              to:{" "}
              <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>
            </li>
            <li>
              Support us by sending{" "}
              <a
                href="https://en.wikipedia.org/wiki/Bitcoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitcoin
              </a>{" "}
              to BTC address:{" "}
              <a href="bitcoin:3EMpa41qRZyY9NsCq8kMPab5u2uv5BRrJr?amount=0.0018">
                3EMpa41qRZyY9NsCq8kMPab5u2uv5BRrJr
              </a>
            </li>
          </ul>

          <h2>Download the album with Bittorrent:</h2>
          <ul>
            <li>
              <a href="magnet:?xt=urn:btih:0d436a521818e5e8849321957fd8b4f28c0bdcd9&dn=Telephone%20Sound%20-%20Ellipsis%20%28Deluxe%29%20-%202016%20-%20flac&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce">
                flac
              </a>
            </li>
            <li>
              <a href="magnet:?xt=urn:btih:d50e49b7a3744a922e835a936c938f48d533e4d2&dn=Telephone%20Sound%20-%20Ellipsis%20%28Deluxe%29%20-%202016%20-%20mp3&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce">
                mp3
              </a>
            </li>
            <li>
              <a href="magnet:?xt=urn:btih:bfe8e28ef3cdd55ff1ed7e8ad30f017d14a70066&dn=Telephone%20Sound%20-%20Ellipsis%20%28Deluxe%29%20-%202016%20-%20ogg&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce">
                ogg
              </a>
            </li>
            <li>
              <a href="magnet:?xt=urn:btih:4dc9f0d5876280566adf0234fe965fb46ec180d7&dn=Telephone%20Sound%20-%20Ellipsis%20%28Deluxe%29%20-%202016%20-%20wav&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce">
                wav
              </a>
            </li>
          </ul>

          <h2>Buy the album with Bitcoin:</h2>

          <div className="bitcoin">
            <ol>
              <li>
                Send an email to{" "}
                <a href="mailto:Jeremy@JeremyCarter.ca">
                  Jeremy@JeremyCarter.ca
                </a>{" "}
                and give us a heads-up that you&#39;ll be buying the album. You
                must do this before you send the BTC, for verification purposes.
                You don&#39;t need to wait for us to respond.
              </li>
              <li>
                Send 0.0018 BTC to this address:{" "}
                <a href="bitcoin:1DYJeNmSA2ixfTWZRZupdWVW7MCH3Wm3BH?amount=0.0018">
                  1DYJeNmSA2ixfTWZRZupdWVW7MCH3Wm3BH
                </a>
              </li>
              <li>
                Email the TX ID of your transaction to{" "}
                <a href="mailto:Jeremy@JeremyCarter.ca">
                  Jeremy@JeremyCarter.ca
                </a>
                , from the same email address you used before.
              </li>
              <li>
                After we process your order, you will receive a password
                protected .7z file with the .wav and .flac files in it by email.
                You can extract the .7z file using{" "}
                <a
                  href="http://p7zip.sourceforge.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  p7zip
                </a>{" "}
                on{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Linux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linux
                </a>{" "}
                or{" "}
                <a
                  href="https://www.7-zip.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7zip
                </a>{" "}
                on other platforms.
              </li>
            </ol>
          </div>

          {/* <div className="news">
            <h2>News:</h2>
            <iframe
              title="Telephone Sound Ellipsis Facebook Page Embed"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftelephonesound%2F&tabs=timeline%2Cmessages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=191450255397229"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div> */}

          <h3>
            Check out what we&#39;re working on for our next album. New tracks
            get posted to our{" "}
            <a
              href="https://audiomack.com/artist/telephonesound"
              target="_blank"
              rel="noopener noreferrer"
            >
              Audiomack
            </a>{" "}
            and{" "}
            <a
              href="https://soundcloud.com/telephonesound"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>{" "}
            while we&#39;re working on the next album:
          </h3>

          <iframe
            title="All songs by Telephone Sound, embedded from Audiomack."
            src="https://audiomack.com/embed/playlist/telephonesound/all?background=1"
            scrolling="no"
            width="100%"
            height="400"
            scrollbars="no"
            frameBorder="0"
          />
          {/* <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/583796493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/> */}

          <h4>
            If you like this, check out{" "}
            <a
              href="https://www.youtube.com/watch?v=lQHezciPEDI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fern&#39;s solo work here
            </a>
            , and{" "}
            <a
              href="https://eternalvoid.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeremy
            </a>
            &#39;s side project Defcronyke:{" "}
            <a
              href="https://defcronyke.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              defcronyke.com
            </a>
          </h4>
          <h4>
            The source code for this website is available here:{" "}
            <a
              href="https://github.com/defcronyke/telephonesound"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/defcronyke/telephonesound
            </a>
          </h4>
          <h4>
            Part of{" "}
            <a
              href="https://eternalvoid.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Eternal Void Network
            </a>
            .
          </h4>
          <p style={{ fontSize: "10pt" }}>
            <a href="privacy-policy.html">View Privacy Policy</a>
          </p>
          <br />
        </div>
      </div>
    );
  }
}
