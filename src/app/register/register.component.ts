import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  register_form: FormGroup | any;

  constructor(private service: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.register_form = new FormGroup(
      {
        // id: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        conform_pass: new FormControl('', Validators.required)
      }
    );
  }

  register_acc() {
    this.service.new_register(
      this.register_form.get('username').value,
      this.register_form.get('email').value,
      this.register_form.get('password').value,
      this.register_form.get('conform_pass').value).subscribe((data: any) => {
        if (data.status == 'success') {
          alert('Register Success');
          this.router.navigate(['login']);
          // this.register_form.reset();
        }
        else if (data.status == 'error') {
          alert('Account Already Exist');
          // this.router.navigate(['']);
        }
      });
  }

}
