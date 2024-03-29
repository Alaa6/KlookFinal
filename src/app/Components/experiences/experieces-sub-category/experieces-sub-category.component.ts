import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/viewModels/icategory';
import { Observable, Subscription } from 'rxjs';
import { IActivity } from 'src/app/viewModels/iactivity';
import { PopupComponent } from '../../popup/popup.component';
import {ExperiencesService} from 'src/app/services/experiences.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { ITour } from 'src/app/viewModels/itour';
import { ICity } from 'src/app/viewModels/icity';
import { ISubCategory } from 'src/app/viewModels/isub-category';
import { filter } from 'rxjs/operators';
import { User } from './../../../viewModels/user';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-experieces-sub-category',
  templateUrl: './experieces-sub-category.component.html',
  styleUrls: ['./experieces-sub-category.component.scss']
})
export class ExperiecesSubCategoryComponent implements OnInit, OnChanges {

  @ViewChild(PopupComponent) popupComponent: any;
  // @Input() cityName : string = 'Cairo'
  // @ViewChild ('cityName') cityName : ElementRef  = new ElementRef('input')
  @Input() cityName: string;

  categoryList: ICategory[] = []
  category$: Observable<ICategory[]> | undefined
  city: string = 'Cairo'
  // @Input() city: string =''; 
  bestSellerList: ITour[] = [];
  subCatName: string = 'Experience';
  nearbyList: ITour[] = []
  testCity: string = 'Cairo'
  cityList: ICity[] = [];
  subCategory: ISubCategory[] = []
  allSubCategorey: ISubCategory[] = []
  awsomeDealsList: ITour[] = []
  forKidsList: ITour[] = []
  loading: boolean = true
  count: number = 5
  // section: string = "";
  // ID: string = "";
  // Card: any = "";
  subCat: string = ''
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  collectionListName: string[] = []
  collectionName : string = "ToursCollection"



  // ay 7aga bngrb 3shan a7na bwzna l code 3nd dena


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
        items: 5
      }


    },
    nav: true
  }

  constructor(private experienceService: ExperiencesService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageServiceService,
    private homeService: HomeService,
    ) {
    this.cityName = 'Cairo'
    this.translate.use(languageService.getLanguage());

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




  ngOnInit(): void {
    
    

    let test = localStorage.getItem('city')
    console.log(test, "onInit");
    this.experienceService.getAllCities().subscribe((wifi) => {
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



      if (this.subCatName == 'Experiences') {
        this.experienceService.getCategories(this.city).subscribe((res) => {
          this.categoryList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });
          this.loading = false
        }, (err) => console.log(err))

      } else {
        this.experienceService.getCategories(this.city, this.subCatName).subscribe((wifi) => {
          this.categoryList = wifi.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });
          this.loading = false

        })

      }


      if (this.subCatName == 'Experiences') {
        this.experienceService.getAllTours(this.city, "BestSeller").subscribe((res) => {

          this.bestSellerList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });

          this.bestSellerList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })


          this.loading = false

        }, (err) => console.log(err))


        this.experienceService.getAllTours(this.city, "Nearby").subscribe((res) => {

          this.nearbyList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });
          this.loading = false
        }, (err) => console.log(err))

        this.experienceService.getAllTours(this.city, "AwsomeDeals").subscribe((res) => {

          this.awsomeDealsList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });

          this.awsomeDealsList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })

          this.loading = false
        }, (err) => console.log(err))

        this.experienceService.getAllTours(this.city, "ForKids").subscribe((res) => {

          this.forKidsList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });

          this.forKidsList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })
          this.loading = false
        }, (err) => console.log(err))


      } else {
        this.experienceService.getAllTours(this.city, "BestSeller", this.subCatName).subscribe((res) => {

          this.bestSellerList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });
          this.bestSellerList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })

        }, (err) => console.log(err))


        this.experienceService.getAllTours(this.city, "Nearby", this.subCatName).subscribe((res) => {

          this.nearbyList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });

          this.loading = false
        }, (err) => console.log(err))

        this.experienceService.getAllTours(this.city, "AwsomeDeals", this.subCatName).subscribe((res) => {

          this.awsomeDealsList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }

          });
          this.awsomeDealsList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })

          this.loading = false
        }, (err) => console.log(err))

        this.experienceService.getAllTours(this.city, "ForKids", this.subCatName).subscribe((res) => {

          this.forKidsList = res.map(data => {
            return {
              id: data.payload.doc.id,
              ...data.payload.doc.data()
            }
          });
          this.forKidsList.map((tour) => {
            this.collectionListName.push(tour.Title)

          })


          this.loading = false
        }, (err) => console.log(err))


      }



      this.experienceService.getSubCategory(this.subCatName).subscribe((res) => {

        this.subCategory = res.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
        this.loading = false
      }, (err) => console.log(err))

      this.experienceService.getSubCategory().subscribe((res) => {

        this.allSubCategorey = res.map(data => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data()
          }
        });
        this.loading = false
      }, (err) => console.log(err))


    },
      (err) => console.log(err)

    )   // return 7aga mn no3 subscription

    // this.router.navigateByUrl(this.router.url.replace(this.city.split(" ").join("%20"), city));
    // this.city = city
    // this.router.navigateByUrl(this.router.url.replace(this.city , city));


    // });

  }

  openPopup() {

    const dialogRef = this.dialog.open(PopupComponent, { disableClose: true });

    console.log(this.city.split(" ").join("%20"), " on popup");
    dialogRef.afterClosed().subscribe(city => {
      this.router.navigateByUrl(this.router.url.replace(this.city.split(" ").join("%20"), city));
      this.city = city
      // this.router.navigateByUrl(this.router.url.replace(this.city , city));
    })
  }

  setsubCategoryName(subCatName: string) {
    this.router.navigate(['/experiences/cat/', this.city, subCatName])


  }
  setCityName(cityName: string) {
    this.router.navigate(['/experiences/cat/', cityName, this.subCatName])
  }

  toursSearch: ITour[] = []

  goToActivites(catEvent?: MouseEvent, activityCat?: ICategory , collectionName?: string) {

    console.log(activityCat, "activityCat goToActivites");

    if(activityCat && activityCat !== undefined)
    this.router.navigate(['/experiences/activities',{city : this.city , supCatName : this.subCatName ,activitesCategory: activityCat?.name }])
    }

  
  goToSubCategory(subCatName?: string) {
    console.log(subCatName);
    
    if (subCatName != undefined) {
      this.router.navigateByUrl(this.router.url.replace(this.subCatName.split(" ").join("%20"), subCatName));
    }
  }

  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }

  viewDestination(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/destination', collectionName, ID]);
  }

  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.collectionListName.filter(tourName => tourName.toLowerCase().indexOf(filterValue) === 0);
  }

}