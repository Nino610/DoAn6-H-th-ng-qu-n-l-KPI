import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NgForm } from '@angular/forms';
import { Manager } from '../../../models/manager';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  manager: Manager[];
  test: String;
  constructor(public service: ManagerService) {}
  displayBasic: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.service.post().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
    if (form.value.subjectId == null) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form: NgForm) {}
  updateRecord(form: NgForm) {}
}
