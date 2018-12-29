import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PendingRegisterListComponent} from './driver/pending-register-list/pending-register-list.component';
import {DriverManagementComponent} from './driver/driver-management/driver-management.component';
import {DriverCancelRequestComponent} from './driver/driver-cancel-request/driver-cancel-request.component';
import {CommissionManagementComponent} from './commission-management/commission-management.component';
import {CarTypeComponent} from './car/car-type/car-type.component';
import {CarModelComponent} from './car/car-model/car-model.component';
import {SubscriptionManagementComponent} from './subscription-management/subscription-management.component';
import {DriverReportComponent} from './driver/driver-report/driver-report.component';
import {TaxManagementComponent} from './tax-management/tax-management.component';
import {AdvertiseManagementComponent} from './advertise-management/advertise-management.component';
import {CityManagementComponent} from './city-management/city-management.component';
import {GeoFacingComponent} from './geo-facing/geo-facing.component';
import {ApkManagementComponent} from './apk-management/apk-management.component';
import {CmsRegisterComponent} from './cms-management/cms-register/cms-register.component';
import {CmsListComponent} from './cms-management/cms-list/cms-list.component';
import {RequestDriverViewComponent} from './driver/request-driver-view/request-driver-view.component';
import {DepositHistoryComponent} from './deposit-hostory/deposit-history/deposit-history.component';
import {DepositHistoryListComponent} from './deposit-hostory/deposit-history-list/deposit-history-list.component';
import {DriverReportViewComponent} from './driver/driver-report/driver-report-view/driver-report-view.component';
import {EditDriverComponent} from './driver/edit-driver/edit-driver.component';
import {ProfileComponent} from './profile/profile/profile.component';
import {ChangePasswordComponent} from './profile/change-password/change-password.component';

export const routes: Route[] = [
  {path : '' , component : LoginComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'driverRegisterPendingList' , component : PendingRegisterListComponent},
  {path : 'driverManagement' , component : DriverManagementComponent},
  {path : 'driverCancelRequest' , component : DriverCancelRequestComponent},
  {path : 'commissionManagement' , component : CommissionManagementComponent},
  {path : 'carModel' , component : CarModelComponent},
  {path : 'depositHistory' , component : DepositHistoryComponent},
  {path : 'subscriptionManagement', component : SubscriptionManagementComponent},
  {path : 'driverReport', component : DriverReportComponent},
  {path : 'taxManagement' , component : TaxManagementComponent},
  {path : 'advertiseManagement', component : AdvertiseManagementComponent},
  {path : 'cMSManagement' , component : CmsListComponent},
  {path : 'cityManagement' , component : CityManagementComponent},
  {path : 'geoFacing' , component : GeoFacingComponent},
  {path : 'aPKManagement' , component : ApkManagementComponent},
  {path : 'cmsManagementRegister' , component: CmsRegisterComponent},
  {path:  'viewDriver/:id' , component : RequestDriverViewComponent},
  {path : 'depositHistoryList' , component : DepositHistoryListComponent},
  {path : 'driverReportView' , component : DriverReportViewComponent},
  {path : 'editDriver/:id' , component : EditDriverComponent},
  {path : 'profile',  component : ProfileComponent},
  {path: 'changePassword' , component : ChangePasswordComponent},
  {path : 'logout' , component : LoginComponent},
  {path : 'editCarType/:id' , component : CarTypeComponent},
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
