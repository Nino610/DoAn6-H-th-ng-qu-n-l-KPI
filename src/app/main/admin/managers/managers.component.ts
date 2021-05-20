import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styles: [],
})
export class ManagersComponent implements OnInit {
  constructor(public service: ManagerService) {}
  date6: Date;
  value: Date;
  date1: Date;
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.insertRecord(form);
    if (form.value.subjectId == null) this.insertRecord(form);
    else this.updateRecord(form);
  }
  insertRecord(form: NgForm) {}
  updateRecord(form: NgForm) {}
}
