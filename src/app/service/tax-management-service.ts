import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CarType} from '../model/CarType';
import {TaxManagement} from '../model/tax-management';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaxManagementService {

baseUrl = 'http://localhost:8000/taxMgmt/';

constructor(private http: Http) { }

getAll() {
  return this.http.get(this.baseUrl + 'getAllActiveTaxDetail');
}

save(taxManagement: TaxManagement) {
  return this.http.post(this.baseUrl + 'saveTax', taxManagement);
}

update(taxManagement: TaxManagement) {
  return this.http.put(this.baseUrl + 'updateTax', taxManagement);
}

delete(id: number) {
  return this.http.delete(this.baseUrl +  'deleteTax' + '/' + id);
}

getById(id: number) {
  return this.http.get(this.baseUrl +  'getTaxDetailByTaxId' + '/' + id);
}
}

