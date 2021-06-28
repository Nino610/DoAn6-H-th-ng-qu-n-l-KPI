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
import { ProgressListKpi } from 'src/app/models/progresslist';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-progresslistuser',
  templateUrl: './progresslistuser.component.html',
  styleUrls: ['./progresslistuser.component.css'],
})
export class ProgresslistuserComponent implements OnInit {
  ob: Team = new Team();
  obGr: GroupKPI = new GroupKPI();
  obKpi: Kpi = new Kpi();
  // listKPI: Kpi[];
  listKPI: any;
  listKpiFromGroupKpi: any;
  listTeam: Team[];
  listGroupKpi: GroupKPI[];
  listProgressKpi: ProgressListKpi[];
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  statuses: any[];
  loading: boolean = true;
  listEmpFromName: any;
  listEmployeeFromTeam: any;
  idgroupkpi: any;
  nameKpi: any;
  idteam: any;
  idGroup: number;
  userDetail: any;
  activityValues: number[] = [0, 100];
  Complete: any[] = [
    { name: 'Hoàn thành', value: '0' },
    { name: 'Chưa hoàn thành', value: '1' },
  ];
  constructor(
    public service: KpiService,
    private datePipe: DatePipe,
    public groupkpiService: GroupkpiService,
    public teamService: TeamService,
    public employeeService: EmployeeService,
    public loginService: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getProgress().then((data) => (this.listProgressKpi = data));
    this.teamService.getTeam().then((data) => (this.listTeam = data));
    this.loginService.getUserProfile().subscribe(
      (res) => {
        this.userDetail = res;
        this.service.formDataProgress.idemployee = this.userDetail.idemployee;
        this.service.formDataProgress.nameemployee = this.userDetail.name;
        this.service.formDataProgress.idteam = this.userDetail.idteam;
        this.teamService
          .getTeamFormId(this.userDetail.idteam)
          .then((data) => (this.listTeam = data));
        this.service.formDataProgress.nameteam = this.listTeam[0].nameteam;
        console.log(this.listTeam[0].nameteam);
      },
      (err) => {
        console.log(err);
      }
    );
    this.groupkpiService
      .get()
      .then((dataGroupKpi) => (this.listGroupKpi = dataGroupKpi));
    console.log();
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listProgressKpi);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + 'export' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
  onSubmit(form: NgForm) {
    this.insert(form);
  }
  onSubmitUpdate(form1: NgForm) {
    this.update(form1);
  }
  reset(form: NgForm) {
    form.form.reset();
    this.service.formData = new Kpi();
  }
  displayUpdateForm(data: ProgressListKpi) {
    this.displayBasicUpdate = true;
    // this.service.formData = data;
    this.service.formDataProgress = Object.assign({}, data);
    let start = this.datePipe.transform(
      this.service.formDataProgress.starttime,
      'yyyy-MM-dd'
    );
    this.service.formDataProgress.starttime = start;
    let end = this.datePipe.transform(
      this.service.formDataProgress.endtime,
      'yyyy-MM-dd'
    );
    this.service.formDataProgress.endtime = end;
    console.log(this.service.formDataProgress.starttime);
  }
  insert(form: NgForm) {
    this.service.postProgresst().subscribe(
      (res) => {
        this.reset(form);
        this.service
          .getProgress()
          .then((data) => (this.listProgressKpi = data));
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(form1: NgForm) {
    console.log(this.service.formDataProgress.idprogress);
    this.service.putProgress().subscribe(
      (res) => {
        this.reset(form1);
        this.service
          .getProgress()
          .then((data) => (this.listProgressKpi = data));
        this.toast.success('Sửa thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    if (confirm('Bạn có muốn xóa dữ liệu không?')) {
      this.service.deleteProgress(id).subscribe((res) => {
        this.service
          .getProgress()
          .then((data) => (this.listProgressKpi = data));
        this.toast.error('Thông báo', 'Xóa thành công');
      });
    }
  }
  getKpi(event) {
    this.obGr = JSON.parse(event.target.value);
    this.service.getKpiFromGroupId(this.obGr.idgroupkpi).subscribe((res) => {
      this.listKpiFromGroupKpi = res;
      this.service.formDataProgress.idgroupkpi = this.obGr.idgroupkpi;
      this.service.formDataProgress.namegroupkpi = this.obGr.namegroupkpi;
      // this.service.formDataProgress.idkpi = this.obGr.idkpi;
    });
  }
  getKpiFromName(event) {
    // this.obKpi=JSON.parse(this.nameKpi);
    this.service.getKpiFromName(event.target.value).subscribe((res) => {
      this.listKPI = res;
      this.service.formDataProgress.idkpi = this.listKPI[0].idkpi;
      console.log(this.listKPI[0]);
    });
  }
  getEmployeeFromName(event) {
    this.employeeService
      .getEmployeeFormName(event.target.value)
      .subscribe((res) => {
        this.listEmpFromName = res;
      });
  }
}
