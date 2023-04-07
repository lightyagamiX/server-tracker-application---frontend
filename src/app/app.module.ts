import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './pages/department/add-department/add-department.component';
import { ViewDepartmentComponent } from './pages/department/view-department/view-department.component';
import { AddRolesComponent } from './pages/roles/add-roles/add-roles.component';
import { ViewRolesComponent } from './pages/roles/view-roles/view-roles.component';
import { AddThirdpartyComponent } from './pages/thirdparty/add-thirdparty/add-thirdparty.component';
import { ViewThirdpartyComponent } from './pages/thirdparty/view-thirdparty/view-thirdparty.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';
import { AddApplicationComponent } from './pages/application/add-application/add-application.component';
import { ViewApplicationComponent } from './pages/application/view-application/view-application.component';
import { AddTrainingComponent } from './pages/training/add-training/add-training.component';
import { ViewTrainingComponent } from './pages/training/view-training/view-training.component';
import { AddReporttypeComponent } from './pages/reporttype/add-reporttype/add-reporttype.component';
import { ViewReporttypeComponent } from './pages/reporttype/view-reporttype/view-reporttype.component';
import { AddLetterComponent } from './pages/letter/add-letter/add-letter.component';
import { ViewLetterComponent } from './pages/letter/view-letter/view-letter.component';
import { AddReportComponent } from './pages/report/add-report/add-report.component';
import { ViewReportComponent } from './pages/report/view-report/view-report.component';
import { AddUserRoleComponent } from './pages/user-role/add-user-role/add-user-role.component';
import { ViewUserRoleComponent } from './pages/user-role/view-user-role/view-user-role.component';
import { HeaderComponent } from './layout/header/header.component';
import { PreloaderComponent } from './layout/preloader/preloader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    AddRolesComponent,
    ViewRolesComponent,
    AddThirdpartyComponent,
    ViewThirdpartyComponent,
    AddUserComponent,
    ViewUserComponent,
    AddApplicationComponent,
    ViewApplicationComponent,
    AddTrainingComponent,
    ViewTrainingComponent,
    AddReporttypeComponent,
    ViewReporttypeComponent,
    AddLetterComponent,
    ViewLetterComponent,
    AddReportComponent,
    ViewReportComponent,
    AddUserRoleComponent,
    ViewUserRoleComponent,
    HeaderComponent,
    PreloaderComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgbModule
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
