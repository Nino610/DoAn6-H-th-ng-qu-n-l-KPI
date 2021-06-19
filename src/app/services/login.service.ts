import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
import { Team } from '../models/team';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee';
import { Account } from '../models/account';
import { MustMatch } from '../helpers/must-match.validator';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly Url = 'https://localhost:44393/api/Accounts';
  readonly baseUrl = '  https://localhost:44393/api/Employees';
  readonly profileUrl = 'https://localhost:44393/api/UserProfile';
  readonly TeamUrl = 'https://localhost:44393/api/Teams';
  formData: Account = new Account();
  listEmployee: Employee[];
  listTeam: Team[];
  listAccount: Account[];
  formlogin = {
    UserName: 12,
    Password: '',
  };
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  formModel = this.fb.group({
    UserName: ['', [Validators.required, Validators.maxLength(6)]],
    Passwords: this.fb.group(
      {
        Password: ['', Validators.required],
        ConfirmPassword: ['', Validators.required],
      },
      {
        validator: this.compoarePawwords,
      }
    ),
    FullName: ['', Validators.required],
    Permission: ['', Validators.required],
  });
  compoarePawwords(fb: FormGroup) {
    let confirmPswdCtrl = fb.get('ConfirmPassword');
    if (
      confirmPswdCtrl.errors == null ||
      'passordNotMatch' in confirmPswdCtrl.errors
    ) {
      if (fb.get('Password').value != confirmPswdCtrl.value)
        confirmPswdCtrl.setErrors({ passwordNotMatch: true });
      else confirmPswdCtrl.setErrors(null);
    }
  }
  register() {
    var body = {
      Username: this.formModel.value.UserName,
      Password: this.formModel.value.Passwords.Password,
      Fullname: this.formModel.value.FullName,
      Permission: this.formModel.value.Permission,
    };
    return this.http.post(this.Url + '/them', body);
  }
  login(formlogin) {
    return this.http.post(this.Url + '/login', formlogin);
  }
  // login1() {
  //   return this.http.post(this.Url + '/login', this.formData);
  // }
  getUserProfile() {
    var tokenHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(this.profileUrl, { headers: tokenHeaders });
  }
  update(id, data): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${id}`, data);
  }
  getPermission() {
    return this.http
      .get(this.Url)
      .toPromise()
      .then((res) => (this.listAccount = res as Account[]));
  }
}
