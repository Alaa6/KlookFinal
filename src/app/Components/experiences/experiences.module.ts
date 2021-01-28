import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { RelaxComponent } from './relax/relax.component';
import { AttractionsComponent } from './attractions/attractions.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ExperiecesSubCategoryComponent } from './experieces-sub-category/experieces-sub-category.component';


const routes: Routes = [

  { path  : 'sub-cat/:supCatName'  , component : ExperiecesSubCategoryComponent},
  {path:'relax', component:RelaxComponent},
  
];

@NgModule({
  declarations: [
  TourComponent,
  AttractionsComponent,
  ExperiecesSubCategoryComponent ,
  RelaxComponent,
  AttractionsComponent
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes) ,
    MatDialogModule ,
    FormsModule ,
    MatCardModule 

  
  ]
})
export class ExperiencesModule { }
