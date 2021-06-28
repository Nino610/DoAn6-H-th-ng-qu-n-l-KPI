import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Team } from '../../models/team';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  constructor(
    private datePipe: DatePipe,
    public service: LoginService,
    public ProfileService: EmployeeService,
    private toast: ToastrService
  ) {}
  submitted = false;
  listEmployee: Employee[];
  listTeam: Team[];
  userDetail: any;
  ngOnInit(): void {
    this.ProfileService.get().then((data) => (this.listEmployee = data));
    this.ProfileService.getTeam().then(
      (dataTeam) => (this.listTeam = dataTeam)
    );
    this.service.getUserProfile().subscribe(
      (res) => {
        this.userDetail = res;
        let ngay = this.datePipe.transform(this.userDetail.birthday, "yyyy-MM-dd");
        this.userDetail.birthday=ngay;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    this.Update();
  }
  Update() {
    
    this.submitted = true;
    let tmp = {
      idemployee: this.userDetail.idemployee,
      idteam: this.userDetail.idteam,
      name: this.userDetail.name,
      gender: this.userDetail.gender,
      birthday: this.userDetail.birthday,
      address: this.userDetail.address,
      email: this.userDetail.email,
      phoneNumber: this.userDetail.phonenumber,
      photo: this.userDetail.photo,
      permission: this.userDetail.permission,
    };
    this.service.update(this.userDetail.idemployee, tmp).subscribe(
      (res) => {
        this.toast.success('Thông báo', 'Thao tác thành công');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  handleFileInput(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0].name);
      this.userDetail.photo = event.target.files[0].name;
    }
  }
}
