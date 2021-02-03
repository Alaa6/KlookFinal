import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ExperiecesSubCategoryComponent } from './experieces-sub-category/experieces-sub-category.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AttractionsComponent } from '../attractions/attractions.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


const routes: Routes = [

  { path  : 'cat/:city/:supCatName'  , component : ExperiecesSubCategoryComponent},
  
  
  // { path  : 'attractions' , component : AttractionsComponent},

  
  

]

@NgModule({
  declarations: [
  AttractionsComponent,
  ExperiecesSubCategoryComponent ,

  
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes) ,
    MatDialogModule ,
    FormsModule ,
    MatCardModule  ,
    CarouselModule ,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule
  ]
})
export class ExperiencesModule { }
