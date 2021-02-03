import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { AttractionsCairoComponent } from './Components/attractions-cairo/attractions-cairo.component';
import { ToursCairoComponent } from './Components/tours-cairo/tours-cairo.component';
import { RelaxationComponent } from './Components/relaxation/relaxation.component';
import { CultureComponent } from './Components/culture/culture.component';
import { FunComponent } from './Components/fun/fun.component';

import { HotelsComponent } from './Components/hotels/hotels.component';

import { WiFiComponent } from './Components/wi-fi/wi-fi.component';
import { WalkingComponent } from './Components/walking/walking.component';
import { BestSellerCairoComponent } from './Components/best-seller-cairo/best-seller-cairo.component';
import { AttractionsHongKongMacauComponent } from './Components/attractions-hong-kong-macau/attractions-hong-kong-macau.component';
import { AttractionsHongKongComponent } from './Components/attractions-hong-kong/attractions-hong-kong.component';
import { LoginComponent } from './Components/login/login.component';
// import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AdminComponent } from './Components/admin/admin.component';
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
import { CardComponent } from './Components/card/card.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { ModalComponent } from './Components/modal/modal.component';
import { HelpComponent } from './Components/help/help.component';
import { KlookCreditComponent } from './Components/klook-credit/klook-credit.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SignComponent } from './Components/sign/sign.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DetailsDashboardComponent } from './Components/details-dashboard/details-dashboard.component';

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
    ExperiencesComponent,
    AttractionsCairoComponent,
    ToursCairoComponent,
    RelaxationComponent,
    CultureComponent,
    FunComponent,
   
    HotelsComponent,
   
    WiFiComponent,
    WalkingComponent,
    BestSellerCairoComponent,
    AttractionsHongKongMacauComponent,
    AttractionsHongKongComponent,
    LoginComponent,
    // SignUpComponent,
    AdminComponent,
    SecondHeaderComponent,
    // JwPaginationComponent
    PopupComponent,
    CardComponent,
    NotFoundComponent ,
    ModalComponent,
    HelpComponent,
    KlookCreditComponent,
    SignComponent,
    DashboardComponent,
    DetailsDashboardComponent
     
  ],
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
    MatSelectModule
],

  // ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
