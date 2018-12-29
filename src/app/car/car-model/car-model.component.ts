import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {CarTypeServiceComponent} from '../../service/car-type-service.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CarModelServiceComponent} from '../../service/car-model-service.component';
import {CarModel} from '../../model/CarModel';
import {CarType} from '../../model/CarType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../directive-control/services';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css']
})
export class CarModelComponent implements OnInit {

  public message: string;
  public carModels: CarModel[];
  public carTypes: any;
  public messages: string;

  constructor(private modalService: ModalService , private carModelService: CarModelServiceComponent, private carTypeService: CarTypeServiceComponent, private router: Router, private route: ActivatedRoute) {
  }

  public myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      'id': new FormControl(null, null),
      'carName': new FormControl(null, Validators.required),
      'carType': new FormGroup({
        'id': new FormControl(null, Validators.required),
      })
    });

    this.message = '';
    this.messages = '';
    this.getAllCarModel();
  }

  getAllCarModel() {
    this.carModelService.getAll().subscribe(
      (response: Response) => {
        console.log(response.json());
        this.carModels = response.json();
      },
      (err) => {
        this.message = 'There is no list....';
      });
  }


  getCarTypes() {
    this.carTypeService.getAll().subscribe(
      (response: Response) => {
        console.log(response.json());
        this.carTypes = response.json();
      },
      (err) => {
        this.message = 'There is no list....';
      });
  }


  saveCarModel() {
    const formValue = this.myForm.value;
    this.carModelService.save(formValue).subscribe(
      (res) => {
        this.getAllCarModel();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );

  }

  editCarModel() {
    const formValue = this.myForm.value;
    this.carModelService.update(formValue).subscribe(
      (res) => {
        this.getAllCarModel();
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  deleteCarModel(id: number) {
    this.carModelService.deleteCarModel(id)
      .subscribe(
        (resp) => {
          const data = resp.json();
          if (data != null) {
            this.message = data.message;
            console.log(this.message);
            this.getAllCarModel();
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

 getCarModelById(id: number): void {
    this.route.params.subscribe((param: Params) => {
      this.carModelService.getById(id).subscribe(
        (response: Response) => {
          this.myForm.patchValue(response.json());
          console.log(response.json());
        },
        (err) => {

        }
      );
    });
  }

  onCloseConfirm(id: string) {
    this.modalService.close(id);
  }

  onOpenConfirm(id: string) {
    this.modalService.open(id);
  }
}
