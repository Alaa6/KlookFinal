import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [ SearchComponent],
  exports: [
    SearchComponent,
  ],
  imports: [
    CommonModule ,
    MatAutocompleteModule ,
    FormsModule,
    ReactiveFormsModule
    
  ]
  
})
export class SearchModule { }
