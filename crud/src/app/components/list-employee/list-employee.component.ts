import { Component } from '@angular/core';
import { MyServiceService } from '../../my-service.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent {
  employees?: Employee[];

  constructor(private employeeService: MyServiceService) {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }
}
