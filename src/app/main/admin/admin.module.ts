import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
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
import { GroupKPIComponent } from './group-kpi/group-kpi.component';
import { GroupkpiService } from '../../services/groupkpi.service';
import { ManagerService } from '../../services/manager.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SortEvent } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { LineComponent } from '../../shared/chart/line/line.component';
import { PieComponent } from '../../shared/chart/pie/pie.component';
import { UserprofileComponent } from '../../shared/userprofile/userprofile.component';
import { AuthGuard } from '../../auth/auth.guard';
import { HomeComponent } from 'src/app/shared/home/home.component';
import { KPIComponent } from './KPI/kpi/kpi.component';
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
        path: 'admin/KPI',
        component: KPIComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'proFile',
        component: UserprofileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: LineComponent,
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
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [
    DepartmentComponent,
    EmployeesComponent,
    ManagerComponent,
    LineComponent,
    PieComponent,
    UserprofileComponent,
    KPIComponent,
    GroupKPIComponent,
    TargetListComponent,
    ProgressListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CalendarModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    InputTextModule,
    MultiSelectModule,
    ButtonModule,
    FileUploadModule,
    ChartModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    RouterModule.forChild(adminroutes),
  ],
  bootstrap: [AdminComponent],
  providers: [GroupkpiService, ManagerService],
})
export class AdminModule {}
