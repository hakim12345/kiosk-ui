import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {TaxManagementService} from '../service/tax-management-service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TaxManagement} from '../model/tax-management';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../directive-control/services';

@Component({
  selector: 'app-tax-management',
  templateUrl: './tax-management.component.html',
  styleUrls: ['./tax-management.component.css']
})
export class TaxManagementComponent implements OnInit {

  private taxManagements: TaxManagement[];
  public message: string;
  public messages: string;
  public myForm: FormGroup;


  constructor(private modalService: ModalService, private taxService: TaxManagementService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.messages = '';
    this.getAllTax();

    this.myForm = new FormGroup({
      'id' : new FormControl(null, Validators.required),
      'taxName' : new FormControl(null, Validators.required),
      'taxPercentage' : new FormControl(null, Validators.required)
    });
  }

  getAllTax() {
      this.taxService.getAll().subscribe(
        (response: Response) => {
          this.taxManagements = response.json();
          console.log(response.json());
        },
        (err) => {
          this.message = 'There is no list....';
        });
    }

  saveTax() {
    const formValue = this.myForm.value;
    this.taxService.save(formValue).subscribe(
      (res) => {
        this.getAllTax();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  getTaxById(id: number) {
    this.route.params.subscribe((param: Params) => {
      this.taxService.getById(id).subscribe(
        (response: Response) => {
          this.myForm.patchValue(response.json());
          console.log(response.json());
        },
        (err) => {

        }
      );
    });
  }

  editTax() {
    const formValue = this.myForm.value;
    this.taxService.update(formValue).subscribe(
      (res) => {
        this.getAllTax();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  deleteTax(id: number): void {
  this.taxService.delete(id)
.subscribe(
(resp) => {
  const data = resp.json();
  if (data != null) {
  this.message = data.message;
  console.log(this.message);
    this.getAllTax();
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
