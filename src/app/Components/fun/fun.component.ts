import { Component, OnInit } from '@angular/core';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from 'src/app/viewModels/tours';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';


@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {

  customOptions: OwlOptions= {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private itemService:RelaxServiceService) { }
  BestSeller:Tours[]=[];

  ngOnInit(): void {

    this.itemService.getallatours('Categories','Section','FunNight','BestSeller').subscribe( argg =>{ 
      this.BestSeller=argg
      // console.log(this.BestSeller)
    }
    )
  }

}
