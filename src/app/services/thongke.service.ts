import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kpi } from '../models/kpi';
import { Employee } from '../models/employee';
import { Caculator } from '../models/caculator';
@Injectable({
  providedIn: 'root',
})
export class ThongKeService {
  readonly baseUrl = '  https://localhost:44393/api/Employees';
  readonly caculatorUrl = 'https://localhost:44393/api/Caculators';
  readonly thongkeUrl = 'https://localhost:44393/api/thongke';
  listCaculator: Caculator[];
  formData: Kpi = new Kpi();
  constructor(private http: HttpClient) {}

  getPersenOfKpi() {
    return this.http.get(
      this.thongkeUrl + '/PersentOfKpi/' + this.formData.idkpi
    );
  }
  get() {
    return this.http
      .get(this.caculatorUrl)
      .toPromise()
      .then((res) => (this.listCaculator = res as Caculator[]));
  }
}
