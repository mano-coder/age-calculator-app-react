import { useState } from 'react'
import arrowIcon from "./assets/images/icon-arrow.svg";


function App() {
  const [ day, setDay ] = useState('')
  const [ month, setMonth ] = useState('')
  const [ year, setYear ] = useState('')

  const handleSubmit = (e) => {
  }
  return (
    <main className="form-container">
      <form id="age-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="day">Day</label>
            <input type="number" id="day" name="day" placeholder="DD" />
            <small className="error-msg"></small>
          </div>

          <div className="input-group">
            <label htmlFor="month">Month</label>
            <input type="number" id="month" name="month" placeholder="MM" />
            <small className="error-msg"></small>
          </div>

          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" placeholder="YYYY" />
            <small className="error-msg"></small>
          </div>
        </div>

        <div className="divider-container">
          <hr className="line" />
          <button
            type="submit"
            className="submit-btn"
            aria-label="Calculate Age"
          >
            <img src={arrowIcon} alt="arrow-icon" />
          </button>
        </div>
      </form>

      <section id="results">
        <h1>
          <span id="year-result">--</span> years
        </h1>
        <h1>
          <span id="month-result">--</span> months
        </h1>
        <h1>
          <span id="day-result">--</span> days
        </h1>
      </section>
    </main>
  );
}

export default App;
