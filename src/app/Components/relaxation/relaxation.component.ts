import { Component, OnInit} from '@angular/core';
// import {CarouselModule} from 'primeng/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from './../../viewModels/tours';



@Component({
  selector: 'app-relaxation',
  templateUrl: './relaxation.component.html',
  styleUrls: ['./relaxation.component.scss']
})
export class RelaxationComponent implements OnInit {


  constructor(private itemService:RelaxServiceService) { }
  BestSeller:Tours[]=[];
  awsomeDeals:Tours[]=[];

  ngOnInit(): void {

    this.itemService.getallatours('Categories','Section','Relax','BestSeller').subscribe( argg =>{ 
      this.BestSeller=argg
      // console.log(this.BestSeller)
    }
    )

    this.itemService.getallatours('Categories','Section','Relax','AwsomeDeals').subscribe( arg =>{ 
      this.awsomeDeals=arg
      // console.log(this.awsomeDeals)
    }
    )
    
    
      // console.log(this.BestSeller)
  }
    }
