import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../models/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  fileToUpLoad: File = null;
  imagerUrl: String;
  listEmployee: Employee[];
  listTeam: Team[];
  test: String;
  basicData: any;
  idteam: any;
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  constructor(public service: EmployeeService, private toast: ToastrService) {}

  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {
    this.service.get().then((data) => (this.listEmployee = data));
    this.service.getTeam().then((dataTeam) => (this.listTeam = dataTeam));
    this.service.get().then((data) => {
      this.basicData.labels = data.map((a) => a.idteam);
      this.basicData.data = data.map((a) => a.idemployee);
    });
    this.basicData = {
      datasets: [
        {
          label: 'ad',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          //label: this.listEmployee.map((a) => a.idteam),
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90],
          // data1: (this.data.labels = this.listEmployee.map((a) => a.idteam)),
        },
      ],
    };
  }
  handleFileInput(file: FileList) {
    this.fileToUpLoad = file.item(0);
    var reader = new FileReader();
    // reader.onload = (even: any) => {
    //   this.imagerUrl = event.target.result;
    // };
    reader.readAsDataURL(this.fileToUpLoad);
  }
  onSubmit(form: NgForm) {
    this.insert(form);
  }
  onSubmitUpdate(form1: NgForm) {
    this.update(form1);
  }
  reset(form: NgForm) {
    form.form.reset();
    this.service.formData = new Employee();
  }
  displayUpdateForm(data: Employee) {
    this.displayBasicUpdate = true;
    // this.service.formData = data;
    this.service.formData = Object.assign({}, data);
  }
  insert(form: NgForm) {
    this.service.post().subscribe(
      (res) => {
        this.reset(form);
        this.service.get().then((data) => (this.listEmployee = data));
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(form1: NgForm) {
    this.service.put().subscribe(
      (res) => {
        this.reset(form1);
        this.service.get().then((data) => (this.listEmployee = data));
        this.toast.success('Sửa thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: String) {
    if (confirm('Bạn có muốn xóa dữ liệu không?')) {
      this.service.delete(id).subscribe((res) => {
        this.service.get().then((data) => (this.listEmployee = data));
        this.toast.error('Thông báo', 'Thao tác thành công');
      });
    }
  }
}
