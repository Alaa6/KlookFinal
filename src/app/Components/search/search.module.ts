import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
///// angular material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatRadioModule} from '@angular/material/radio';

////////



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
    ReactiveFormsModule ,
    MatIconModule ,
    MatTreeModule ,
    MatDialogModule ,
    MatCardModule ,
    MatFormFieldModule ,
    MatRadioModule ,
    MatCheckboxModule ,
    MatSliderModule ,
    MatProgressSpinnerModule
    
  ]
  
})
export class SearchModule { }
