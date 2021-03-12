import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WifiService } from 'src/app/services/wifi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivityDetailsService } from 'src/app/services/activity-details.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IBooking } from 'src/app/viewModels/ibooking';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
// import { CardDirective } from 'src/app/Directives/card.directive';


@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  Card: any = "";
  ID: string = "";
  section: string = "";
  // Name: string = "Dina";
  Adults: number = 0;
  Children: number = 0;
  Olders: number = 0;
  totalPrice: number = 0;
  constructor(private router: Router, private authSer: AuthService,public dialog: MatDialog, private activatedRoute: ActivatedRoute, private activityDetails: ActivityDetailsService,) {

  }

  best: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  deal: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      let Details: string | null = params.get('id');
      let sectioName: string | null = params.get('collectionName');
      this.section = (sectioName) ? sectioName : "";
      this.ID = (Details) ? Details : "";

      this.getActivityById(this.ID, this.section);

      console.log("id " + this.ID);
    },

      (err) => { console.log(err) }
    );
    this.totalPrice = (this.Adults * 3) + (this.Children * 2) + (this.Olders * 1) * this.Card.Price;
  }


  private getActivityById(ID: string, collection: string) {
    this.activityDetails.getActivityDetails(ID, collection).then((res) => {
      this.Card = res;

    }).catch((err) => {
      console.log(err);
    });
  }

  add() {
    this.Adults++;

  }
  add1() {
    this.Children++;

  }
  add2() {
    this.Olders++;

  }
  sub() {
    if (this.Adults > 0) {
      this.Adults--;
    }

  }
  sub1() {
    if (this.Children > 0) {
      this.Children--;
    }

  }
  sub2() {
    if (this.Olders > 0) {

      this.Olders--;
    }

  }


  UserNAme:string=''
  Booking() {
    this.UserNAme= localStorage.getItem('currentUserName') 
    let activity: IBooking = {
      Adults: this.Adults,
      Children: this.Children,
      Olders: this.Olders,
      Price: this.totalPrice,
      Title: this.Card.Title,
      Name:this.UserNAme
    }
    this.totalPrice = (this.Adults * 3) + (this.Children * 2) + (this.Olders * 1) * this.Card.Price;

    if (this.authSer.userLogin) {
      this.router.navigate(['/sign/login'])
console.log(this.authSer.userLogin)
      // return false;
    } else {
      // return true;

      console.log(this.authSer.userLogin)


    this.activityDetails.Booking(activity).then(
      (res) => {
        console.log("Done")
        console.log(typeof(this.totalPrice))

      },
      (err) => { console.log("error : " + err) }
    )
    this.dialog.open(BookingDialogComponent, {
      width: '350px',
      data: { Name: this.UserNAme, Title: this.Card.Title, Adults: this.Adults, Children: this.Children, Olders: this.Olders, Price: this.totalPrice }
    });
  }
  }
}











