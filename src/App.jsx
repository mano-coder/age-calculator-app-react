function App() {

  return (
    <main class="form-container">
      <form id="age-form">
        <div class="input-row">
          <div class="input-group">
            <label for="day">Day</label>
            <input type="number" id="day" name="day" placeholder="DD" />
            <small class="error-msg"></small>
          </div>

          <div class="input-group">
            <label for="month">Month</label>
            <input type="number" id="month" name="month" placeholder="MM" />
            <small class="error-msg"></small>
          </div>

          <div class="input-group">
            <label for="year">Year</label>
            <input type="number" id="year" name="year" placeholder="YYYY" />
            <small class="error-msg"></small>
          </div>
        </div>

        <div class="divider-container">
          <hr class="line" />
          <button type="submit" class="submit-btn" aria-label="Calculate Age">
            <img src="./assets/images/icon-arrow.svg" alt="arrow-icon" />
          </button>
        </div>
      </form>

      <section id="results">
        <h1><span id="year-result">--</span> years</h1>
        <h1><span id="month-result">--</span> months</h1>
        <h1><span id="day-result">--</span> days</h1>
      </section>
    </main>
  );
}

export default App;
