import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiComponent } from './wifi/wifi.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'wifi&simcards' , component:WifiComponent},
  
];

@NgModule({
  declarations: [WifiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoreToExploreModule { }
