import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AttractionsService } from 'src/app/services/attractions.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Tours } from 'src/app/viewModels/tours';

@Component({
  selector: 'app-attractions-hong-kong',
  templateUrl: './attractions-hong-kong.component.html',
  styleUrls: ['./attractions-hong-kong.component.scss']
})
export class AttractionsHongKongComponent implements OnInit {

  BestSellerHK: Tours[]=[]
  AwesomeDealsHK: Tours[]=[]
  NearByHK: ICity[]=[]

  constructor(private attractionSer: AttractionsService) { }

  ngOnInit(): void {
    this.attractionSer.getBestSellerHK().
    subscribe(bestSel=>this.BestSellerHK = bestSel)

    this.attractionSer.getAwesomeDealsHK().
    subscribe(AwsDeals=>this.AwesomeDealsHK = AwsDeals)

    this.attractionSer.getNearByHK().
    subscribe(NearBy=> this.NearByHK = NearBy)
  }

  bestSeller: OwlOptions = {
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

  AwesomDeals: OwlOptions = {
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


}
