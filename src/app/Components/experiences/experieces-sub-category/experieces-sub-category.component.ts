import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/viewModels/icategory';
import { Observable, Subscription } from 'rxjs';
import { IActivity } from 'src/app/viewModels/iactivity';
import { PopupComponent } from '../../popup/popup.component';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { ITour } from 'src/app/viewModels/itour';
import { ICity } from 'src/app/viewModels/icity';
import { ISubCategory } from 'src/app/viewModels/isub-category';

@Component({
  selector: 'app-experieces-sub-category',
  templateUrl: './experieces-sub-category.component.html',
  styleUrls: ['./experieces-sub-category.component.scss']
})
export class ExperiecesSubCategoryComponent implements OnInit  , OnChanges{


  // @ViewChild('testCity') testCity: ElementRef = new ElementRef('input')
  @ViewChild(PopupComponent) popupComponent: any;
  // @Input() cityName : string = 'Cairo'
  // @ViewChild ('cityName') cityName : ElementRef  = new ElementRef('input')
  @Input() cityName: string ;

  categoryList: ICategory[] = []
  category$: Observable<ICategory[]> | undefined
  city: string = 'Cairo'
 

  // @Input() city: string =''; 
   bestSellerList: ITour[] = [] ;
  subCatName: string = 'Experience';
  nearbyList : ITour [] = [] 
  testCity: string = 'Cairo'
  cityList: ICity[] = [];
  subCategory : ISubCategory [] =[]





  customOptions: OwlOptions = {
    loop: false,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
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

  constructor(private relaxService: RelaxServiceService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute ,
    private router : Router) {
      this.cityName = 'Cairo'

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change' ,changes);
    
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
       console.log(cur , prev , 'on change');
       
    }
    console.log(this.city , 'city in on change');

  }

 

  ngAfterViewInit(): void {

    // console.log(this.cityName, ' after view ');

    // console.log(  this.cityName.nativeElement.value ,'after viewgggggg ');
    // console.log(  this.subCatName,' sub after view ');

  


    // this.testCity  = this.cityName.nativeElement.value 


    // let routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

    //   this.subCatName = String(params.get('supCatName'))
    //   this.category$ = this.relaxService.getCategoriesByCityAndSecion(this.cityName.nativeElement.value , this.subCatName);

      
    //   this.category$.subscribe((res) => {
    //     this.categoryList = res
    //     console.log(res , " catt after view");
        
    //   }, (err) => console.log(err))


    //   this.relaxService.getAllActivities(this.cityName.nativeElement.value , this.subCatName, "BestSeller").subscribe((res) => {
    //     this.bestSellerList = res
    //   }, (err) => console.log(err))


    //   this.relaxService.getAllActivities(this.cityName.nativeElement.value , this.subCatName, "Nearby").subscribe((res) => {
    //     this.Nearby = res
    //   }, (err) => console.log(err))

    // },
    //   (err) => console.log(err)

    // )   // return 7aga mn no3 subscription

    




  }

  ngOnInit(): void {



    let test = localStorage.getItem('city')

    console.log(test, "onInit");

    this.relaxService.getAllCities().subscribe((cities) => {
      this.cityList = cities

    }, (err) => console.log(err))
  

    // getParam

    let routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

      this.subCatName = String(params.get('supCatName'))
      this.city = String(params.get('city')).split('%20').join(" ")

      console.log(this.subCatName , this.city  , "data");
      

      this.category$ = this.relaxService.getCategoriesByCityAndSecion(this.city, this.subCatName);

      this.category$.subscribe((res) => {
        this.categoryList = res
        console.log(res ,"cat" );
        
      }, (err) => console.log(err))


      this.relaxService.getAllTours(this.city, this.subCatName, "BestSeller").subscribe((res) => {
        this.bestSellerList = res
      }, (err) => console.log(err))


      this.relaxService.getAllTours(this.city, this.subCatName, "Nearby").subscribe((res) => {
        this.nearbyList = res
      }, (err) => console.log(err))

      this.relaxService.getSubCategory(this.subCatName).subscribe((res) => {
        this.subCategory = res
        console.log(res);
       
        
        
      }, (err) => console.log(err))


    },
      (err) => console.log(err)

    )   // return 7aga mn no3 subscription



  }

  openPopup( ) {
   

    const dialogRef = this.dialog.open(PopupComponent , { disableClose: true } );

  console.log(this.city.split(" ").join("%20") ," on popup");
  
    dialogRef.afterClosed().subscribe(city => {
      
      this.router.navigateByUrl(this.router.url.replace(this.city.split(" ").join("%20") , city));
      this.city = city
      // this.router.navigateByUrl(this.router.url.replace(this.city , city));
     

    });

  }



}
