import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ITour } from 'src/app/viewModels/itour';
import { Tours } from './../../../viewModels/tours';
import { ICategory } from './../../../viewModels/icategory';

@Component({
  selector: 'app-search-experience',
  templateUrl: './search-experience.component.html',
  styleUrls: ['./search-experience.component.scss']
})
export class SearchExperienceComponent implements OnInit {

  searchkey: string = '';
  subCatName: string = '';
  city: string = '';
  toursSearch:ITour[]=[]
  jsoon:ICategory[]=[]
  searchTerm:string=''
  toursSearchdisplay:ITour[]=[]

  constructor(private activatedRoute: ActivatedRoute,private relaxService:RelaxServiceService) {
    this.relaxService.getall().subscribe(res=>{

      // this.jsoon=res
      console.log(this.jsoon)

    
    })
   
   }
   routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

    this.subCatName = String(params.get('supCatName'))
      this.city = String(params.get('city')).split('%20').join(" ")
    this.searchkey = String(params.get('searchKey'))
    // console.log(this.searchkey,this.city,this.subCatName)

    this.relaxService.searchForTours(this.city,this.subCatName).subscribe(res=>{

      this.toursSearch=res
      this.toursSearchdisplay=this.toursSearch.filter(res=>{
        return res.Title.toLocaleLowerCase().match(this.searchkey.toLocaleLowerCase());
      })
      // console.log(this.toursSearch)
  
  
    })
  

  })

  ngOnInit(): void {
  }

  search(){

    // console.log(this.searchTerm)
    this.relaxService.searchForTours(this.city,this.subCatName).subscribe(res=>{
      this.toursSearch=res
      this.toursSearchdisplay=this.toursSearch.filter(res=>{
        return res.Title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
      })

      // console.log(this.toursSearch)
    })
   
  

}

}
