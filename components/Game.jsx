export default function Game() {
  return (
    <section className="game">
      <div className="game-container">
        <h1>Guess Game</h1>

        <div className="results">
          <span className="game-guesses" id="guesses"></span>
          <span className="last-result" id="lastResult"></span>
          <span className="low-or-high" id="lowOrHigh"></span>
        </div>

        <form className="guess-form" id="guessForm">
          <div className="lives-score">
            <div className="lives" id="livesPlayer"></div>
            <div className="score" id="scorePlayer"></div>
          </div>

          <label className="guess-player" htmlFor="guess">
            Enter a number between 0 and 100.
          </label>
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
      </div>
    </section>
  );
}
