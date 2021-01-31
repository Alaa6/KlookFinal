import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EuropeTrainsComponent } from './europe-trains/europe-trains.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';




const routes: Routes = [

  {path:'carRental' , component:CarRentalsComponent},
  {path:'europeTrains',component:EuropeTrainsComponent}
  
];

@NgModule({
  declarations: [CarRentalsComponent, EuropeTrainsComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule ,
    CarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportModule { }
