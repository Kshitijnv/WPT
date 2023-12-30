class Employee {
  constructor(id, name, city) {
    this.empId = id;
    this.empName = name;
    this.address = city;
    this.employeearr = [
      new Employee(1, "kshitij", "pune"),
      new Employee(2, "Harsh", "Mumbai"),
      new Employee(3, "Saurabh", "Banglore"),
    ];
  }
  async getAllEmployee() {
    return this.employeearr;
  }
}
const emp = new Employee();
export default emp;
