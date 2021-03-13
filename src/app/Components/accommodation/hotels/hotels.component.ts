import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotels } from 'src/app/viewModels/hotels';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { FormBuilder, Validators } from '@angular/forms';
import { IHotelBooking } from 'src/app/viewModels/ihotel-booking';
import { HomeService } from 'src/app/services/home.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Router } from '@angular/router';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit, AfterViewInit, OnChanges {

  //Data
  popular: Hotels[] = [];
  staycation: Hotels[] = [];
  vouchers: Hotels[] = [];
  Cities: ICity[] = [];

  //collapse
  show = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;

  //Form
  HotelForm = this.fb.group({
    City: ['', Validators.required],
    Date: ['', Validators.required],
    NumOfRooms: ['', Validators.required]
  });


  constructor(private activityDetails: ActivityDetailsService, private languageService: LanguageServiceService, private translate: TranslateService, private hotelService: HotelService, private router: Router, private city: HomeService, private fb: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.translate.use(languageService.getLanguage());
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngAfterViewInit(): void {
  }

  //For carosel
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
        items: 4
      }
    },
    nav: true
  }


  ngOnInit(): void {

    this.hotelService.getAllPopularHotels().subscribe((pop) => {
      this.popular = pop.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
    this.hotelService.getAllSatycationHotels().subscribe((stay) => {
      this.staycation = stay.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
    this.hotelService.getAllVouchersHotels().subscribe((voucher) => {
      this.vouchers = voucher.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
    this.city.getAllCities().subscribe((city) => {
      this.Cities = city.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
  }

  hotelBooking() {
    console.log("city : " + this.HotelForm.controls['City'].value);
    console.log("NumOfRooms : " + this.HotelForm.controls['NumOfRooms'].value);

    let hotel: IHotelBooking = {
      City: this.HotelForm.controls['City'].value,
      NumOfRooms: this.HotelForm.controls['NumOfRooms'].value,

    }
    this.hotelService.hotelBooking(hotel).then(
      (res) => {
        console.log("Done")
      },
      (err) => { console.log("error : " + err) }
    )

  }
  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }

  helpNav(){
    this.router.navigate(['/help']);

  }
}