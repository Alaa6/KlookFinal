import { Component, OnInit } from '@angular/core';
import { WifiService } from 'src/app/services/wifi.service';
import { Wifi } from 'src/app/viewModels/wifi';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {

  WifiCards:Wifi[]=[];
 
  constructor(private wifiServ:WifiService) { }

  ngOnInit(): void {

    this.wifiServ.getAllWifi().subscribe((wifi)=>{
      this.WifiCards=wifi;
    })
  }

}
