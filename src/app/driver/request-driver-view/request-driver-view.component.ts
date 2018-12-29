import { Component, OnInit } from '@angular/core';
import {DriverManagementService} from '../../service/driver-management-service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Response} from '@angular/http';
import {DriverRegisrationModel} from '../../model/DriverRegisrationModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from '../../model/subscription';
import {ModalService} from '../../directive-control/services';

@Component({
  selector: 'app-request-driver-view',
  templateUrl: './request-driver-view.component.html',
  styleUrls: ['./request-driver-view.component.css']
})
export class RequestDriverViewComponent implements OnInit {

  public driverRegisrationModel: DriverRegisrationModel;
  public subscriptions: Subscription;

  public myForm: FormGroup;
  public silver: string;
  public gold: string;
  public other: string;

  constructor(private modalService: ModalService , private driverService: DriverManagementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.silver = 'silver';
    this.gold = 'gold';
    this.other = 'other';

    this.getById();


    /*this.myForm1 = new FormGroup({
      'id': new FormControl({value: null, disabled: true}, Validators.required),
      'driverFullName': new FormControl({value: null, disabled: true}, Validators.required),
      'contactNo': new FormControl({value: null, disabled: true}, Validators.required),
      'imeino': new FormControl({value: null, disabled: true}, Validators.required),
      'emailId': new FormControl({value: null, disabled: true}, Validators.required),
      'carNo': new FormControl({value: null, disabled: true}, Validators.required),
      'seatingCapacity': new FormControl({value: null, disabled: true}, Validators.required),
      'carPurchaseYear': new FormControl({value: null, disabled: true}, Validators.required),
      'licenseNo': new FormControl({value: null, disabled: true}, Validators.required),
      'adhaarNo': new FormControl({value: null, disabled: true}, Validators.required),
      'driverAddress': new FormControl({value: null, disabled: true}, Validators.required),
    });*/

    this.myForm = new FormGroup({
      'subscriptionName': new FormControl(null, Validators.required),
      'subscriptionAmount': new FormControl(null, Validators.required),
      'totalAmount': new FormControl(null, Validators.required),
      'existingLeftAmount': new FormControl(null, Validators.required),
      'validity': new FormControl(null, Validators.required),
      'fromDate': new FormControl(null, Validators.required),
      'toDate': new FormControl(null, Validators.required),
    });

  }

  getById() {
    this.route.params.subscribe((param: Params) => {
      const id = param ['id'];
      this.driverService.getById(id).subscribe(
        (response: Response) => {
          this.driverRegisrationModel = response.json();
          console.log(response.json());
        },
        (err) => {

        }
      );
    });
  }

  reject(id: number) {
    this.driverService.reject(id)
      .subscribe(
        (resp) => {
          const data = resp.json();
          if (data != null) {
            this.router.navigate(['driverRegisterPendingList']);
          }
        },
        (response1: Response ) => {
          const  data = response1.json();
          if (data != null) {
          }
        }
      );
  }

  onSave() {
    const formValue = this.myForm.value;
    this.driverService.save(formValue).subscribe(
      (res) => {
        this.router.navigate(['driverManagement']);
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

  assignLater(id: number) {
    this.driverService.assignLater(id).subscribe(
      (res) => {
        this.router.navigate(['driverManagement']);
      },
      (err) => {
        alert('This is Error');
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
