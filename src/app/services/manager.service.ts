import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  readonly baseUrl = 'https://localhost:44364/api/Managers';
  formData: Manager = new Manager();
  constructor(private http: HttpClient) {}
  post() {
    return this.http.post(this.baseUrl + '/them', this.formData);
  }
}
