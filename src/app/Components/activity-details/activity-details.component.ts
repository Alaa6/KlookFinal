import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { WifiService } from 'src/app/services/wifi.service'
import { OwlOptions } from 'ngx-owl-carousel-o'
import { ActivityDetailsService } from 'src/app/services/activity-details.service'
import { FormBuilder, Validators } from '@angular/forms'
import { IBooking } from 'src/app/viewModels/ibooking'
import { MatDialog } from '@angular/material/dialog'
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component'
import { AuthService } from 'src/app/services/auth.service'
// import { CardDirective } from 'src/app/Directives/card.directive';
import { IWish } from './../../viewModels/iwish';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss'],
})
export class ActivityDetailsComponent implements OnInit {
  Card: any = ''
  ID: string = ''
  section: string = ''
  // Name: string = "Dina";
  Adults: number = 0
  Children: number = 0
  Olders: number = 0
  SIM: number = 0
  totalPrice: number = 0
  sectionName: string | null
  noPerson: number = 0
  Rooms: number = 0
  Date: any
  hotelDate: any = ''
  x: string = '32.2'
  y: number = +this.x
  constructor(
    private router: Router,
    private authSer: AuthService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private activityDetails: ActivityDetailsService,
  ) {
    console.log(this.y)
    console.log(typeof this.x)
    console.log(typeof this.y)
  }

  best: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  }

  deal: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        let Details: string | null = params.get('id')
        this.sectionName = params.get('collectionName')
        this.section = this.sectionName ? this.sectionName : ''
        this.ID = Details ? Details : ''

        this.getActivityById(this.ID, this.section)

        console.log('id ' + this.ID)
      },

      (err) => {
        console.log(err)
      },
    )
    // this.totalPrice = (this.Adults * 3) + (this.Children * 2) + (this.Olders * 1) * this.Card.Price;
  }

  private getActivityById(ID: string, collection: string) {
    this.activityDetails
      .getActivityDetails(ID, collection)
      .then((res) => {
        this.Card = res
      })
      .catch((err) => {
        console.log(err)
      })
  }

  add() {
    this.Adults++
  }
  add1() {
    this.Children++
  }
  add2() {
    this.Olders++
  }
  add4() {
    this.SIM++
  }
  add5() {
    this.Rooms++
  }
  sub() {
    if (this.Adults > 0) {
      this.Adults--
    }
  }
  sub1() {
    if (this.Children > 0) {
      this.Children--
    }
  }
  sub2() {
    if (this.Olders > 0) {
      this.Olders--
    }
  }
  sub4() {
    if (this.SIM > 0) {
      this.SIM--
    }
  }
  sub5() {
    if (this.Rooms > 0) {
      this.Rooms--
    }
  }
  priceNumber: number
  UserNAme: string = ''
  Booking() {
    this.UserNAme = localStorage.getItem('currentUserEmail')
    let activity: IBooking = {
      Adults: this.Adults,
      Children: this.Children,
      Olders: this.Olders,
      SIM: this.SIM,
      Price: this.totalPrice.toString(),
      Title: this.Card.Title,
      Email: this.UserNAme,
      Date: this.Date.toString(),
      checkOutDate: this.hotelDate.toString(),
      Image: this.Card.Image,
      sectionName: this.sectionName,
      noPerson: this.noPerson.toString(),
      Rooms: this.Rooms,
    }

    if (this.Card.Price.includes(',')) {
      this.Card.Price = this.Card.Price.replace(',', '')
    }
    console.log('before this.Card.Price', this.Card.Price)

    this.priceNumber = +this.Card.Price
    console.log('after this.Card.Price', this.Card.Price)

    console.log('this.numberPrice', this.priceNumber)
    console.log('this.numberPrice', typeof this.priceNumber)
    console.log('before this.total', this.totalPrice)
    console.log(' this.Adults', this.Adults)
    console.log(' this.Adults', typeof this.Adults)
    console.log(' this.Adults', this.Adults * 50)

    if (this.sectionName == 'ToursCollection') {
      this.totalPrice =
        (this.Adults * 3 + this.Children * 2 + this.Olders * 1) *
        this.priceNumber
    } else if (this.sectionName == 'train-sights') {
      this.totalPrice =
        (this.Adults * 3 + this.Children * 2 + this.Olders * 1) *
        this.priceNumber
    } else if (this.sectionName == 'Wifi_&_SimCards') {
      this.totalPrice = this.SIM * this.priceNumber
    } else if (this.sectionName == 'Hotel-') {
      this.totalPrice = this.Rooms * 1 * this.priceNumber
    }

    console.log('after this.total', this.totalPrice)
    this.noPerson = this.Adults + this.Children + this.Olders
    activity.noPerson = this.noPerson.toString()

    if (this.authSer.userLogin) {
      this.router.navigate(['/sign/login'])
      console.log(this.authSer.userLogin)
      // return false;
    } else {
      // return true;

      console.log(this.authSer.userLogin)
      console.log(activity.Price)
      activity.Price = this.totalPrice.toString()
      activity.noPerson = this.noPerson.toString()
      console.log('type of price: ' + typeof (activity.Price))
      console.log('activity.Price: ' + activity.Price)

      this.activityDetails.Booking(activity).then(
        (res) => {
          console.log('Done')

          console.log(typeof (this.totalPrice))
        },
        (err) => {
          console.log('error : ' + err)
        },
      )
      this.dialog.open(BookingDialogComponent, {
        width: '350px',
        data: {
          Email: this.UserNAme,
          Title: this.Card.Title,
          Date: this.Date,
          Image: this.Card.Image,
          Adults: this.Adults,
          Children: this.Children,
          Olders: this.Olders,
          SIM: this.SIM,
          Price: this.totalPrice,
          sectionName: this.sectionName,
          Rooms: this.Rooms,
          checkOutDate: this.hotelDate,
        },
      })
    }
  }


  ////////////////////////wishlist///////////////////////////

  wishBool:boolean=false
  iconControl:string='far fa-heart';

   wishlist: IWish = {
    // Adults: this.Adults,
    // Children: this.Children,
    // Olders: this.Olders,
    // SIM: this.SIM,
    Price: this.Card.Price,
    Title: this.Card.Title,
    Email: localStorage.getItem('currentUserEmail'),
    Date: this.Card.Date,
    // checkOutDate: this.hotelDate.toString(),
    Image: this.Card.Image,
    // sectionName: this.sectionName,
    // noPerson: this.noPerson.toString(),
    // Rooms: this.Rooms,
  }
  wish(){
    this.wishlist= {
      // Adults: this.Adults,
      // Children: this.Children,
      // Olders: this.Olders,
      // SIM: this.SIM,
      Price: this.Card.Price,
      Title: this.Card.Title,
      Email: localStorage.getItem('currentUserEmail'),
      Date: this.Card.Date,
      // checkOutDate: this.hotelDate.toString(),
      Image: this.Card.Image,
      // sectionName: this.sectionName,
      // noPerson: this.noPerson.toString(),
      // Rooms: this.Rooms,
    }
    if (this.authSer.userLogin) {
      this.router.navigate(['/sign/login'])
      console.log(this.authSer.userLogin)
      // return false;
    } else {
    if(this.wishBool==false){
      this.iconControl='fas fa-heart';

      this.wishBool=true
      this.activityDetails.WishList(this.wishlist).then(
        (res) => {
          console.log('Done')

          console.log(typeof (this.totalPrice))
        },
        (err) => {
          console.log('error : ' + err)
        },
      )
    console.log(this.Card,localStorage.getItem('currentUserEmail'))
    console.log(this.wishlist)

    }
    else{
  this.iconControl='far fa-heart';

      this.wishBool=false

    }

  }

  }

}