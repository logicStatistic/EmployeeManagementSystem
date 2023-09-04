package com.kingscodes.employe.service;

import com.kingscodes.employe.model.Employee;

import java.util.List;


public interface EmployeeService {

    Employee addEmployee(Employee employee);

    List<Employee> getAllEmployee();
}
