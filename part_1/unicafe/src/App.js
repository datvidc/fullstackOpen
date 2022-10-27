import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <>
      <p>
        {" "}
        {props.text} {props.value}
      </p>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.buttonClick}> {props.text} </button>;
};

const Statistics = (props) => {
  return (
    <>
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / props.all}
        />
        <StatisticLine text="positive" value={(props.good / props.all) * 100} />
      </div>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [alltogether, setAlltogether] = useState(0);

  const ClickHandlerGood = () => {
    setGood(good + 1);
    setAlltogether(alltogether + 1);
  };

  const ClickHandlerNeut = () => {
    setNeutral(neutral + 1);
    setAlltogether(alltogether + 1);
  };

  const ClickHandlerBad = () => {
    setBad(bad + 1);
    setAlltogether(alltogether + 1);
  };

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button buttonClick={ClickHandlerGood} text={"good"} />
      <Button buttonClick={ClickHandlerNeut} text={"Neutral"} />
      <Button buttonClick={ClickHandlerBad} text={"Bad"} />
      <h1> Statistics</h1>

      {alltogether <= 0 ? (
        <p> No feedback given </p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} all={alltogether} />
      )}
    </div>
  );
};

export default App;
