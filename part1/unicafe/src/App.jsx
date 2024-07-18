import { useState } from "react";
const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const Statisticline = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all + " %";
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <Statisticline text={"good"} value={good} />
      <Statisticline text={"neutral"} value={neutral} />
      <Statisticline text={"bad"} value={bad} />
      <Statisticline text={"all"} value={all} />
      <Statisticline text={"average"} value={average} />
      <Statisticline text={"positive"} value={positive} />
    </table>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (feedback, setFeedback) => {
    setFeedback(feedback + 1);
  };

  return (
    <div>
      <Header text={"give feedback"} />
      <Button
        text={"good"}
        handleClick={() => handleClick(good, setGood)}
      ></Button>
      <Button
        text={"neutral"}
        handleClick={() => handleClick(neutral, setNeutral)}
      ></Button>
      <Button
        text={"bad"}
        handleClick={() => handleClick(bad, setBad)}
      ></Button>
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
