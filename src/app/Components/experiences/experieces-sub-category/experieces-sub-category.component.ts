import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/viewModels/icategory';
import { Observable, Subscription } from 'rxjs';
import { IActivity } from 'src/app/viewModels/iactivity';
import { PopupComponent } from '../../popup/popup.component';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { ITour } from 'src/app/viewModels/itour';
import { ICity } from 'src/app/viewModels/icity';
import { ISubCategory } from 'src/app/viewModels/isub-category';
import { filter } from 'rxjs/operators';
import { User } from './../../../viewModels/user';

@Component({
  selector: 'app-experieces-sub-category',
  templateUrl: './experieces-sub-category.component.html',
  styleUrls: ['./experieces-sub-category.component.scss']
})
export class ExperiecesSubCategoryComponent implements OnInit, OnChanges {


  // @ViewChild('testCity') testCity: ElementRef = new ElementRef('input')
  @ViewChild(PopupComponent) popupComponent: any;
  // @Input() cityName : string = 'Cairo'
  // @ViewChild ('cityName') cityName : ElementRef  = new ElementRef('input')
  @Input() cityName: string;

  categoryList: ICategory[] = []
  category$: Observable<ICategory[]> | undefined
  city: string = 'Cairo'
  searchTerm: string = ''

  // @Input() city: string =''; 
  bestSellerList: ITour[] = [];
  subCatName: string = 'Experience';
  nearbyList: ITour[] = []
  testCity: string = 'Cairo'
  cityList: ICity[] = [];
  subCategory: ISubCategory[] = []
  awsomeDealsList: ITour[] = []
  forKidsList: ITour[] = []
  loading: boolean = true
  count: number = 5





  customOptions: OwlOptions = {
    loop: true,
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
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.cityName = 'Cairo'

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change', changes);

    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(cur, prev, 'on change');

    }
    console.log(this.city, 'city in on change');

  }



  ngAfterViewInit(): void {

  }

  ngOnInit(): void {



    let test = localStorage.getItem('city')

    console.log(test, "onInit");

    this.relaxService.getAllCities().subscribe((wifi) => {
      this.cityList = wifi.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })


    // getParam

    let routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

      this.subCatName = String(params.get('supCatName'))
      this.city = String(params.get('city')).split('%20').join(" ")

      console.log(this.subCatName, this.city, "data");


      // this.category$ = this.relaxService.getCategoriesByCityAndSecion(this.city, this.subCatName);

      this.relaxService.getCategoriesByCityAndSecion(this.city, this.subCatName).subscribe((wifi) => {
        this.categoryList = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })


      this.relaxService.getAllTours(this.city, this.subCatName, "BestSeller").subscribe((wifi) => {
        this.bestSellerList = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })


      this.relaxService.getAllTours(this.city, this.subCatName, "Nearby").subscribe((wifi) => {
        this.nearbyList = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })

      this.relaxService.getAllTours(this.city, this.subCatName, "AwsomeDeals").subscribe((wifi) => {
        this.awsomeDealsList = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })

      this.relaxService.getAllTours(this.city, this.subCatName, "ForKids").subscribe((wifi) => {
        this.forKidsList = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })



      this.relaxService.getSubCategory(this.subCatName).subscribe((wifi) => {
        this.subCategory = wifi.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
      })

    },
      (err) => console.log(err)

    )   // return 7aga mn no3 subscription





  }

  openPopup() {

    const dialogRef = this.dialog.open(PopupComponent, { disableClose: true });

    console.log(this.city.split(" ").join("%20"), " on popup");

    dialogRef.afterClosed().subscribe(city => {

      this.router.navigateByUrl(this.router.url.replace(this.city.split(" ").join("%20"), city));
      this.city = city
      // this.router.navigateByUrl(this.router.url.replace(this.city , city));


    });

  }

  setsubCategoryName(subCatName: string) {
    this.router.navigate(['/experiences/cat/', this.city, subCatName])


  }
  setCityName(cityName: string) {
    this.router.navigate(['/experiences/cat/', cityName, this.subCatName])
  }

  toursSearch: ITour[] = []
  search() {

    this.router.navigate(['/experiences/search/', this.city, this.subCatName, this.searchTerm])

  }




  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }

}