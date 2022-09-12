export default function Game() {
  return (
    <section className="game">
      <h1>Guess Game</h1>

      <div className="results">
        <span className="game-guesses" id="guesses"></span>
        <span className="last-result" id="lastResult"></span>
        <span className="low-or-high" id="lowOrHigh"></span>
      </div>

      <form className="guess-form" id="guessForm">
        <label htmlFor="guess">Enter a number between 0 and 100.</label>

        <input
          type="number"
          name="guess"
          id="guess"
          min="0"
          max="100"
          className="input"
        ></input>

        <button
          type="submit"
          name="submitGuess"
          id="submitGuess"
          title="Guess"
          className="button"
        >
          Guess
        </button>

        <button
          type="reset"
          name="resetGame"
          id="resetGame"
          className="button-secondary"
          title="Reset game"
        >
          Reset game
        </button>
      </form>

      <div className="music-controls">
        <button id="musicPlay" className="play-button" title="Play music">
          <img
            src="/images/play.png"
            alt="Pause music"
            title="Pause music"
          ></img>
        </button>

        <button id="musicPause" className="pause-button" title="Pause music">
          <img
            src="/images/pause.png"
            alt="Pause music"
            title="Pause music"
          ></img>
        </button>
      </div>
    </section>
  );
}
