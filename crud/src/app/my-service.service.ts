import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  uri = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.uri);
  }

  getEmployeeById(empId: any): Observable<Employee> {
    return this.http.get(`${this.uri}/editEmployee/${empId}`);
  }

  editEmployee(empId: any, body: any): Observable<any> {
    return this.http.post(`${this.uri}/updateEmployee/${empId}`, body);
  }

  addEmployee(body: any): Observable<any> {
    return this.http.post(`${this.uri}/addEmployee`, body);
  }

  deleteEmployee(empId: any): Observable<any> {
    return this.http.get(`${this.uri}/deleteEmployee/${empId}`);
  }
}
