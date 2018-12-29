import {Component, Input, OnInit} from '@angular/core';
import {DriverManagementService} from '../../service/driver-management-service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Response} from '@angular/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarTypeServiceComponent} from '../../service/car-type-service.component';
import {CarType} from '../../model/CarType';
import {CarModelServiceComponent} from '../../service/car-model-service.component';
import {CarModel} from '../../model/CarModel';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  public myForm: FormGroup;
  public cities: any;
  public states: any;
  @Input() stateId: number;
  @Input() carTypeId: number;
  public carTypes: CarType[];
  public carModels: CarModel[];

  constructor(private driverService: DriverManagementService, private carModelService: CarModelServiceComponent , private carTypeService: CarTypeServiceComponent, private router: Router, private route: ActivatedRoute) { }
  public message: String;
  ngOnInit() {

    this.message = '';

    this.getDriverById();
    this.myForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'mobileNo': new FormControl(null, Validators.required),
      'imei': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'licenseNumber': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'carTypeId': new FormControl(null, Validators.required),
      'carModelId': new FormControl(null, Validators.required),
      'state': new FormGroup({
        'id': new FormControl(null, Validators.required),
      }),
      'city': new FormGroup({
        'id': new FormControl(null, Validators.required),
      })
    });

    this.getAllStates();
    this.getAllCarType();

  }

  getDriverById() {
    this.route.params.subscribe((param: Params) => {
      const id = param ['id'];
      this.driverService.getDriverById(id).subscribe(
        (response: Response) => {
          this.myForm.patchValue(response.json());
          console.log(response.json());
        },
        (err) => {

        }
      );
    });
  }

  getCarModel(carTypeId: number) {
    alert(carTypeId);
  this.carModelService.getcarModelByCarTypeId(carTypeId).subscribe(
    (response: Response) => {
      console.log(response.json());
      this.carModels = response.json();
    },
    (err) => {
    }
  );
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

  editSave() {
    const formValue = this.myForm.value;
    this.driverService.editDriver(formValue).subscribe(
      (res) => {
      this.router.navigate(['driverManagement']);
      },
      (err) => {
        this.message = 'unable to save the values';
      }
    );
  }

  getAllStates() {
    this.message = '';
    this.driverService.getAllStates().subscribe(
      (response: Response) => {
        this.states = response.json();
      },
      (err) => {
        this.message = 'No states are available.';
      }
    );
  }

  getCities(stateId: number) {
    this.driverService.getCityByStateId(stateId).subscribe(
      (response: Response) => {
        this.cities = response.json();
      },
      (err) => {
      }
    );
  }


}
