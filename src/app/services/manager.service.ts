import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Group } from '../models/groupKPI';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  readonly baseUrl = 'https://localhost:44371/api/Managers';
  readonly GroupKpiUrl = 'https://localhost:44371/api/GroupKpis';
  formData: Manager = new Manager();
  listManager: Manager[];
  listGroup: Group[];
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
  getGroupKpi() {
    return this.http
      .get(this.GroupKpiUrl)
      .toPromise()
      .then((res) => (this.listGroup = res as Group[]));
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
