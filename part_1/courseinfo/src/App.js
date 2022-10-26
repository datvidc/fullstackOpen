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

      <Content list={course.parts} />
      <Total list={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1> {props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <Part item={item} />
      ))}
    </>
  );
};

const Part = (props) => {
  return (
    <p key={props.item.key}>
      {props.item.name} {props.item.exercises}
    </p>
  );
};

const Total = (props) => {
  const totalnums = props.list.reduce(function (sum, current) {
    return sum + current.exercises;
  }, 0);
  console.log(totalnums);
  return (
    <>
      <p> total number of excersises {totalnums} </p>
    </>
  );
};

export default App