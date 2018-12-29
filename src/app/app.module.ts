import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { PendingRegisterListComponent } from './driver/pending-register-list/pending-register-list.component';
import { DriverManagementComponent } from './driver/driver-management/driver-management.component';
import { DriverCancelRequestComponent } from './driver/driver-cancel-request/driver-cancel-request.component';
import { CommissionManagementComponent } from './commission-management/commission-management.component';
import { CarTypeComponent } from './car/car-type/car-type.component';
import { CarModelComponent } from './car/car-model/car-model.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { DriverReportComponent } from './driver/driver-report/driver-report.component';
import { TaxManagementComponent } from './tax-management/tax-management.component';
import { AdvertiseManagementComponent } from './advertise-management/advertise-management.component';
import { CityManagementComponent } from './city-management/city-management.component';
import { GeoFacingComponent } from './geo-facing/geo-facing.component';
import { ApkManagementComponent } from './apk-management/apk-management.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CmsListComponent } from './cms-management/cms-list/cms-list.component';
import { CmsRegisterComponent } from './cms-management/cms-register/cms-register.component';
import { RequestDriverViewComponent } from './driver/request-driver-view/request-driver-view.component';
import { DepositHistoryListComponent } from './deposit-hostory/deposit-history-list/deposit-history-list.component';
import {DepositHistoryComponent} from './deposit-hostory/deposit-history/deposit-history.component';
import { DriverReportViewComponent } from './driver/driver-report/driver-report-view/driver-report-view.component';
import {BootstrapOptions} from '@angular/core/src/application_ref';
import {NgxPaginationModule} from 'ngx-pagination';
import {BootstrapPaginator, DataTableModule} from 'angular-6-datatable';
import { EditDriverComponent } from './driver/edit-driver/edit-driver.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { CarTypeServiceComponent } from './service/car-type-service.component';
import {CarRouterModule} from './car/car-router-module';
import {CarModule} from './car/car-module';
import {CarModelServiceComponent} from './service/car-model-service.component';
import {DriverManagementService} from './service/driver-management-service';
import {TaxManagementService} from './service/tax-management-service';
import {LoginService} from './service/login-service';
import {ModalComponent} from './directive-control/directives';
import {ModalService} from './directive-control/services';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    PendingRegisterListComponent,
    DriverManagementComponent,
    DriverCancelRequestComponent,
    CommissionManagementComponent,
    CarTypeComponent,
    CarModelComponent,
    SubscriptionManagementComponent,
    DriverReportComponent,
    TaxManagementComponent,
    AdvertiseManagementComponent,
    CityManagementComponent,
    GeoFacingComponent,
    ApkManagementComponent,
    CmsListComponent,
    CmsRegisterComponent,
    RequestDriverViewComponent,
    DepositHistoryListComponent,
    DepositHistoryComponent,
    DriverReportViewComponent,
    EditDriverComponent,
    ProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    DataTableModule,
    ReactiveFormsModule,
    CarModule
  ],
  providers: [CarTypeServiceComponent, CarModelServiceComponent, DriverManagementService, TaxManagementService, LoginService , ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
