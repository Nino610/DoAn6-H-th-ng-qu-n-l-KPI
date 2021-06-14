import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) {}
  userDetail: any;
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      (res) => {
        this.userDetail = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
