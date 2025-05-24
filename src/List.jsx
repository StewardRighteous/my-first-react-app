export function List(props) {
  if (!props.animalList) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  if (props.animalList.length == 0) {
    return (
      <>
        <h1>List is Empty</h1>
      </>
    );
  }

  return (
    <>
      {props.animalList.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </>
  );
}
