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
  displayBasicUpdate: boolean = false;
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
  onSubmitUpdate(form1: NgForm) {
    this.service.put().subscribe(
      (res) => {
        this.reset(form1);
        this.service.get().then((data) => (this.listManager = data));
        this.toast.info('Sửa thành công');
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
  displayUpdateForm(data: Manager) {
    this.displayBasicUpdate = true;
    // this.service.formData = data;
    this.service.formData = Object.assign({}, data);
  }
  delete(id: String) {
    if (confirm('Bạn có muốn xóa dữ liệu không?')) {
      this.service.delete(id).subscribe((res) => {
        this.service.get().then((data) => (this.listManager = data));
        this.toast.error('Thông báo', 'Thao tác thành công');
      });
    }
  }
}
