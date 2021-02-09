import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';
import { HomeService } from 'src/app/services/home.service';
import { WifiService } from 'src/app/services/wifi.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Wifi } from 'src/app/viewModels/wifi';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {

  WifiCards:Wifi[]=[];
  Cities:ICity[]=[];
  //wifiDetail:Wifi[]=[];
  constructor(private router:Router,private wifiServ:WifiService , private city : HomeService) {
    this.wifiServ.getAllWifi().subscribe(data=>{
      this.WifiCards=data.map(element=>{
        //console.log(element.payload.doc.data());
        return{
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
   }

  ngOnInit(): void {

    this.wifiServ.getAllWifi().subscribe((wifi)=>{
      this.WifiCards=wifi.map(data=>{
        return{
          id:data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
    this.city.getAllCities().subscribe((city)=>{
      this.Cities=city;
    })
  }
  viewDetails(wID:string | undefined){
    this.router.navigate(['/activityDetails' , wID]);
    //this.router.navigate(['/activityDetails'])
  }
  
}
