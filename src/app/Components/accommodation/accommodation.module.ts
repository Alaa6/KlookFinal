import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [

  {path:'hotels&more' , component:HotelsComponent},
  
];

@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    NgbModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ]
})

export class AccommodationModule { }
