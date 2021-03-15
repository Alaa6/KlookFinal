import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatIconModule} from '@angular/material/icon';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
const routes: Routes = [

  { path: 'hotels&more', component: HotelsComponent },

];

@NgModule({
  declarations: [HotelsComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    CarouselModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) ,
    MatIconModule
  ]
})

export class AccommodationModule { }
