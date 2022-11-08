const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  console.log(course);

  return (
    <>
      {course.parts ? (
        <>
          <h1> {course.name}</h1>
          <>
            {course.parts.map((part) => {
              return <Part part={part} key={part.name} />;
            })}
          </>
          <p>
            {" "}
            Total of {course.parts.reduce(
              (sum, acc) => sum + acc.exercises,
              0
            )}{" "}
            exercises
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Course;
