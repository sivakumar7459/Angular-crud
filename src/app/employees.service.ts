import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  website = 'http://localhost/api/';
  // update_data: any;
  remove: any;
  // register_form: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  view_emp(): Observable<object> {
    var url = this.website + 'view.php';
    var formData = new FormData();
    return this.http.post(url, formData);
  }

  view_empid(id: any): Observable<object> {
    var url = this.website + 'view_id.php';
    var formData = new FormData();
    formData.append('id', id);
    return this.http.post(url, formData);
  }

  submit(name: any, email: any, phone: any, salary: any): Observable<object> {
    var url = this.website + 'add_emp.php';
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('salary', salary);
    return this.http.post(url, formData);
  }

  update(id: any, name: any, email: any, phone: any, salary: any): Observable<object> {
    var url = this.website + 'update.php';
    var formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('salary', salary);
    return this.http.post(url, formData);
  }

  delete(id: any): Observable<object> {
    var url = this.website + 'delete.php';
    var formData = new FormData();
    formData.append('id', id);
    return this.http.post(url, formData);
  }

  login(username: any, password: any): Observable<object> {
    var url = this.website + 'login.php';
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post(url, formData);
  }

  setSession(res: any) {
    localStorage.setItem('token', res.token);
  }

  removeSession() {
    localStorage.removeItem('token');
  }

  check() {
    var url = this.website + 'check.php';
    var token: any = localStorage.getItem('token');
    var formData = new FormData()
    formData.append('token', token)
    return this.http.post(url, formData)
  }

  new_register(username: any, email: any, password: any, conform_pass: any): Observable<object> {
    var url = this.website + 'register.php';
    var formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('conform_pass', conform_pass);
    return this.http.post(url, formData);
  }
}


