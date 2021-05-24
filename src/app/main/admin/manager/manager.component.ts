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
  manager: Manager[];
  test: String;
  constructor(public service: ManagerService, private toast: ToastrService) {}
  displayBasic: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.service.post().subscribe(
      (res) => {
        this.reset(form);
        this.toast.success('Thêm thành công!');
      },
      (err) => {
        console.log(err);
      }
    );
    if (form.value.subjectId == null) this.insertRecord(form);
    else this.updateRecord(form);
  }
  reset(form: NgForm) {
    form.form.reset();
    this.service.formData = new Manager();
  }
  insertRecord(form: NgForm) {}
  updateRecord(form: NgForm) {}
}
