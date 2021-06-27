import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { Kpi } from '../../../models/kpi';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';
import { KpiService } from 'src/app/services/kpi.service';
import { ManagerService } from 'src/app/services/manager.service';
import { Caculator } from 'src/app/models/caculator';
import { ThongKeService } from 'src/app/services/thongke.service';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  data: any;
  listCaculator: Caculator[];
  listSelectCalculator: ['idkpi', 'namekpi', 'numberkpi'];
  listKpi: Kpi[];
  constructor(
    public service: KpiService,
    public thongKeService: ThongKeService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          //data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }

  ngOnInit(): void {
    this.service.get().then((dataKpi) => (this.listKpi = dataKpi));
    this.thongKeService.get().then((data) => {
      //this.basicData.labels = data.map((a) => a.name);
      //this.basicData.datasets[0].label = data.map((a) => a.name);
      this.listCaculator = data;
      this.data.labels = data.map((a) => a.namekpi);
      this.data.datasets[0].data = data.map((a) => a.completeofday);
    });
  }
  onSubmit(form: NgForm) {
    this.getPersenOfKpi(form);
  }
  getPersenOfKpi(form: NgForm) {
    this.thongKeService.getPersenOfKpi();
  }
  getValue(event) {
    console.log(event.target.value);
  }
}
