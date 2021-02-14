import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { WifiService } from 'src/app/services/wifi.service';
import { Wifi } from 'src/app/viewModels/wifi';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  wifiDetail: Wifi = {};
  WifiCards: Wifi[] = [];
  Card: any;
  WifiID: string = "";
  //wifi: Observable<Wifi[]>;
  constructor(private activatedRoute: ActivatedRoute, private wiService: WifiService) {
    // this.wifiServ.getAllWifi().subscribe(data=>{
    //   this.wifiDetail=data.map(element=>{
    //     return{
    //       id:element.payload.doc.id,
    //       ...element.payload.doc.data()
    //     }
    //   })
    // })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let wifiDetail: string | null = params.get('wID');
      this.WifiID = (wifiDetail) ? wifiDetail : "";
      this.getWifiById(this.WifiID);
      console.log("id " + this.WifiID);
      console.log("onngonint")
    },

      (err) => { console.log(err) }
    );

  }

  private getWifiById(wID: string) {
    this.wiService.getWifiById(wID).then()
    .catch(ree=>{
      console.log("err")
    })
    //.subscribe(data=>{
    //   this.wifiDetail=data.map(element=>{
    //     return{
    //       id:element.payload.doc.id,
    //       ...element.payload.doc.data()
    //     }
    //   })
    // })
    //console.log()
  }

}
