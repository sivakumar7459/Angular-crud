import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent {
  id = '';
  name = '';
  email = '';
  phone = '';
  salary = '';
  constructor(private service: EmployeesService, private route: ActivatedRoute, private router: Router) { }
  myForm: FormGroup | any;

  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      name: new FormControl(this.name, Validators.required),
      email: new FormControl(this.email, Validators.required),
      phone: new FormControl(this.phone, Validators.required),
      salary: new FormControl(this.salary, Validators.required),
    });

    this.id = this.route.snapshot.params['id'];
    this.service.view_empid(this.id).subscribe((res: any) => {
      if (res.status == 'success') {
        this.myForm.setValue({
          id: res.id,
          name: res.name,
          email: res.email,
          phone: res.phone,
          salary: res.salary
        });
      }
    });
  }

  form_update() {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      this.service.update(this.myForm.get('id').value,
        this.myForm.get('name').value,
        this.myForm.get('email').value,
        this.myForm.get('phone').value,
        this.myForm.get('salary').value).subscribe((data: any) => {
          if (data.status == 'success') {
            alert('Updated Success');
            // this.myForm.reset();
            this.router.navigate(['employees']);
          } else if (data.status == 'error') {
            alert('Failed');
          }
        });
    }
  }
}
