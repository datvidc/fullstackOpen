const App = () => {
  const course = "Half Stack application development";

  const courseList = [
    ["part1", "Fundamentals of React", 10],
    ["part2", "Using props to pass data", 7],
    ["part3", "State of a component", 14],
  ];

  return (
    <div>
      <Header name={course} />

      <Content list={courseList} />
      <Total list={courseList} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1> {props.name}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <p key={item[0]}>
          {item[0]} {item[1]}{" "}
        </p>
      ))}
    </>
  );
};

const Total = (props) => {
  console.log(props.list[2][0]);
  let numse = 0;
  let tally = props.list.map(item => (
    numse + item[2]; 
  )


  return (
    <>
      <p> total number of excersises {tally} </p>
    </>
  );
};

export default App