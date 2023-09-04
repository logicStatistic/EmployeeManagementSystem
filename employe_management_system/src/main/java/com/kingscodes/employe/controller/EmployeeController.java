package com.kingscodes.employe.controller;

import com.kingscodes.employe.model.Employee;
import com.kingscodes.employe.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/controller")
   public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

 @PostMapping("/add-employee")
 public Employee addEmployee(@RequestBody Employee employee) {
     return employeeService.addEmployee(employee);
 }

 @GetMapping("/employees")
 public List<Employee> getAllEmployee(){
     return employeeService.getAllEmployee();
 }
}
