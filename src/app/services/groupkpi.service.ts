import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/groupKPI';
@Injectable({
  providedIn: 'root',
})
export class GroupkpiService {
  formData: Group;
  constructor() {}
}
