import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private service: EmployeesService, private router: Router) { }

  // ngOnInit() {
  //   this.service.Logout().subscribe((data: any) => {
  //     this.employee = data;
  //   });
  // }

  logout() {
    this.service.removeSession();
    this.router.navigate(['login'])
  }

}
