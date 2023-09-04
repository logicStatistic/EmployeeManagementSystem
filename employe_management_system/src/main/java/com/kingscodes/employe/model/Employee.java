package com.kingscodes.employe.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
public class Employee {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;

}
