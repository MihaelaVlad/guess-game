import Head from 'next/head';
import Game from '../components/Game.jsx';
import '../components/index.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guess Game</title>
        <meta name="description" content="Guees Game"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="content">
        <Game></Game>
      </main>

      <footer></footer>
    </div>
  );
}
