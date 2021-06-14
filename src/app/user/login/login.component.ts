import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: LoginService,
    private router: Router,
    private toast: ToastrService
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('home');
  }
  formModel = {
    UserName: '',
    Password: '',
  };
  onSubmit() {
    this.service.login(this.formModel).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('');
      },
      (err) => {
        if (err.status == 400) {
          this.toast.error('Tài khoản và mật khẩu không đúng', 'Lỗi đăng nhập');
        } else console.log('err');
      }
    );
  }
}
