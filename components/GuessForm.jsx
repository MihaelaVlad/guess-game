export default function GuessForm() {
  return (
    <form className="guess-form">
      <span>Enter a number between 0 and 100.</span>

      <input
        type="number"
        name="number"
        id="number"
        min="0"
        max="100"
        className="input"
      ></input>

      <button
        type="submit"
        name="submit"
        id="submit"
        title="Guess"
        className="button"
      >
        Guess
      </button>

      <button type="reset" name="reset" id="reset" className="button-secondary">
        Reset game
      </button>
    </form>
  );
}
