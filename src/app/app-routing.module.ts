import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path :'home' , component : HomeComponent} ,
  {path :"" , redirectTo :'home' , pathMatch : 'full'} , 
  {  path: 'experiences', 
    loadChildren: () => import('./Components/experiences/experiences.module').then(m => m.ExperiencesModule)
  },
  {  path: 'accommodation', 
    loadChildren: () => import('./Components/accommodation/accommodation.module').then(m => m.AccommodationModule)
  },
  {  path: 'moreToExplore', 
    loadChildren: () => import('./Components/more-to-explore/more-to-explore.module').then(m => m.MoreToExploreModule)
  },
  {  path: 'transport', 
    loadChildren: () => import('./Components/transport/transport.module').then(m => m.TransportModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
