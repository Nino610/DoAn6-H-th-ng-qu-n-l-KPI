import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
import { Team } from '../models/team';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../models/employee';
import { MustMatch } from '../helpers/must-match.validator';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly registerUrl = '  https://localhost:44393/api/Accounts';
  readonly TeamUrl = 'https://localhost:44393/api/Teams';
  formData: Employee = new Employee();
  listEmployee: Employee[];
  listTeam: Team[];
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  formModel = this.fb.group({
    UserName: ['', [Validators.required, Validators.maxLength(6)]],
    FullName: ['', Validators.required],
    Passwords: this.fb.group(
      {
        Password: ['', Validators.required],
        ConfirmPassword: ['', Validators.required],
      }
      // {
      //   validator: MustMatch('matkhau', 'nhaplaimatkhau'),
      // }
    ),
  });
  post() {
    return this.http.post(this.registerUrl + '/them', this.formData);
  }

  getTeam() {
    return this.http
      .get(this.TeamUrl)
      .toPromise()
      .then((res) => (this.listTeam = res as Team[]));
  }
}
