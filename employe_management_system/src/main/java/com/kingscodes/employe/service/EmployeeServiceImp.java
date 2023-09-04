package com.kingscodes.employe.service;

import com.kingscodes.employe.entity.EmployeeEntity;
import com.kingscodes.employe.model.Employee;
import com.kingscodes.employe.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImp implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee addEmployee(Employee employee) {

        EmployeeEntity entity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, entity);

        employeeRepository.save(entity);

        return employee;
    }

    @Override
    public List<Employee> getAllEmployee() {

        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> employees = employeeEntities.stream().map(
                emp -> new Employee(emp.getId(),
                                    emp.getFirstName(),
                                    emp.getLastName(),
                                    emp.getEmail()))
                .toList();

        return employees;
    }
}
