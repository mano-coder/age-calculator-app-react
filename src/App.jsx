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
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let localErrors = { day: "", month: "", year: "" };
    let isValid = true;

    if (!day) {
      localErrors.day = "This field is required";
      isValid = false;
    } else if ((day < 1) | (day > 31)) {
      localErrors.day = "Must be a valid day";
      isValid = false;
    }

    if (!month) {
      localErrors.month = "This field is required";
      isValid = false;
    } else if (month < 1 || month > 12) {
      localErrors.month = "Must be a valid month";
      isValid = false;
    }
    if (!year) {
      localErrors.year = "This field is required";
      isValid = false;
    } else if (year > new Date().getFullYear()) {
      localErrors.year = "Must be a valid year";
      isValid = false;
    }
    setErrors(localErrors);
    if (isValid) {
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
    }
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
