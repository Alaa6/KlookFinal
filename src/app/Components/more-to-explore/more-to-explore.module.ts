import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiComponent } from './wifi/wifi.component';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [

  {path:'wifi&simcards' , component:WifiComponent},
  {path:'food&dining' ,component:FoodComponent}
  
];
 
@NgModule({
  declarations: [WifiComponent, FoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class MoreToExploreModule { }
