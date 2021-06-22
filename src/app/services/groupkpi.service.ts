import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupKPI } from '../models/groupKPI';
@Injectable({
  providedIn: 'root',
})
export class GroupkpiService {
  readonly baseUrl = 'https://localhost:44393/api/GroupKpis';
  formData: GroupKPI = new GroupKPI();
  listGroup: GroupKPI[];
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
  get() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.listGroup = res as GroupKPI[]));
  }
  put() {
    return this.http.put(
      this.baseUrl + '/sua/' + this.formData.idgroupkpi,
      this.formData
    );
  }
  delete(id: number) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
