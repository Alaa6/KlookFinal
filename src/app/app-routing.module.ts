import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path :'home' , component : HomeComponent} ,
  {path :"" , redirectTo :'home' , pathMatch : 'full'} , 
  {  path: 'experiences', 
    loadChildren: () => import('./Components/experiences/experiences.module').then(m => m.ExperiencesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
