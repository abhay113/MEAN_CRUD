import { Component } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
})
export class AddEmployeeComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    age: 0,
    salary: 0,
    department: '',
  };
  submitted = false;

  constructor(private myService: MyServiceService) {}

  newEmployee() {
    this.submitted = false;
    this.employee = {
      firstName: '',
      lastName: '',
      age: 0,
      salary: 0,
      department: '',
    };
  }

  saveEmployee(): void {
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      age: this.employee.age,
      salary: this.employee.salary,
      department: this.employee.department,
    };

    this.myService.addEmployee(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
