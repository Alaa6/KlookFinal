import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { WifiService } from 'src/app/services/wifi.service';
import { Wifi } from 'src/app/viewModels/wifi';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  wifiDetail: any = {};
  WifiCards: any = [];
  Card: any = "";
  WifiID: string = "";
  //wifi: Observable<Wifi[]>;
  constructor(private activatedRoute: ActivatedRoute, private activityDetails: ActivityDetailsService, private wiService: WifiService) {

  }

  best: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  deal: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      let wifiDetail: string | null = params.get('id');
      this.WifiID = (wifiDetail) ? wifiDetail : "";
      this.getWifiById(this.WifiID, "Wifi_&_SimCards");
      this.getHotelById(this.WifiID, "Hotel-");
      this.getHomeById(this.WifiID, "ToursCollection");
      this.getHomeById(this.WifiID, "Cities");

      console.log("id " + this.WifiID);
    },

      (err) => { console.log(err) }
    );

  }

  private getHomeById(ID: string, collection: string) {
    this.activityDetails.getActivityDetails(ID, collection).then((res) => {
      this.Card = res;
    }).catch((err) => {
      console.log(err);
    });
  }

  private getWifiById(ID: string, collection: string) {
    this.activityDetails.getActivityDetails(ID, collection).then((res) => {
      this.Card = res;
    }).catch((err) => {
      console.log(err);
    });
  }
  private getHotelById(ID: string, collection: string) {
    this.activityDetails.getActivityDetails(ID, collection).then((res) => {
      this.Card = res;
    }).catch((err) => {
      console.log(err);
    });
  }


}











