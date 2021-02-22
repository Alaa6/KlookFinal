import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';





import { AttractionsHongKongComponent } from './Components/attractions-hong-kong/attractions-hong-kong.component';
import { LoginComponent } from './Components/login/login.component';
// import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { AdminComponent } from './Components/admin/admin.component';
import { SecondHeaderComponent } from './Components/second-header/second-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { from } from 'rxjs';

import { PopupComponent } from './Components/popup/popup.component';

// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatDialogModule} from '@angular/material/dialog';

import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { ModalComponent } from './Components/modal/modal.component';
import { HelpComponent } from './Components/help/help.component';
import { KlookCreditComponent } from './Components/klook-credit/klook-credit.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { DetailsComponent } from './Components/details/details.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BookTrainComponent } from './Components/book-train/book-train.component';
import { CardDirective } from './Directives/card.directive';
// import { SignComponent } from './Components/sign/sign.component';
// import { DashboardComponent } from './Components/dashboard/dashboard.component';
// import { DetailsDashboardComponent } from './Components/details-dashboard/details-dashboard.component';
// import { SignComponent } from './admin/sign/sign.component';
// import { DashboardComponent } from './Components/admins/dashboard/dashboard.component';
// import { DetailsDashboardComponent } from './Components/admins/details-dashboard/details-dashboard.component';
import {ExperiencesModule} from './Components/experiences/experiences.module'
var firebaseConfig = {
  apiKey: "AIzaSyANt9EaAeiNpKJTFH577SVmvPItb8OTAmk",
  authDomain: "friendlychat-e399d.firebaseapp.com",
  databaseURL: "https://friendlychat-e399d-default-rtdb.firebaseio.com",
  projectId: "friendlychat-e399d",
  storageBucket: "friendlychat-e399d.appspot.com",
  messagingSenderId: "402072663413",
  appId: "1:402072663413:web:b045d045b9b5af218f8f3c",
  measurementId: "G-SE1DJ8PYYC"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    AttractionsHongKongComponent,
    LoginComponent,
    // SignUpComponent,
    // AdminComponent,
    SecondHeaderComponent,
    // JwPaginationComponent
    PopupComponent,
    NotFoundComponent ,
    ModalComponent,
    HelpComponent,
    KlookCreditComponent,
    DetailsComponent,
    // SignComponent,
    // DashboardComponent,
    ActivityDetailsComponent,
    BookTrainComponent,
    CardDirective,
    // // SignComponent,
    // DashboardComponent,
    // DetailsDashboardComponent
     
  ],
  exports: [CardDirective]  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule ,// firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
    MatDialogModule ,
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
    RouterModule,
     BrowserAnimationsModule,
  
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,       
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ExperiencesModule
    
],

  // ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
