import { Component, viewChild } from '@angular/core';

export interface Employee {
  firstName: string;
  lastName: string;
  age: number;
  salary: number;
  department: string;
}

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent {}
