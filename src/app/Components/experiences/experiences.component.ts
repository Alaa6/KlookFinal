import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ExperienceServiceService } from 'src/app/services/experience-service.service';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { IExperiencexs } from 'src/app/viewModels/iexperiencexs';
import { ITour } from 'src/app/viewModels/itour';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit,OnDestroy {

  smallCard:IExperiencexs[]=[];
  sub:Subscription|null=null;
bestsellerCard:ITour[]=[];
  constructor(private exService:ExperienceServiceService) { }

  ngOnInit(): void {
    this.sub=this.exService.getSmallCards("section","experience","city","cairo").subscribe(
      (res)=>{
        console.log("categories are displayed "+res)
        this.smallCard=res;
        console.log("nnn "+this.smallCard.length)
      },
      (err)=>{console.log("can't display categories from experience comp "+err)}
    )

    // ,"section","Bestsellers"
    this.sub=this.exService.getBestseller("Categories","Attractions","City","Cairo").subscribe(
      (res)=>{
        console.log("bestsellrs "+res);
        this.bestsellerCard=res;
        console.log("len "+this.bestsellerCard.length)
      },
      (err)=>{}
    )

  }

  


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
        items: 6
      }
    },
    nav: true
  }


  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
}
