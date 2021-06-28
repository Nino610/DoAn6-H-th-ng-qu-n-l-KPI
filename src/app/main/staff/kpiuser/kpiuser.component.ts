import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../../models/kpi';
import { GroupKPI } from '../../../models/groupkpi';
import { ToastrService } from 'ngx-toastr';
import { GroupkpiService } from 'src/app/services/groupkpi.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { KpiService } from 'src/app/services/kpi.service';

@Component({
  selector: 'app-kpiuser',
  templateUrl: './kpiuser.component.html',
  styleUrls: ['./kpiuser.component.css'],
})
export class KpiuserComponent implements OnInit {
  listKPI: Kpi[];
  listGroupKpi: GroupKPI[];
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
    this.service.get().then((data) => (this.listKPI = data));
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.listKPI);
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
