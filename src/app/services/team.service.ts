import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
import { Team } from '../models/team';
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  readonly baseUrl = 'https://localhost:44393/api/Managers';
  readonly GroupKpiUrl = 'https://localhost:44393/api/GroupKpis';
  formData: Team = new Team();
  listTeam: Team[];
  listGroup: Group[];
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
  get() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.listTeam = res as Team[]));
  }
  getGroupKpi() {
    return this.http
      .get(this.GroupKpiUrl)
      .toPromise()
      .then((res) => (this.listGroup = res as Group[]));
  }
  put() {
    return this.http.put(
      this.baseUrl + '/sua/' + this.formData.idteam,
      this.formData
    );
  }
  delete(id: String) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
