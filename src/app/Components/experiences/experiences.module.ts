import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { AttractionsComponent } from './attractions/attractions.component';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
  
];

@NgModule({
  declarations: [
  TourComponent,
  AttractionsComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes)
  ]
})
export class ExperiencesModule { }
