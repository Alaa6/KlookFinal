import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { CarRentalsComponent } from './Components/car-rentals/car-rentals.component';
import { EuropeTrainsComponent } from './Components/europe-trains/europe-trains.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { FoodComponent } from './Components/food/food.component';
import { WiFiComponent } from './Components/wi-fi/wi-fi.component';
import { WalkingComponent } from './Components/walking/walking.component';
import { BestSellerCairoComponent } from './Components/best-seller-cairo/best-seller-cairo.component';
import { AttractionsHongKongMacauComponent } from './Components/attractions-hong-kong-macau/attractions-hong-kong-macau.component';
import { AttractionsHongKongComponent } from './Components/attractions-hong-kong/attractions-hong-kong.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SecondHeaderComponent } from './Components/second-header/second-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

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
    CarRentalsComponent,
    EuropeTrainsComponent,
    HotelsComponent,
    FoodComponent,
    WiFiComponent,
    WalkingComponent,
    BestSellerCairoComponent,
    AttractionsHongKongMacauComponent,
    AttractionsHongKongComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    SecondHeaderComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
