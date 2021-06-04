import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
import { Team } from '../models/team';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  readonly baseUrl = '  https://localhost:44393/api/Employees';
  readonly TeamUrl = 'https://localhost:44393/api/Teams';
  formData: Employee = new Employee();
  listEmployee: Employee[];
  listTeam: Team[];
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
  get() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.listEmployee = res as Employee[]));
  }
  getChart() {
    return this.http.get(this.baseUrl);
  }
  getTeam() {
    return this.http
      .get(this.TeamUrl)
      .toPromise()
      .then((res) => (this.listTeam = res as Team[]));
  }
  put() {
    return this.http.put(
      this.baseUrl + '/sua/' + this.formData.idemployee,
      this.formData
    );
  }
  delete(id: String) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
