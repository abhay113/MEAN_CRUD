import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  uri = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.uri);
  }

  getEmployeeById(empId: any) {
    return this.http.get(`${this.uri}/editEmployee/${empId}`);
  }

  editEmployee(id: any, body: JSON) {
    return this.http.post(`${this.uri}/updateEmployee/${id}`, body);
  }

  addEmployee(body: JSON) {
    return this.http.post(`${this.uri}/addEmployee`, body);
  }

  deleteEmployee(empId: any) {
    return this.http.get(`${this.uri}/deleteEmployee/${empId}`);
  }
}
