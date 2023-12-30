import EmployeeDetails from "./EmployeeDetails";
const EmployeeList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <h1>Employee List</h1>
          <strong>employee id</strong>&nbsp;&nbsp;
          <strong>employee Name</strong>&nbsp;&nbsp;
          <strong>employee city</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {props.emparrApp.map((ob) => (
            <EmployeeDetails key={ob.empId} emp={ob}></EmployeeDetails>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EmployeeList;
