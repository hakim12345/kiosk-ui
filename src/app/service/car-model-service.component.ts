import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Http} from '@angular/http';
import {CarModel} from '../model/CarModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarModelServiceComponent {

  baseUrl = 'http://localhost:9093/';

  constructor(private http: Http) { }

  getAll() {
    return this.http.get(this.baseUrl + 'carmodel-list');
  }

  save(carModel: CarModel) {
    return this.http.post(this.baseUrl + 'save-carmodel', carModel);
  }

  update(carModel: CarModel) {
    return this.http.put(this.baseUrl + 'update-carmodel', carModel);
  }

  deleteCarModel(id: number) {
    return this.http.delete(this.baseUrl +  'delete-carmodel' + '?id=' + id);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl +  'get-carmodel' + '?id=' + id);
  }

  getcarModelByCarTypeId(carTypeId: number) {
    return this.http.get(this.baseUrl +  'get-carmodel-by-cartype-id' + '?carTypeId=' + carTypeId);
  }
}
