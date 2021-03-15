import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EuropeTrainsComponent } from './europe-trains/europe-trains.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';

import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [
  { path: 'carRental', component: CarRentalsComponent },
  { path: 'europeTrains', component: EuropeTrainsComponent },
];

@NgModule({
  declarations: [CarRentalsComponent, EuropeTrainsComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule,
    MatIconModule ,
    RouterModule.forChild(routes),
  ],
})
export class TransportModule {}
