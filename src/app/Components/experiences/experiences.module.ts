import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ExperiecesSubCategoryComponent } from './experieces-sub-category/experieces-sub-category.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AttractionsComponent } from '../attractions/attractions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSliderModule } from '@angular/material/slider';
// import { CardDirective } from '../../Directives/card.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { SearchExperienceComponent } from './search-experience/search-experience.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
// import { NotFoundComponent } from '../../app.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [

  { path  : 'cat/:city/:supCatName'  , component : ExperiecesSubCategoryComponent},
  { path  : 'activities/:city/:supCatName'  , component : SearchExperienceComponent},

  // { path: 'search/:city/:supCatName/:searchKey', component: SearchExperienceComponent },


  // { path  : 'attractions' , component : AttractionsComponent},


]


@NgModule({
  declarations: [
    AttractionsComponent,
    ExperiecesSubCategoryComponent,
    // CardDirective,
    SearchExperienceComponent,


  
],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    MatCardModule,
    CarouselModule,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule ,
    MatSliderModule ,
    MatCheckboxModule ,
    MatAutocompleteModule ,
    MatFormFieldModule ,
    MatTreeModule ,
    MatIconModule ,
    MatRadioModule ,
    // NotFoundComponent
  
    
  ] ,
})
export class ExperiencesModule { }