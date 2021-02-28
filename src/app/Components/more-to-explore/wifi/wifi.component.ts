import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';
import { HomeService } from 'src/app/services/home.service';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { WifiService } from 'src/app/services/wifi.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Wifi } from 'src/app/viewModels/wifi';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {

  WifiCards: Wifi[] = [];
  Cities: ICity[] = [];
  //wifiDetail:Wifi[]=[];
  constructor(private router: Router, private languageService: LanguageServiceService, private translate: TranslateService, private wifiServ: WifiService, private activityDetails: ActivityDetailsService, private city: HomeService) {
    this.translate.use(languageService.getLanguage());
  }

  ngOnInit(): void {

    this.wifiServ.getAllWifi().subscribe((wifi) => {
      this.WifiCards = wifi.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })

    this.city.getAllCities().subscribe((city) => {
      this.Cities = city.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
  }
  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }

}
