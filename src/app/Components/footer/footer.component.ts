import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToFacebook():void{
    window.open("https://www.facebook.com/klookglobal", "_blank");
  }
  
  goToTwitter():void{
    window.open("https://twitter.com/klooktravel", "_blank")
  }

  goToInstagram():void{
    window.open("https://www.instagram.com/klooktravel", "_blank")
  }

}
