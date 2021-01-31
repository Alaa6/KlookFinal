import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ExperiecesSubCategoryComponent } from './experieces-sub-category/experieces-sub-category.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { AttractionsComponent } from '../attractions/attractions.component';
import { RelaxComponent } from './relax/relax.component';


const routes: Routes = [

  { path  : 'cat/:city/:supCatName'  , component : ExperiecesSubCategoryComponent},
  
  { path  : 'sub-cat/:supCatName/activity/:activityCatName'  , component : ActivitiesComponent},
  { path  : 'sub-cat/:supCatName/activity/:activityCatName/activityDetails/:id'  , component : ActivitiesComponent},
  { path  : 'attractions' , component : AttractionsComponent},

  {path:'relax', component:RelaxComponent},
  

]

@NgModule({
  declarations: [
  AttractionsComponent,
  ExperiecesSubCategoryComponent ,
  RelaxComponent,
  AttractionsComponent,
  ActivitiesComponent,
  ActivityDetailsComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes) ,
    MatDialogModule ,
    FormsModule ,
    MatCardModule  ,
    CarouselModule 
  ]
})
export class ExperiencesModule { }
