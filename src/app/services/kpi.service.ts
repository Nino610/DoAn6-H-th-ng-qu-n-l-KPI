import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/groupKPI';
import { Kpi } from '../models/kpi';
@Injectable({
  providedIn: 'root',
})
export class KpiService {
  readonly baseUrl = '  https://localhost:44393/api/Kpis';
  readonly TeamUrl = 'https://localhost:44393/api/Teams';
  formData: Kpi = new Kpi();
  listKpi: Kpi[];
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
  get() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((res) => (this.listKpi = res as Kpi[]));
  }
  getChart() {
    return this.http.get(this.baseUrl);
  }
  put() {
    return this.http.put(
      this.baseUrl + '/sua/' + this.formData.idkpi,
      this.formData
    );
  }
  delete(id: String) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
