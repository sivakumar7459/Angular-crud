import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
var $: any;

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  view_emp: any;

  constructor(private service: EmployeesService, private router: Router) { }
  employee: any;

  ngOnInit(): void {
    this.service.check().subscribe((res: any) => {
      if (res.status == 'error') {
        this.router.navigate(['login'])
      }
    });
    this.service.view_emp().subscribe((data: any) => {
      this.employee = data;
    });
  }

  remove(e: any) {
    // console.log(e)
    this.service.delete(e).subscribe((res: any) => {
      window.location.reload();
    })
  }
}
