import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { DetailsComponent } from './Components/details/details.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
///////
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';

import { AttractionsHongKongComponent } from './Components/attractions-hong-kong/attractions-hong-kong.component';
import { LoginComponent } from './Components/login/login.component';

import { SecondHeaderComponent } from './Components/second-header/second-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { PopupComponent } from './Components/popup/popup.component';

import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

import { ModalComponent } from './Components/modal/modal.component';
import { HelpComponent } from './Components/help/help.component';
import { KlookCreditComponent } from './Components/klook-credit/klook-credit.component';
import { ActivityDetailsComponent } from './Components/activity-details/activity-details.component';

import { BookTrainComponent } from './Components/book-train/book-train.component';

import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

import { ExperiencesModule } from './Components/experiences/experiences.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConditionsComponent } from './Components/conditions/conditions.component';
import { BlogComponent } from './Components/blog/blog.component';
import { InviteFriendsComponent } from './Components/invite-friends/invite-friends.component';

import { KlookCreditsComponent } from './Components/klook-credits/klook-credits.component';
import { FindBookedComponent } from './Components/find-booked/find-booked.component';
import { CancelComponentComponent } from './Components/cancel-component/cancel-component.component';
import { ParticipantsComponent } from './Components/participants/participants.component';
import { AmendComponent } from './Components/amend/amend.component';
import { VoucherComponent } from './Components/voucher/voucher.component';
import { OpenTicketComponent } from './Components/open-ticket/open-ticket.component';
import { BookBehalfComponent } from './Components/book-behalf/book-behalf.component';
import { AboutComponent } from './Components/about/about.component';
import { DestinationComponent } from './Components/destination/destination.component';
import { MatTreeModule } from '@angular/material/tree';
//import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { BookingDialogComponent } from './Components/booking-dialog/booking-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchModule } from './Components/search/search.module';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

var firebaseConfig = {
  apiKey: 'AIzaSyANt9EaAeiNpKJTFH577SVmvPItb8OTAmk',
  authDomain: 'friendlychat-e399d.firebaseapp.com',
  databaseURL: 'https://friendlychat-e399d-default-rtdb.firebaseio.com',
  projectId: 'friendlychat-e399d',
  storageBucket: 'friendlychat-e399d.appspot.com',
  messagingSenderId: '402072663413',
  appId: '1:402072663413:web:b045d045b9b5af218f8f3c',
  measurementId: 'G-SE1DJ8PYYC',
};

// var firebaseConfig = {
//   apiKey: "AIzaSyAzBJKDiRHQ0pgh52rSMCh_jvV5CBRwdCI",
//   authDomain: "klooktest-520cb.firebaseapp.com",
//   projectId: "klooktest-520cb",
//   storageBucket: "klooktest-520cb.appspot.com",
//   messagingSenderId: "486005586729",
//   appId: "1:486005586729:web:7ced86ac11b96f1c9ad538"
// };

// =======
// var firebaseConfig2 = {
//   apiKey: 'AIzaSyAAHACN73dKmMMXqdzg77rlPXs94ZKaPBk',
//   authDomain: 'klookarabic.firebaseapp.com',
//   projectId: 'klookarabic',
//   storageBucket: 'klookarabic.appspot.com',
//   messagingSenderId: '120468945976',
//   appId: '1:120468945976:web:f6673203cef2fd1c483acd',
//   measurementId: 'G-BX0JG4BMH5',
// };
// >>>>>>> cfd75ed1b9f3a7229a227a5c1dd969ad65b63b27

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AttractionsHongKongComponent,
    LoginComponent,
    SecondHeaderComponent,
    BookingDialogComponent,
    PopupComponent,
    NotFoundComponent,
    ModalComponent,
    HelpComponent,
    KlookCreditComponent,
    DetailsComponent,

    ActivityDetailsComponent,
    BookTrainComponent,
    // ScrollSpyDirective,

    BookingDialogComponent,

    ConditionsComponent,

    BlogComponent,

    InviteFriendsComponent,

    KlookCreditsComponent,

    FindBookedComponent,

    CancelComponentComponent,

    ParticipantsComponent,

    AmendComponent,

    VoucherComponent,

    OpenTicketComponent,

    BookBehalfComponent,

    AboutComponent,

    DestinationComponent,

    WishlistComponent,
  ],
  entryComponents: [BookingDialogComponent, PopupComponent],
  exports: [NotFoundComponent, BookingDialogComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatTreeModule,
    //MatIconModule,
    MatRadioModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),

    AngularFirestoreModule, // firestore

    MatDialogModule,

    RouterModule,
    TranslateModule,

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
    ExperiencesModule,
    MatAutocompleteModule,
    SearchModule,
    MatIconModule,
  ], // ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
