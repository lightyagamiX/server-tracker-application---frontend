import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicationComponent } from './pages/application/add-application/add-application.component';
import { ViewApplicationComponent } from './pages/application/view-application/view-application.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddDepartmentComponent } from './pages/department/add-department/add-department.component';
import { ViewDepartmentComponent } from './pages/department/view-department/view-department.component';
import { AddLetterComponent } from './pages/letter/add-letter/add-letter.component';
import { ViewLetterComponent } from './pages/letter/view-letter/view-letter.component';
import { LoginComponent } from './pages/login/login.component';
import { AddReportComponent } from './pages/report/add-report/add-report.component';
import { ViewReportComponent } from './pages/report/view-report/view-report.component';
import { AddReporttypeComponent } from './pages/reporttype/add-reporttype/add-reporttype.component';
import { ViewReporttypeComponent } from './pages/reporttype/view-reporttype/view-reporttype.component';
import { AddRolesComponent } from './pages/roles/add-roles/add-roles.component';
import { ViewRolesComponent } from './pages/roles/view-roles/view-roles.component';
import { AddThirdpartyComponent } from './pages/thirdparty/add-thirdparty/add-thirdparty.component';
import { ViewThirdpartyComponent } from './pages/thirdparty/view-thirdparty/view-thirdparty.component';
import { AddTrainingComponent } from './pages/training/add-training/add-training.component';
import { ViewTrainingComponent } from './pages/training/view-training/view-training.component';
import { AddUserRoleComponent } from './pages/user-role/add-user-role/add-user-role.component';
import { ViewUserRoleComponent } from './pages/user-role/view-user-role/view-user-role.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-department', component: AddDepartmentComponent},
  {path: 'add-roles', component: AddRolesComponent},
  {path: 'add-thirdparty', component: AddThirdpartyComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-application', component: AddApplicationComponent},
  {path: 'add-training', component: AddTrainingComponent},
  {path: 'add-reporttype', component: AddReporttypeComponent},
  {path: 'add-letter', component: AddLetterComponent},
  {path: 'add-report', component: AddReportComponent},
  {path: 'add-user-role-map', component: AddUserRoleComponent},

  {path: 'department', component: ViewDepartmentComponent},
  {path: 'roles', component:ViewRolesComponent},
  {path: 'thirdparty', component: ViewThirdpartyComponent},
  {path: 'user', component: ViewUserComponent},
  {path: 'application', component: ViewApplicationComponent},
  {path: 'training', component: ViewTrainingComponent},
  {path: 'reporttype', component: ViewReporttypeComponent},
  {path: 'letter', component: ViewLetterComponent},
  {path: 'report', component: ViewReportComponent},
  {path: 'user-role-map', component: ViewUserRoleComponent},

  {path: 'department/:id/edit', component: AddDepartmentComponent},
  {path: 'roles/:id/edit', component: AddRolesComponent},
  {path: 'thirdparty/:id/edit', component: AddThirdpartyComponent},
  {path: 'users/:id/edit', component: AddUserComponent},
  {path: 'application/:id/edit', component: AddApplicationComponent},
  {path: 'training/:id/edit', component: AddTrainingComponent},
  {path: 'reporttype/:id/edit', component: AddReporttypeComponent},
  {path: 'letter/:id/edit', component: AddLetterComponent},
  {path: 'report/:id/edit', component: AddReportComponent},
  {path: 'user-role-map/:id/edit', component: AddUserRoleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
