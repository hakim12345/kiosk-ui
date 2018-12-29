import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CarTypeServiceComponent} from '../../service/car-type-service.component';
import {CarType} from '../../model/CarType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {error} from 'util';
import {ModalService} from '../../directive-control/services';

@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.css']
})
export class CarTypeComponent implements OnInit {

  public message: string;
  public carTypes: CarType[];
  public myForm: FormGroup;
  public messages: string;
  constructor(private modalService: ModalService, private carTypeService: CarTypeServiceComponent, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'id': new FormControl(null, null),
      'carType': new FormControl(null, Validators.required),
    });

    this.getAllCarType();

    this.message = '';
    this.messages = '';
  }

  getAllCarType() {
    this.carTypeService.getAll().subscribe(
      (response: Response) => {
        console.log(response.json());
        this.carTypes = response.json();
      },
      (err) => {
        this.message = 'There is no list....';
      });
  }

  saveCarType() {

    const formValue = this.myForm.value;
    this.carTypeService.save(formValue).subscribe(
      (res) => {
        this.getAllCarType();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  deleteCarType(id: number): void {
    this.carTypeService.deleteCarType(id)
      .subscribe(
        (resp) => {
          const data = resp.json();
          if (data != null) {
            this.message = data.message;
            console.log(this.message);
            this.getAllCarType();
          }
        },
        (response1: Response) => {
          const data = response1.json();
          if (data != null) {
            this.messages = data.message;
            console.log(this.message);
          }
        }
      );
  }

  getCarTypeById(id: number): void {
    this.route.params.subscribe((param: Params) => {
      this.carTypeService.getById(id).subscribe(
        (response: Response) => {
          this.myForm.patchValue(response.json());
          console.log(response.json());
        },
        (err) => {

        }
      );
    });
  }

  editCarType() {
    const formValue = this.myForm.value;
    this.carTypeService.update(formValue).subscribe(
      (res) => {
        this.getAllCarType();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  onCloseConfirm(id: string) {
    this.modalService.close(id);
  }

  onOpenConfirm(id: string) {
    this.modalService.open(id);
  }
}

