import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { AttractionsComponent } from '../attractions/attractions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
  { path  : 'attractions' , component : AttractionsComponent}

  
];

@NgModule({
  declarations: [
  TourComponent,
  AttractionsComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})
export class ExperiencesModule { }
