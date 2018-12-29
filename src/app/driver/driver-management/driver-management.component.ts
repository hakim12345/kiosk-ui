import {Component, Input, OnInit} from '@angular/core';
import {DriverManagementService} from '../../service/driver-management-service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Driver} from '../../model/driver';
import {Response} from '@angular/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../directive-control/services';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.css']
})
export class DriverManagementComponent implements OnInit {

  public drivers: Driver[];
  public message: string;
  public messages: string;
  public myForm: FormGroup;
  public firstName: String;
  public id: number;

  public driver: Driver;
  public driver1: Driver;

  constructor(private modalService: ModalService , private driverService: DriverManagementService , private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.messages = '';
    this.firstName = '';
    this.id = null;

    this.getAllDriverList();

    this.myForm = new FormGroup({
      'subscription': new FormControl(null, Validators.required),
      'subscriptionName': new FormControl(null, Validators.required),
      'subscriptionAmount': new FormControl(null, Validators.required),
      'totalAmount': new FormControl(null, Validators.required),
      'existingLeftAmount': new FormControl(null, Validators.required),
      'validity': new FormControl(null, Validators.required),
      'fromDate': new FormControl(null, Validators.required),
      'toDate': new FormControl(null, Validators.required),
    });

  }
  getAllDriverList() {
    {
      alert('xwydgyqsq');
      this.driverService.getAllDriverList().subscribe(
        (response: Response) => {
          console.log(response.json());
          this.drivers = response.json();
        },
        (err) => {
          this.message = 'There is no list....';
        });
    }
  }

  getDriverById(id: number) {
    this.driverService.getDriverById(id).subscribe(
      (response: Response) => {
        this.driver1 = response.json();
        this.firstName = this.driver1.firstName;
        this.id = this.driver1.id;
        console.log(response.json());
      },
      (err) => {

      }
    );
}

  getSubscription(subscription: string) {
    this.driverService.getSubscription(subscription).subscribe(
      (response: Response) => {
        this.myForm.patchValue(response.json());
      }
    );
  }

  onSave() {
    const formValue = this.myForm.value;
    this.driverService.save(formValue).subscribe(
      (res) => {
        this.router.navigate(['driverRegisterPendingList']);
      },
      (err) => {
      }
    );
  }

  deleteDriver(id: number) {
    this.driverService.deleteDriver(id)
      .subscribe(
        (resp) => {
          const data = resp.json();
          if (data != null) {
            this.message = data.message;
            console.log(this.message);
            this.getAllDriverList();
          }
        },
        (response1: Response ) => {
          const  data = response1.json();
          if (data != null) {
            this.messages = data.message;
            console.log(this.message);
          }
        }
      );
  }

  onOpenConfirm(id: string) {
    this.modalService.open(id);
  }

  onCloseConfirm(id: string) {
    this.modalService.close(id);
  }
}
