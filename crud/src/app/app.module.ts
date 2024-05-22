import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
