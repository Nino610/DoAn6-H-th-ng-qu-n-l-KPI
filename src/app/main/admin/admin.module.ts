import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManagerComponent } from './manager/manager.component';
import { SumDataComponent } from './sum-data/sum-data.component';
import { TargetListComponent } from './KPI/target-list/target-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressListComponent } from './KPI/progress-list/progress-list.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DepartmentComponent } from './department/department.component';
import { LineComponent } from './chart/line/line.component';
import { PieComponent } from './chart/pie/pie.component';
import { GroupKPIComponent } from './group-kpi/group-kpi.component';
import { GroupkpiService } from '../../services/groupkpi.service';
import { ManagerService } from '../../services/manager.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
export const adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin/manager',
        component: ManagerComponent,
      },
      {
        path: 'admin/employees',
        component: EmployeesComponent,
      },
      {
        path: 'admin/sumData',
        component: SumDataComponent,
      },
      {
        path: 'admin/targetList',
        component: TargetListComponent,
      },
      {
        path: 'admin/progressList',
        component: ProgressListComponent,
      },
      {
        path: 'admin/department',
        component: DepartmentComponent,
      },
      {
        path: 'admin/groupKPI',
        component: GroupKPIComponent,
      },
      {
        path: 'chart/line',
        component: LineComponent,
      },
      {
        path: 'chart/pie',
        component: PieComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [DepartmentComponent, EmployeesComponent, ManagerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CalendarModule,
    InputTextModule,
    RouterModule.forChild(adminroutes),
  ],
  bootstrap: [AdminComponent],
  providers: [GroupkpiService, ManagerService],
})
export class AdminModule {}
