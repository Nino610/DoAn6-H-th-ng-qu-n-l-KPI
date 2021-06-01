import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
import { Team } from '../models/team';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  readonly baseUrl = 'https://localhost:44393/api/Managers';
  readonly TeamUrl = 'https://localhost:44393/api/Teams';
  formData: Manager = new Manager();
  listManager: Manager[];
  listTeam: Team[];
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
  get() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.listManager = res as Manager[]));
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
      this.baseUrl + '/sua/' + this.formData.idmanager,
      this.formData
    );
  }
  delete(id: String) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
