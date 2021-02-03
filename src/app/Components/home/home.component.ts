import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Tours } from 'src/app/viewModels/tours';
// import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

 

export class HomeComponent implements OnInit, AfterViewInit {

  NearYou: Tours[]=[]
  IncredibleDestinations: ICity[]=[]
  TopThings: Tours[]=[]
  Recommended: Tours[]=[]
 
  @ViewChild('hid') hid: any;
  @ViewChild('hid2') hid2: any;

  constructor(private homeService: HomeService) { }


  ngAfterViewInit(): void {
    // let view = this.hid.nativeElement;
    // view.src = URL.createObjectURL(yourBlob);
  }
  ngOnInit(): void {

    this.homeService.getNearYou().subscribe(data=>this.NearYou=data)

    this.homeService.getIncredibleDestinations().subscribe(res=>this.IncredibleDestinations=res)

    this.homeService.getTopThings()
    .subscribe(topThings=>this.TopThings=topThings)

    this.homeService.getKlookRecommended()
    .subscribe(recommended=>this.Recommended= recommended)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  TopThingsIn: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      479:{
        items:1
      },
      740: {
        items: 3
      },
      768:{
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  hide() {
    let view = this.hid.nativeElement;
    view.style.display ='none'
  }

  hide2() {
    let view = this.hid2.nativeElement;
    view.style.display ='none'
  }
  

}
