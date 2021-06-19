import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  listEmployee: Employee[];
  listTeam: Team[];
  basicData: any;
  idteam: any;
  basicOptions: any;
  constructor(
    public service: EmployeeService,
    public managersv: ManagerService,
    private toast: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.service.get().then((data) => (this.listEmployee = data));
    this.service.getTeam().then((dataTeam) => (this.listTeam = dataTeam));
    this.service.get().then((data) => {
      //this.basicData.labels = data.map((a) => a.name);
      //this.basicData.datasets[0].label = data.map((a) => a.name);
      // this.basicData.datasets[0].label = data.map((a) => a.name);
      this.basicData.datasets[0].data = data.map((a) => a.idemployee);
    });
    this.managersv.get().then((dataTeam) => {
      //this.basicData.labels = dataTeam.map((a) => a.name);
      //this.basicData.datasets[1].label = dataTeam.map((a) => a.name);
      this.basicData.datasets[1].data = dataTeam.map((a) => a.phonenumber);
    });
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Chỉ tiêu: Phần trăm hoàn thành công việc ',
          backgroundColor: '#42A5F5',
          //data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Chỉ tiêu: Khả năng thích ứng môi trường',
          //label: this.listEmployee.map((a) => a.idteam),
          backgroundColor: '#FFA726',
          //data: [28, 48, 40, 19, 86, 27, 90],
          // data1: (this.data.labels = this.listEmployee.map((a) => a.idteam)),
        },
      ],
    };
  }
}
