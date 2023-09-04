package com.kingscodes.employe.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
}
