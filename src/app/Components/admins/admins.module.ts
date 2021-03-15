import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';

// import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { from } from 'rxjs';

import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DetailsDashboardComponent } from './details-dashboard/details-dashboard.component'
// import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { DialogAdminComponent } from './dialog-admin/dialog-admin.component';
import { AdminSignComponent } from './admin-sign/admin-sign.component';
import { DashboardControlCardsComponent } from './dashboard-control-cards/dashboard-control-cards.component';
// import { DashboardParentComponent } from './dashboardPages/';
import {MatIconModule} from '@angular/material/icon';



const routes: Routes = [

  { path: ':subsign', component: SignComponent },
  { path: 'admin/dash', component: DashboardComponent, canActivate: [AuthGuardGuard] },
  { path: 'admin/adminlogin', component: AdminSignComponent },
  { path: 'admin/dash2', component: DashboardComponent },
  
  // { path  : 'admin'  , component : DashboardComponent},



]

@NgModule({
  declarations: [
    SignComponent,
    DashboardComponent,
    DetailsDashboardComponent,
    DialogAdminComponent,
    AdminSignComponent,
    DashboardControlCardsComponent,
    // DashboardParentComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatDialogModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // BrowserModule,
    NgbModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule ,
  ]
})
export class AdminsModule { }
