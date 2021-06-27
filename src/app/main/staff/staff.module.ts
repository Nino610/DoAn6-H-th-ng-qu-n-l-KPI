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
import { ProgresslistComponent } from './progresslist/progresslist.component';
import { StaffComponent } from './staff.component';
export const staffroutes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: [
      {
        path: 'proFile',
        component: UserprofileComponent,
      },
      // {
      //   path: 'user/progresslist',
      //   component: ProgresslistComponent,
      // },
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
    data: { permittedRoles: ['2'] },
  },
];
@NgModule({
  declarations: [],
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
})
export class StaffModule {}
