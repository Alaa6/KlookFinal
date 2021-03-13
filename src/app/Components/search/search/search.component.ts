import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ICategory } from 'src/app/viewModels/icategory';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() city: string; 
  @Input() subCatName: string;
  @Input() collectionListName: string[] = []; 
  @Input() collectionName : string 

 

  

  searchTerm: string = '';
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  TourListName: string[] = []


  constructor(
    private relaxService: RelaxServiceService  ,
    private router: Router,
  ) { 
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value) )
    );
  }

  ngOnInit(): void {

    // this.relaxService.getAllTours(this.city, "BestSeller").subscribe((res) => {

    //   this.bestSellerList = res.map(data => {
    //     return {
    //       id: data.payload.doc.id,
    //       ...data.payload.doc.data()
    //     }
    //   });

    //   this.bestSellerList.map((tour) => {
    //     this.TourListName.push(tour.Title)

    //   })


    //   this.loading = false

    // }, (err) => console.log(err))
console.log(this.city , 'search');
console.log(this.subCatName , 'search');



  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.searchTerm =filterValue ;
        return this.collectionListName.filter(tourName => tourName.toLowerCase().indexOf(filterValue) === 0);
  }

  search(city?:string , supCatName?:string, searchTerm?:string) {
  
  
    if(this.city !=undefined && this.subCatName != undefined)
    this.router.navigate(['/experiences/activities',{city : city , supCatName : supCatName ,searchKey : searchTerm ,collectionName :this.collectionName}])
    else 
    this.router.navigate(['/experiences/activities', {searchKey : searchTerm ,collectionName :this.collectionName}])
    

  }


}
