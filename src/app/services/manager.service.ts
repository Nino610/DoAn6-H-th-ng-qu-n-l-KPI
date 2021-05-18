import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  formData: Manager;
  constructor() {}
}
