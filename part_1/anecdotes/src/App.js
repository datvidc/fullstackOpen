import { useState, useEffect } from "react";

const Anecdote = (props) => {
  return (
    <>
      {props.votes.votes > 0 ? (
        <>
          <h1>Anecdote with most votes</h1>
          <p> {props.votes.text}</p>
          <p> has {props.votes.votes} votes </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const App = () => {
  const [anecdotes, SetAnecdotes] = useState([
    { text: "If it hurts, do it more often.", votes: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ]);
  const [best, setBest] = useState({});

  const [selected, setSelected] = useState(0);

  const voteHandler = (e) => {
    e.preventDefault();
    console.log("fired");
    const copyArr = anecdotes;
    copyArr[selected]["votes"] = copyArr[selected]["votes"] + 1;
    console.log(copyArr[selected]);

    SetAnecdotes(copyArr);
    popularityContest();
  };

  /*automatically generating new number everytime the app is reloaded.   */
  useEffect(() => {
    let rando = Math.floor(Math.random() * 7 + 1);
    setSelected(rando);
  }, []);

  /* with a change in anecdotes - calculate most votes   */
  const popularityContest = () => {
    console.log("yes");
    let answer = anecdotes.reduce((acc, cur) =>
      acc.votes > cur.votes ? acc : cur
    );

    console.log(answer);
    setBest(answer);
  };

  const anotherRandom = () => {
    let rando = Math.floor(Math.random() * 7 + 1);
    setSelected(rando);
  };

  return (
    <>
      <div>{anecdotes[selected]["text"]}</div>
      <button onClick={anotherRandom}> Next annecdote</button>
      <button onClick={voteHandler}> Vote </button>
      <Anecdote votes={best} />
    </>
  );
};

export default App;
