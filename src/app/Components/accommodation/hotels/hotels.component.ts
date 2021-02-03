import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotels } from 'src/app/viewModels/hotels';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { FormBuilder, Validators } from '@angular/forms';
import { IHotelBooking } from 'src/app/viewModels/ihotel-booking';
import { HomeService } from 'src/app/services/home.service';
import { ICity } from 'src/app/viewModels/i-city';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit ,AfterViewInit ,OnChanges {

  //Data
  popular:Hotels[]=[];
  staycation:Hotels[]=[];
  vouchers:Hotels[]=[];
  Cities:ICity[]=[];

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


  constructor( private hotelServ:HotelService ,private city : HomeService,private fb: FormBuilder , private cdRef:ChangeDetectorRef) { }
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

    this.hotelServ.getAllPopularHotels().subscribe((pop)=>{
      this.popular=pop;
    })
    this.hotelServ.getAllSatycationHotels().subscribe((stay)=>{
      this.staycation=stay;
    })
    this.hotelServ.getAllVouchersHotels().subscribe((voucher)=>{
      this.vouchers=voucher;
    })
   this.city.getAllCities().subscribe((city)=>{
    this.Cities=city;
   })

  }

  hotelBooking(){
    console.log("city : "+this.HotelForm.controls['City'].value);
    console.log("NumOfRooms : "+this.HotelForm.controls['NumOfRooms'].value);

    let hotel:IHotelBooking={
     City:this.HotelForm.controls['City'].value,
      NumOfRooms:this.HotelForm.controls['NumOfRooms'].value,
   
    }
    this.hotelServ.hotelBooking(hotel).then(
     (res)=>{    console.log("Done")
    },
     (err)=>{console.log("error : "+err)} 
    )

  }
}