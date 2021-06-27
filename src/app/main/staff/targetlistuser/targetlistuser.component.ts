import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../../models/kpi';
import { ToastrService } from 'ngx-toastr';
import { GroupkpiService } from 'src/app/services/groupkpi.service';
import { NgForm } from '@angular/forms';
import { GroupKPI } from '../../../models/groupKPI';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';
import { KpiService } from 'src/app/services/kpi.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { TargetListKpi } from '../../../models/targetList';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-targetlistuser',
  templateUrl: './targetlistuser.component.html',
  styleUrls: ['./targetlistuser.component.css'],
})
export class TargetlistuserComponent implements OnInit {
  constructor(
    public service: KpiService,
    public groupkpiService: GroupkpiService,
    public teamService: TeamService,
    public employeeService: EmployeeService,
    public loginService: LoginService,
    private toast: ToastrService
  ) {}
  listTargetKpi: any;
  userDetail: any;
  id: any;
  ngOnInit(): void {
    this.loginService.getUserProfile().subscribe(
      (res) => {
        this.userDetail = res;
        console.log(this.userDetail.idemployee);
        console.log(this.userDetail);
        this.service
          .getKpiFormIdEmp(this.userDetail.idemployee)
          .subscribe((data) => (this.listTargetKpi = data));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
