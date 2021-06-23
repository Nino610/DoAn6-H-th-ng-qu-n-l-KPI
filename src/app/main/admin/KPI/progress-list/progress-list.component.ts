import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../../../models/kpi';
import { ToastrService } from 'ngx-toastr';
import { GroupkpiService } from 'src/app/services/groupkpi.service';
import { NgForm } from '@angular/forms';
import { GroupKPI } from '../../../../models/groupKPI';
import { Router } from '@angular/router';
import { KpiService } from 'src/app/services/kpi.service';
import { ProgressListKpi } from '../../../../models/progresslist';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css'],
})
export class ProgressListComponent implements OnInit {
  listKPI: Kpi[];
  listGroupKpi: GroupKPI[];
  listProgressKpi: ProgressListKpi[];
  basicOptions: any;
  displayBasic: boolean = false;
  displayBasicUpdate: boolean = false;
  statuses: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  constructor(
    public service: KpiService,
    public groupkpiService: GroupkpiService,
    private toast: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.service.getProgress().then((data) => (this.listProgressKpi = data));
    this.service
      .getGroupKpi()
      .then((dataGroupKpi) => (this.listGroupKpi = dataGroupKpi));
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listProgressKpi);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + 'export' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
