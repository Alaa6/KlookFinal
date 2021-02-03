import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { ExperiencesModule } from './Components/experiences/experiences.module';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';
// import { DashboardComponent } from './Components/admins/dashboard/dashboard.component';
import { HelpComponent } from './Components/help/help.component';
// import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { KlookCreditComponent } from './Components/klook-credit/klook-credit.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
// import { SignComponent } from './Components/admins/sign/sign.component';

const routes: Routes = [
  {path :'home' , component : HomeComponent} ,
 
  
  {path:'experiences',component:ExperiencesComponent},
  // { path  : 'sign/:subsign'  , component : SignComponent},
  // {path :'dash' , component : DashboardComponent} ,
  {path :'help' , component : HelpComponent} ,
  {path: 'credits', component: KlookCreditComponent},

  {path:'', redirectTo:'/home', pathMatch:'full'}, //Default Path
{path:'activityDetails/:id' ,component:ActivityDetailsComponent},
  {  path: 'experiences', 
    loadChildren: () => import('./Components/experiences/experiences.module').then(m => m.ExperiencesModule)
  },

  {path :"" , redirectTo :'home' , pathMatch : 'full'} , 
  // {path :"" , redirectTo :'home' , pathMatch : 'full'} , 

  {  path: 'experiences', 
    loadChildren: () => import('./Components/experiences/experiences.module').then(m => m.ExperiencesModule)
  },
  // { path  : 'sign/:subsign'  , component : SignComponent},
  // {path :'dash' , component : DashboardComponent} ,


  {path:'', redirectTo:'/home', pathMatch:'full'}, //Default Path


  // {path :"" , redirectTo :'home' , pathMatch : 'full'} , 
  {  path: 'experiences', 
    loadChildren: () => import('./Components/experiences/experiences.module').then(m => m.ExperiencesModule)
  },
 
  {  path: 'sign', 
  loadChildren: () => import('./Components/admins/admins.module').then(m => m.AdminsModule)
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
  {path :'**' , component : NotFoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
