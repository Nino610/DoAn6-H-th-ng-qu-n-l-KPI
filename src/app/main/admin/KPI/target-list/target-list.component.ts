import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../../../models/kpi';
import { ToastrService } from 'ngx-toastr';
import { GroupkpiService } from 'src/app/services/groupkpi.service';
import { NgForm } from '@angular/forms';
import { GroupKPI } from '../../../../models/groupKPI';
import { Employee } from '../../../../models/employee';
import { Router } from '@angular/router';
import { KpiService } from 'src/app/services/kpi.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';
import { TargetListKpi } from '../../../../models/targetList';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';
@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css'],
})
export class TargetListComponent implements OnInit {
  ob: Team = new Team();
  obGr: GroupKPI = new GroupKPI();
  obKpi: Kpi = new Kpi();
  // listKPI: Kpi[];
  listKPI: any;
  listKpiFromGroupKpi: any;
  listTeam: Team[];
  listGroupKpi: GroupKPI[];
  listTargetKpi: TargetListKpi[];
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  statuses: any[];
  loading: boolean = true;
  listEmpFromName: any;
  // listEmployeeFromTeam: Kpi[];
  listEmployeeFromTeam: any;
  idgroupkpi: any;
  nameKpi: any;
  idGroup: number;
  userDetail: any;
  activityValues: number[] = [0, 100];
  constructor(
    public service: KpiService,
    public groupkpiService: GroupkpiService,
    public teamService: TeamService,
    public employeeService: EmployeeService,
    public loginService: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getTarget().then((data) => (this.listTargetKpi = data));
    this.teamService.getTeam().then((data) => (this.listTeam = data));
    this.loginService.getUserProfile().subscribe(
      (res) => {
        this.userDetail = res;
        this.service.formDataTarget.namemanager = this.userDetail.name;
      },
      (err) => {
        console.log(err);
      }
    );
    this.service
      .getGroupKpi()
      .then((dataGroupKpi) => (this.listGroupKpi = dataGroupKpi));
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listTargetKpi);
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
  displayUpdateForm(data: Kpi) {
    this.displayBasicUpdate = true;
    // this.service.formData = data;
    this.service.formData = Object.assign({}, data);
  }
  insert(form: NgForm) {
    this.service.postTarget().subscribe(
      (res) => {
        this.reset(form);
        this.service.getTarget().then((data) => (this.listTargetKpi = data));
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(form1: NgForm) {
    this.service.putTarget().subscribe(
      (res) => {
        this.reset(form1);
        this.service.getTarget().then((data) => (this.listTargetKpi = data));
        this.toast.success('Sửa thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    if (confirm('Bạn có muốn xóa dữ liệu không?')) {
      this.service.deleteTarget(id).subscribe((res) => {
        this.service.getTarget().then((data) => (this.listTargetKpi = data));
        this.toast.error('Thông báo', 'Xóa thành công');
      });
    }
  }
  getKpi(event) {
    this.obGr = JSON.parse(event.target.value);
    this.service.getKpiFromGroupId(this.obGr.idgroupkpi).subscribe((res) => {
      this.listKpiFromGroupKpi = res;
      this.service.formDataTarget.idgroupkpi = this.obGr.idgroupkpi;
      this.service.formDataTarget.namegroupkpi = this.obGr.namegroupkpi;
      this.service.formDataTarget.idkpi = this.obGr.idkpi;
    });
  }
  getEmployee(event) {
    this.ob = JSON.parse(event.target.value);
    this.employeeService
      .getEmployeeFormIdTeam(this.ob.idteam)
      .subscribe((res) => {
        this.listEmployeeFromTeam = res;
      });
    this.service.formDataTarget.idteam = this.ob.idteam;
    this.service.formDataTarget.nameteam = this.ob.nameteam;
  }
  getKpiFromName(event) {
    // this.obKpi=JSON.parse(this.nameKpi);
    this.service.getKpiFromName(event.target.value).subscribe((res) => {
      this.listKPI = res;
      this.service.formDataTarget.idkpi = this.listKPI[0].idkpi;
    });
  }
  getEmployeeFromName(event) {
    this.employeeService
      .getEmployeeFormName(event.target.value)
      .subscribe((res) => {
        this.listEmpFromName = res;
        this.service.formDataTarget.idemployees =
          this.listEmpFromName[0].idemployee;
      });
  }
}
