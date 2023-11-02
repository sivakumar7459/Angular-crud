import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login_form: FormGroup | any;

  constructor(private service: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.service.check().subscribe((res: any) => {
      if (res.status == 'success') {
        this.router.navigate(['employees'])
      }
    })
    this.login_form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  page_login() {
    this.login_form.markAllAsTouched();
    if (this.login_form.valid) {
      this.service.login(
        this.login_form.get('username').value,
        this.login_form.get('password').value
      ).subscribe((res: any) => {
        console.log(res);
        if (res.status == 'success') {
          this.service.setSession(res);
          this.router.navigate(['employees'])
          alert('Login success');
        }
        else {
          alert('Enter Valid Credentials')
        }
      })
    }
    else {
      alert('Enter Valid Details')
    }
  }
}

