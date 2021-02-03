import { Component, OnInit } from '@angular/core';
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
  constructor(private wifiServ:WifiService , private city : HomeService) { }

  ngOnInit(): void {

    this.wifiServ.getAllWifi().subscribe((wifi)=>{
      this.WifiCards=wifi;
    })
    this.city.getAllCities().subscribe((city)=>{
      this.Cities=city;
    })
  }

}
