import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {

  submit_form: FormGroup | any;

  constructor(private service: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.submit_form = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        salary: new FormControl('', Validators.required)
      }
    );
  }

  add_emp() {
    this.service.submit(this.submit_form.get('name').value,
      this.submit_form.get('email').value,
      this.submit_form.get('phone').value,
      this.submit_form.get('salary').value).subscribe((data: any) => {
        if (data.status == 'success') {
          alert('Inserted Success')
          // this.submit_form.reset();
          this.router.navigate(['employees'])
        }
        else if (data.status == 'error') {
          alert('Already Exist');
        }
      });
  }

  // ngAfterViewInit() {

  // }
}

