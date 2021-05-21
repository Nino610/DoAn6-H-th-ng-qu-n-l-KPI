import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor(public service: ManagerService) {}
  displayBasic: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.insertRecord(form);
    if (form.value.subjectId == null) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form: NgForm) {}
  updateRecord(form: NgForm) {}
}
