import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'add-employee', component: EmployeeAddComponent },
  { path: 'edit-employees/:id', component: EditEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
