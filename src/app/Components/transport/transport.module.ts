import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [

  {path:'carRental' , component:CarRentalsComponent},
  
];

@NgModule({
  declarations: [CarRentalsComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportModule { }
