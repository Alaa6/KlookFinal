import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';
import { WifiService } from 'src/app/services/wifi.service';
import { Wifi } from 'src/app/viewModels/wifi';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  wifiDetail:Wifi[]=[];
  WifiCards:Wifi[]=[];
  Card :any ;
  WifiID:string="";
  //wifi: Observable<Wifi[]>;
  constructor( private activatedRoute : ActivatedRoute ,private wifiServ:ActivityDetailsService,private wiService:WifiService,private fs: AngularFirestore) { 
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

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   let wifiDetail: string | null = params.get('wID');
    //   this.WifiID = (wifiDetail) ? wifiDetail : "";
    //   this.getWifiById(this.WifiID);
    //   console.log(this.WifiID);
    // },
    //   (err) => { console.log(err) }
    // );
    
  }

//   private getWifiById(wID: string) {
    
//     this.wiService.getWifiById(wID).subscribe(
//       (res) => {
//         this.Card = res;
//       console.log("ID "+wID);

//       }
//       , (err) => { console.log(err) });
// }

}
