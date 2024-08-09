import { useEffect, useState } from "react";

import { FormField, Input } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

import { calculateAge } from "./calulate-age";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState("");
  useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    if (day && year && month && year.length === 4) {
      const d = `${year}-${month}-${day}`;
      console.log(calculateAge(new Date(d)));
      setAge(calculateAge(new Date(d)));
    } else {
      setAge("");
    }
  }, [day, month, year]);
  return (
    <main className="container">
      <form className="form__container">
        <FormField className="form__field">
          <label>Day</label>
          <Input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </FormField>

        <FormField className="form__field">
          <label>Month</label>
          <Input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </FormField>

        <FormField className="form__field">
          <label>Year</label>
          <Input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormField>
      </form>

      {age && (
        <div className="age">
          <p>
            {age.years} <span> years, </span>
          </p>
          <p>
            {age.months} <span> months, </span>
          </p>

          <p>
            {age.days} <span> days </span>
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
