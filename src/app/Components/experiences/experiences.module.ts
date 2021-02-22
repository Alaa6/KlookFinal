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
import {MatSliderModule} from '@angular/material/slider';
// import { CardDirective } from '../../Directives/card.directive';

import { SearchExperienceComponent } from './search-experience/search-experience.component';


const routes: Routes = [

  { path  : 'cat/:city/:supCatName'  , component : ExperiecesSubCategoryComponent},
  { path  : 'search/:city/:supCatName/:searchKey'  , component : SearchExperienceComponent},

  
  // { path  : 'attractions' , component : AttractionsComponent},

  
]


@NgModule({
  declarations: [
  AttractionsComponent,
  ExperiecesSubCategoryComponent ,
  // CardDirective,
  SearchExperienceComponent ,

  
],
  imports: [
    CommonModule  ,
    RouterModule.forChild(routes) ,
    MatDialogModule ,
    FormsModule ,
    MatCardModule  ,
    CarouselModule ,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule ,
    MatSliderModule
    
  ] ,
})
export class ExperiencesModule { }
