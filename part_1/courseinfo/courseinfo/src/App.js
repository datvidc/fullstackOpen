const App = () => {
  const course = "Half Stack application development";

  const courseList = [
    {
      part: "part1",
      name: "Fundamentals of React",
      assignments: 10,
      key: "1",
    },
    {
      part: "part2",
      name: "Using props to pass data",
      assignments: 7,
      key: 2,
    },
    {
      part: "part3",
      name: "State of a component",
      assignments: 14,
      key: 3,
    },
  ];

  return (
    <div>
      <Header course={course} />

      <Content list={courseList} />
      <Total list={courseList} />
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
        <p key={item.key}>
          {item.name} {item.assignments}
        </p>
      ))}
    </>
  );
};

const Total = (props) => {
  const totalnums = props.list.reduce(function (sum, current) {
    return sum + current.assignments;
  }, 0);
  console.log(totalnums);
  return (
    <>
      <p> total number of excersises {totalnums} </p>
    </>
  );
};

export default App