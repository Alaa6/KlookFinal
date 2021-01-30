import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotels } from 'src/app/viewModels/hotels';
import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { SpinnerActionService } from 'src/app/services/spinner-action.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})


export class HotelsComponent implements OnInit ,AfterViewInit ,OnChanges {

  popular:Hotels[]=[];
  staycation:Hotels[]=[];
  vouchers:Hotels[]=[];
  show = false;
  constructor( private hotelServ:HotelService ,private spinnerService:SpinnerActionService , private cdRef:ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  ngAfterViewInit(): void {
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
   
  }

}
