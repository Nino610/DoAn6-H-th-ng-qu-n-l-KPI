import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  listEmployee: Employee[];
  listTeam: Team[];
  Gender: any[] = [
    { name: 'Nam', value: 'Nam' },
    { name: 'Nữ', value: 'Nữ' },
  ];

  test: String;
  basicData: any;
  idteam: any;
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  constructor(
    public service: EmployeeService,
    public managersv: ManagerService,
    private toast: ToastrService,
    private router: Router
  ) {}

  showBasicDialog() {
    this.displayBasic = true;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
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
  handleFileInput(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0].name);
      this.service.formData.photo = event.target.files[0].name;
    }
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
        this.toast.error('Thông báo', 'Xóa thành công');
      });
    }
  }
}
