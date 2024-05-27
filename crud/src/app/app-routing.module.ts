import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'allEmployees',
    pathMatch: 'full',
  },
  {
    path: 'allEmployees',
    component: ListEmployeeComponent,
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
  },
  { path: 'editEmployee', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
