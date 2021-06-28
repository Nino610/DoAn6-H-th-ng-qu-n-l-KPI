import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
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
import { StaffComponent } from './staff.component';
import { TargetlistuserComponent } from './targetlistuser/targetlistuser.component';
import { ProgresslistuserComponent } from './progresslistuser/progresslistuser.component';
import { GroupkpiuserComponent } from './groupkpiuser/groupkpiuser.component';
import { KpiuserComponent } from './kpiuser/kpiuser.component';
import { SumdatauserComponent } from './sumdatauser/sumdatauser.component';
import { DatePipe } from '@angular/common';
import { EmployeeuserComponent } from './employeeuser/employeeuser.component';
import { TeamuserComponent } from './teamuser/teamuser.component';
export const staffroutes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: [
      {
        path: 'user/targetlist',
        component: TargetlistuserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/progresslist',
        component: ProgresslistuserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/groupKPI',
        component: GroupkpiuserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/KPI',
        component: KpiuserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/sumData',
        component: SumdatauserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/employees',
        component: EmployeeuserComponent,
        canActivate: [AuthGuard],
      },
       {
        path: 'user/team',
        component: TeamuserComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
    data: { permittedRoles: ['2'] },
  },
];
@NgModule({
  declarations: [TargetlistuserComponent, ProgresslistuserComponent, GroupkpiuserComponent, KpiuserComponent, SumdatauserComponent, EmployeeuserComponent, TeamuserComponent],
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
    RouterModule.forChild(staffroutes),
  ],
  providers:[DatePipe],
})
export class StaffModule {}
