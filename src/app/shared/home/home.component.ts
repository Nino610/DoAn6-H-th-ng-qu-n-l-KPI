import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThongKeService } from 'src/app/services/thongke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sumKpi: any;
  sumTeam: any;
  sumEmployee: any;
  kpiofmonth: any;
  sumgroupkpi: any;
  sumKpiWorking: any;
  PercentOfDone: any;
  constructor(private router: Router, public service: ThongKeService) {}

  ngOnInit(): void {
    this.service
      .getsumKpi()
      .toPromise()
      .then((data) => (this.sumKpi = data));
    this.service
      .getsumTeam()
      .toPromise()
      .then((data) => (this.sumTeam = data));
    this.service
      .getsumEmployee()
      .toPromise()
      .then((data) => (this.sumEmployee = data));
    this.service
      .getsumkpiOfMonth()
      .toPromise()
      .then((data) => (this.kpiofmonth = data));
    this.service
      .getsumGroupkpi()
      .toPromise()
      .then((data) => (this.sumgroupkpi = data));
    this.service
      .getsumKpiWorking()
      .toPromise()
      .then((data) => (this.sumKpiWorking = data));
    this.service
      .getPercentOfDone()
      .toPromise()
      .then((data) => (this.PercentOfDone = data));
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getSumKpi() {}
}
