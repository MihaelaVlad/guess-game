import Head from 'next/head';
import Image from 'next/image';
import Game from '../components/Game.jsx';
import '../components/index.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guess Game</title>
        <meta name="description" content="Guees Game"></meta>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        ></link>
      </Head>

      <main className="content">
        <Game></Game>

        <div className="music-controls">
          <div className="music-controls-container">
            <button id="musicPlay" className="play-button" title="Play music">
              <Image
                src="/images/play.png"
                width={40}
                height={40}
                objectFit="contain"
                alt="Pause music"
                title="Pause music"
              ></Image>
            </button>

            <button
              id="musicPause"
              className="pause-button"
              title="Pause music"
            >
              <Image
                src="/images/pause.png"
                width={40}
                height={40}
                objectFit="contain"
                alt="Pause music"
                title="Pause music"
              ></Image>
            </button>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
