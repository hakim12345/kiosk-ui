import {Route, RouterModule} from '@angular/router';
import {CarTypeComponent} from './car-type/car-type.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarModelComponent} from './car-model/car-model.component';


export const routers: Route[] =
  [
    {path : 'carType' , component : CarTypeComponent},
    {path: 'deleteCarModel/:id', component : CarModelComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class CarRouterModule {
}
