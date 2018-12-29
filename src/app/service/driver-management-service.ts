import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CarType} from '../model/CarType';
import {Subscription} from '../model/subscription';
import {Driver} from '../model/driver';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DriverManagementService {

  baseUrl = 'http://localhost:8090/';

  baseUrl1 = 'http://localhost:8084/driverMgmt/';

  constructor(private http: Http) {
  }

  // sagar

  getAll() {
    return this.http.get(this.baseUrl + 'getDriverRegistrationDetailsList');
  }

  save(subscription: Subscription) {
    return this.http.post(this.baseUrl + 'addSubscription', subscription);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + 'getDriverRequestRegistered' + '?id=' + id);
  }

  getSubscription(subscription: string) {
    return this.http.get(this.baseUrl + 'getSubscriptionByName' + '?name=' + subscription);
  }

  reject(id: number) {
    return this.http.delete(this.baseUrl +  'addDriverRegistrationDetails_reject' + '?id=' + id);
  }

  assignLater(id: number) {
    return this.http.get(this.baseUrl + 'assignSubscriptionLater' + '?id=' + id);
  }

  // prashant

  getAllDriverList() {
    return this.http.get(this.baseUrl1 + 'list');
  }

  getDriverById(id: number) {
    return this.http.get(this.baseUrl1 + 'edit' + '?driverId=' + id);
  }

  editDriver(driver: Driver)  {
    return this.http.put(this.baseUrl1 + 'edit', driver);
  }

  getCityByStateId(stateId: number) {
    return this.http.get(this.baseUrl1 + 'getCityByStateId' + '?stateId=' + stateId);
  }

  getAllStates() {
    return this.http.get(this.baseUrl1 + 'getStateList');
  }

  deleteDriver(id: number) {
    return this.http.delete(this.baseUrl1 +  'delete' + '?driverId=' + id);
  }
}
