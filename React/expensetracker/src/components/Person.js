const Person = (props) => {
  const btnHandler = () => {
    alert("Btn Clicked");
  };
  return (
    <div>
      <h3>Hi, i am {props.name}</h3>
    </div>
  );
};
export default Person;
