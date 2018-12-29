import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Headers, RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private loginService: LoginService , private router: Router) { }

  ngOnInit() {

    this.myForm = new FormGroup({
      'oldPassword' : new FormControl(null, Validators.required),
      'newPassword' : new FormControl(null, Validators.required),
      'conformPassword' : new FormControl(null, Validators.required)
    });
  }

  changePassword() {
    const formValue = this.myForm.value;
    const token = (localStorage.getItem('auth'));
    const headers = new Headers();
    headers.append('auth', token);
    const options = new RequestOptions({headers : headers});
    alert('reiqjsi8qjs');
    this.loginService.changePassword(formValue , options).subscribe(
      (response: Response) => {
        alert('Change Password....');
      },
    (err) => {
        alert('error');
    }
    );
  }
}
