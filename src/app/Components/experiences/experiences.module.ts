import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
  
];

@NgModule({
  declarations: [
  TourComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes)
  ]
})
export class ExperiencesModule { }
