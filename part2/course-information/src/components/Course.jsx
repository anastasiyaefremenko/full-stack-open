const Course = ({ course }) => {
  return (
    <div>
      {" "}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const initialValue = 0;
  const sum = parts.reduce(
    (total, part) => part.exercises + total,
    initialValue
  );
  return <p style={{ fontWeight: "bold" }}>Total of {sum} exercises</p>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);
const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default Courses;
