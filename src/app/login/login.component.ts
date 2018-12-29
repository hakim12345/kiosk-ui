import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {LoginService} from '../service/login-service';
import {from} from 'rxjs';
import {Role} from '../model/role';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public messages: String;
  public message: String;
  public role: string;
  public myForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  public role2: any;
  private roles: any;

  constructor(private loginService: LoginService, private http: Http, private router: Router) {

  }

  ngOnInit() {

    this.messages = '';
    this.message = '';
    this.role = '';
    this.myForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'roles': new FormGroup({
        'roles': new FormControl(null, Validators.required),
      }),
    });
  }

  login(fm: NgForm) {
    const formValue = fm.value;
    this.loginService.login(formValue).subscribe(
      (response: Response) => {
        const data = response.json();
        if (data != null) {
          const token = data.token;
          console.log(data);
          localStorage.setItem('auth', token);
          console.log(localStorage.getItem('auth'));
          this.router.navigate(['/dashboard']);
        }
      },
      (err) => {
        console.log(err.status);
        if (err.status === 400) {
          this.message = 'Something went wrong';
        } else if (err.status === 422) {
          this.message = 'Invalid username/password supplied';
        } else {
          this.message = 'SomeThing wrong please contact to administrator.';
        }
      }
    );
  }

  onSave() {
    const formValue = this.myForm.value;
    this.loginService.signUpUser(formValue).subscribe(
      (response: Response) => {
        alert('save');
      },
      (err) => {
        alert('error');
      }
    );
  }
}
