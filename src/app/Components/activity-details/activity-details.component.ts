import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WifiService } from 'src/app/services/wifi.service';
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
  section: string = "";
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
      let sectioName: string | null = params.get('collectionName');
      this.section = (sectioName) ? sectioName : "";
      this.WifiID = (wifiDetail) ? wifiDetail : "";

      this.getHotelById(this.WifiID, this.section);

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











