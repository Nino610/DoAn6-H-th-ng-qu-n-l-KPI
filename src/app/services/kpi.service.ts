import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupKPI } from '../models/groupKPI';
import { Kpi } from '../models/kpi';
import { ProgressListKpi } from '../models/progresslist';
import { TargetListKpi } from '../models/targetlist';
@Injectable({
  providedIn: 'root',
})
export class KpiService {
  readonly baseUrl = 'https://localhost:44393/api/Kpis';
  readonly groupKPIUrl = 'https://localhost:44393/api/Groupkpis';
  readonly progressListUrl = 'https://localhost:44393/api/Progresslists';
  readonly targetListUrl = 'https://localhost:44393/api/Targetlists';
  formData: Kpi = new Kpi();
  listKpi: Kpi[];
  groupKPI: GroupKPI = new GroupKPI();
  formDataTarget: TargetListKpi = new TargetListKpi();
  listTarget: TargetListKpi[];
  listGroupKpi: GroupKPI[];
  formDataProgress: ProgressListKpi = new ProgressListKpi();
  listProgressKpi: ProgressListKpi[];
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
  // tiến độ thực hiện chỉ tiêu
  getProgress() {
    return this.http
      .get(this.progressListUrl)
      .toPromise()
      .then((res) => (this.listProgressKpi = res as ProgressListKpi[]));
  }
  postProgresst() {
    return this.http.post(
      this.progressListUrl + '/them',
      this.formDataProgress
    );
  }
  putProgress() {
    return this.http.put(
      this.progressListUrl + '/sua/' + this.formDataProgress.idkpi,
      this.formDataProgress
    );
  }
  deleteProgress(id: number) {
    return this.http.delete(this.progressListUrl + '/xoa/' + id);
  }
  //giao chỉ tiêu
  getTarget() {
    return this.http
      .get(this.targetListUrl)
      .toPromise()
      .then((res) => (this.listTarget = res as TargetListKpi[]));
  }
  postTarget() {
    return this.http.post(this.targetListUrl + '/them', this.formDataTarget);
  }
  putTarget() {
    return this.http.put(
      this.targetListUrl + '/sua/' + this.formDataTarget.idkpi,
      this.formDataTarget
    );
  }
  deleteTarget(id: number) {
    return this.http.delete(this.targetListUrl + '/xoa/' + id);
  }
  getKpiFromGroupId(id) {
    return this.http.get(this.baseUrl + '/get/' + id);
  }
}
