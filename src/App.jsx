import { useState } from "react";
import arrowIcon from "./assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [results, setResults] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !month || !year) return;

    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjustment logic for negative days/months
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    // Save the calculation to state
    setResults({ years, months, days });
  };

  return (
    <main className="form-container">
      <form id="age-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="day">Day</label>
            <input
              type="number"
              id="day"
              value={day}
              name="day"
              placeholder="DD"
              onChange={(e) => setDay(e.target.value)}
            />
            <small className="error-msg"></small>
          </div>

          <div className="input-group">
            <label htmlFor="month">Month</label>
            <input
              type="number"
              id="month"
              value={month}
              name="month"
              placeholder="MM"
              onChange={(e) => setMonth(e.target.value)}
            />
            <small className="error-msg"></small>
          </div>

          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
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
          <span>{results.years}</span> years
        </h1>
        <h1>
          <span>{results.months}</span> months
        </h1>
        <h1>
          <span>{results.days}</span> days
        </h1>
      </section>
    </main>
  );
}

export default App;
