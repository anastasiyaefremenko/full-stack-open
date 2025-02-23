const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part part={part} key={index} />
      ))}
    </div>
  );
};
const Total = (props) => {
  const total = props.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
