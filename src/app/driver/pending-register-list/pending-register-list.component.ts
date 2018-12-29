import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '@angular/http';
import {DriverManagementService} from '../../service/driver-management-service';
import {DriverRegisrationModel} from '../../model/DriverRegisrationModel';

@Component({
  selector: 'app-pending-register-list',
  templateUrl: './pending-register-list.component.html',
  styleUrls: ['./pending-register-list.component.css']
})
export class PendingRegisterListComponent implements OnInit {

  public driverRegisrationModels: DriverRegisrationModel[];
  public message: string;

  constructor(private driverService: DriverManagementService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {

    this.message = '';

    this.getAllCarType();
  }

  getAllCarType() {
    this.driverService.getAll().subscribe(
      (response: Response) => {
        this.driverRegisrationModels = response.json();
      },
      (err) => {
        this.message = 'There is no list....';
      });
  }
}
