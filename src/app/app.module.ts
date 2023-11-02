import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { DeleteEmployeesComponent } from './delete-employees/delete-employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesListComponent,
    EmployeeAddComponent,
    EditEmployeesComponent,
    DeleteEmployeesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
