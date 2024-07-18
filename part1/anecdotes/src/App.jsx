import { useState } from "react";
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const Anecdote = ({ anecdotes, selected }) => {
  return <div>{anecdotes[selected]}</div>;
};
const Votes = ({ votes }) => {
  return <div>has {votes} votes</div>;
};
const Title = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
    setVotes(points[randomNumber]);
  };
  const handleVote = () => {
    const pointsCopy = { ...points, [selected]: points[selected] + 1 };
    setPoints(pointsCopy);
    setVotes(points[selected] + 1);
  };
  const mostVoted = Object.keys(points).reduce((a, b) =>
    points[a] > points[b] ? a : b
  );

  return (
    <div>
      <Title text={"Anecdote of the day"}></Title>
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Votes votes={votes} />
      <Button text={"vote"} handleClick={handleVote} />
      <Button text={"next anecdote"} handleClick={handleNextAnecdote} />
      <Title text={"Anecdote with most votes"}></Title>
      <Anecdote anecdotes={anecdotes} selected={mostVoted} />
    </div>
  );
};

export default App;
