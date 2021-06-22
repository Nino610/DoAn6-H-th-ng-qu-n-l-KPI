import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupKPI } from '../models/groupKPI';
import { Kpi } from '../models/kpi';
@Injectable({
  providedIn: 'root',
})
export class KpiService {
  readonly baseUrl = 'https://localhost:44393/api/Kpis';
  readonly groupKPIUrl = 'https://localhost:44393/api/Groupkpis';
  formData: Kpi = new Kpi();
  listKpi: Kpi[];
  listGroupKpi: GroupKPI[];
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
  getGroupKpi() {
    return this.http
      .get(this.groupKPIUrl)
      .toPromise()
      .then((res) => (this.listGroupKpi = res as GroupKPI[]));
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
  delete(id: number) {
    return this.http.delete(this.baseUrl + '/xoa/' + id);
  }
}
