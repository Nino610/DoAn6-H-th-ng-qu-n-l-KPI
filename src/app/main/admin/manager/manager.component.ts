import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NgForm } from '@angular/forms';
import { Manager } from '../../../models/manager';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  listManager: Manager[];
  test: String;
  constructor(public service: ManagerService, private toast: ToastrService) {}
  displayBasic: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {
    this.service.get().then((data) => (this.listManager = data));
  }
  onSubmit(form: NgForm) {
    this.service.post().subscribe(
      (res) => {
        this.reset(form);
        this.service.get().then((data) => (this.listManager = data));
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  reset(form: NgForm) {
    form.form.reset();
    this.service.formData = new Manager();
  }
  delete(id: String) {
    if (confirm('Are you sure you want to delete')) {
      this.service.delete(id).subscribe((res) => {
        this.service.get().then((data) => (this.listManager = data));
        this.toast.error('Thông báo', 'Thao tác thành công');
      });
    }
  }
}
