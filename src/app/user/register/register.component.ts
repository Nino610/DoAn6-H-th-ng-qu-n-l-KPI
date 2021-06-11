import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Account } from '../../models/account';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public service: LoginService,
    private toast: ToastrService
  ) {}
  public formdata: any;
  listAccount: Account[];
  Permission: any[] = [
    { name: 'Quản lý', value: '1' },
    { name: 'Nhân viên', value: '2' },
  ];
  ngOnInit(): void {
    this.service.getPermission().then((data) => (this.listAccount = data));
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        // if (res.succeded) {
        this.service.formModel.reset();
        this.toast.success('Thêm tài khoản thành công!');
        // }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
