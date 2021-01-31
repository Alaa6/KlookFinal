import { Component, OnInit } from '@angular/core';
import { AttractionsService } from 'src/app/services/attractions.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Tours } from 'src/app/viewModels/tours';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {

  MustVisitHKM: ICity[]=[]
  BestSellerHKM: Tours[]=[]
  AwesomeDealsHKM: Tours[]=[]
  // div1: boolean = false;
  
  constructor(private attractionSer: AttractionsService) { }

  ngOnInit(): void {
    this.attractionSer.getMustVisitHKM().
    subscribe(mustVisit=>this.MustVisitHKM = mustVisit)

    this.attractionSer.getBestSeller().
    subscribe(bestSeller=>this.BestSellerHKM = bestSeller)

    this.attractionSer.getAwesomeDeals().
    subscribe(deals=>this.AwesomeDealsHKM = deals)
  }

  best: OwlOptions = {
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

  deal: OwlOptions = {
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
