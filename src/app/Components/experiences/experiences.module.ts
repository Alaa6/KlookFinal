import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { RelaxComponent } from './relax/relax.component';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
  {path:'relax', component:RelaxComponent},
  
];

@NgModule({
  declarations: [
  TourComponent,
  RelaxComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes)
  ]
})
export class ExperiencesModule { }
