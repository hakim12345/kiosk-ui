import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Login} from '../model/login';
import {User} from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginService {

  baseUrl = 'http://localhost:8080/users/';

  constructor(private http: Http) { }

  login(formValue) {
    return this.http.post(this.baseUrl + 'signin', formValue );
  }

  signUpUser(formValue: User) {
    return this.http.post(this.baseUrl + 'signup', formValue );
  }

  changePassword(formValue: any , options) {
    alert('token is: ' + options);
    return this.http.post(this.baseUrl + 'changePassword', formValue , options);
  }
}
