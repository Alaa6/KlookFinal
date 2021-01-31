import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { AttractionsComponent } from '../attractions/attractions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RelaxComponent } from './relax/relax.component';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
  { path  : 'attractions' , component : AttractionsComponent},

  {path:'relax', component:RelaxComponent},
  
];

@NgModule({
  declarations: [
  TourComponent,
  RelaxComponent,
  AttractionsComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})
export class ExperiencesModule { }
