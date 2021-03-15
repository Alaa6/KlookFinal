import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiComponent } from './wifi/wifi.component';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';
//import { MatTreeModule } from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [
  { path: 'wifi&simcards', component: WifiComponent },
  { path: 'food&dining', component: FoodComponent },
];

@NgModule({
  declarations: [WifiComponent, FoodComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ],
})
export class MoreToExploreModule {}
