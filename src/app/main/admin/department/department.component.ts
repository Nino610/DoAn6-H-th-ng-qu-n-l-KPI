import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  listTeam: Team[];
  constructor(
    public service: TeamService,
    private toast: ToastrService,
    private router: Router
  ) {}
  test: String;
  basicData: any;
  idteam: any;
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  statuses: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  ngOnInit(): void {
    this.service.getTeam().then((data) => (this.listTeam = data));
    console.log(this.listTeam);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listTeam);
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
  reset(form: NgForm) {
    form.form.reset();
    this.service.formData = new Team();
  }
  insert(form: NgForm) {
    this.service.postTeam().subscribe(
      (res) => {
        this.reset(form);
        this.service.getTeam().then((data) => (this.listTeam = data));
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: String) {
    if (confirm('Bạn có muốn xóa dữ liệu không?')) {
      this.service.deleteTeam(id).subscribe((res) => {
        this.service.getTeam().then((data) => (this.listTeam = data));
        this.toast.error('Thông báo', 'Xóa thành công');
      });
    }
  }
  onSubmitUpdate(form1: NgForm) {
    this.update(form1);
  }
  displayUpdateForm(data: Team) {
    this.displayBasicUpdate = true;
    this.service.formData = Object.assign({}, data);
  }
  update(form1: NgForm) {
    this.service.putTeam().subscribe(
      (res) => {
        this.service.getTeam().then((data) => (this.listTeam = data));
        this.toast.success('Sửa thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
