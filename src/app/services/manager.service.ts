import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  readonly baseUrl = 'https://localhost:44371/api/Managers';
  formData: Manager = new Manager();
  listManager: Manager[];
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
