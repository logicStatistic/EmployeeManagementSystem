import axios from "axios";
const EMPLOYEE_SERVICE_API_BASE_URL = "http://localhost:8080/api/v1/controller/add-employee";

class Employeeservice{
saveEmployee(employee){
return axios.post(EMPLOYEE_SERVICE_API_BASE_URL, employee);
}
getEmployee(){
    return axios.get(EMPLOYEE_SERVICE_API_BASE_URL)
}
}
export default new Employeeservice();