import { NgModule } from '@angular/core';
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
    RouterModule.forChild(routes)
  ]
})

export class AccommodationModule { }
