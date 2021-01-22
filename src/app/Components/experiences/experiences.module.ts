import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { RelaxComponent } from './relax/relax.component';
import { AttractionsComponent } from './attractions/attractions.component';


const routes: Routes = [

  { path  : 'tour' , component : TourComponent},
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
    RouterModule.forChild(routes)
  ]
})
export class ExperiencesModule { }
