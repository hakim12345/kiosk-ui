import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CarType} from '../model/CarType';
import {HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarTypeServiceComponent {

  private modals: any[] = [];

  baseUrl = 'http://localhost:9093/';

  constructor(private http: Http) { }

  getAll() {
    return this.http.get(this.baseUrl + 'cartype-list');
  }

  save(carType: CarType) {
    return this.http.post(this.baseUrl + 'save-cartype', carType);
  }

  update(carType: CarType) {
    return this.http.put(this.baseUrl + 'update-cartype', carType);
  }

  deleteCarType(id: number) {
    return this.http.delete(this.baseUrl +  'delete-cartype' + '?id=' + id);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl +  'get-cartype' + '?id=' + id);
  }

  close(id: string) {
    alert('this is close...1');
    // close modal specified by id
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
