import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerComponent } from './manager/manager.component';
import { SumDataComponent } from './sum-data/sum-data.component';
import { TargetListComponent } from './KPI/target-list/target-list.component';
import { ProgressListComponent } from './KPI/progress-list/progress-list.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DepartmentComponent } from './department/department.component';
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
    ],
  },
];
@NgModule({
  declarations: [DepartmentComponent, EmployeesComponent],
  imports: [CommonModule, RouterModule.forChild(adminroutes)],
})
export class AdminModule {}
