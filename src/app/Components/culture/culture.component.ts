import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from 'src/app/viewModels/tours';


@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {


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
  awsomeDeals:Tours[]=[];
  datesIdea:Tours[]=[];
  forKids:Tours[]=[];

  ngOnInit(): void {

    this.itemService.getallatours('Categories','Section','Culture','BestSeller').subscribe( argg =>{ 
      this.BestSeller=argg
      // console.log(this.BestSeller)
    } 
    )
    this.itemService.getallatours('Categories','Section','Culture','AwsomeDeals').subscribe( arg =>{ 
      this.awsomeDeals=arg
      // console.log(this.awsomeDeals)
    }
    )

    this.itemService.getallatours('Categories','Section','Culture','Date Ideas').subscribe( arg =>{ 
      this.datesIdea=arg
      // console.log(this.awsomeDeals)
    }
    )

    this.itemService.getallatours('Categories','Section','Culture','ForKids').subscribe( arg =>{ 
      this.forKids=arg
      // console.log(this.awsomeDeals)
    }
    )
    
    
      // console.log(this.BestSeller)
  }
}

    


