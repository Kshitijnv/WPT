import "./App.css";
import Employee from "./Models/Employee";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [empArr, setEmpArr] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Employee.getAllEmployee();
      setEmpArr(data);
    }
    fetchData();
  }, [Employee.employeearr]); // (2nd parameter)Empty dependency array means this effect runs once after the initial render

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://picsum.photos/200"
              width="200px"
              height="200px"
              alt="gen"
            ></img>
          </div>
          <div className="col-md-10">
            <EmployeeList emparrApp={empArr}></EmployeeList>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
