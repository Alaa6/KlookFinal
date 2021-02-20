import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EuropeTrainService } from 'src/app/services/europe-train.service';
import { IDestination } from 'src/app/viewModels/idestination';
import { IEuropeTrains } from 'src/app/viewModels/ieurope-trains';
import { IPassenger } from 'src/app/viewModels/ipassenger';
import { ISource } from 'src/app/viewModels/isource';
import { ITrainBook } from 'src/app/viewModels/itrain-book';
import { ITrainReview } from 'src/app/viewModels/itrain-review';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-europe-trains',
  templateUrl: './europe-trains.component.html',
  styleUrls: ['./europe-trains.component.scss']
})
export class EuropeTrainsComponent implements OnInit {
  trainTrips: IEuropeTrains[] = [];
  subscribtion: Subscription | null = null;
  trainReviews: ITrainReview[] = [];
  f: IDestination[];
  t: ISource[];

  // pass:IPassenger[];


  bookForm = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    depDate: ['', Validators.required],
    depTime: ['', Validators.required],
    NOfPassenger: ['', Validators.required]
  });

  customOptions: OwlOptions = {
    loop: false,
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
  constructor(private eTrainService: EuropeTrainService, private router: Router, private fb: FormBuilder) {
    this.f = [{ id: 0, from: "LONDON" },
    { id: 1, from: "Germany" }]
    this.t = [{ id: 0, to: "PARIS" }]

    // this.pass=[{typeOfPassenger:"senior",}]
  }

  ngOnInit(): void {
    this.eTrainService.getAllTrips().subscribe((dis) => {
      this.trainTrips = dis.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
    this.eTrainService.getReviews().subscribe((wifi) => {
      this.trainReviews = wifi.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
  }



  bookTrip() {

    console.log("button clicked")

    console.log("1 " + this.bookForm.controls['from'].value);
    console.log("1 " + this.bookForm.controls['NOfPassenger'].value);

    let p: ITrainBook = {
      from: this.bookForm.controls['from'].value,
      to: this.bookForm.controls['to'].value,
      depDate: this.bookForm.controls['depDate'].value,
      depTime: this.bookForm.controls['depTime'].value,
      NOfPassenger: this.bookForm.controls['NOfPassenger'].value,


    }
    this.eTrainService.bookTrip(p).then(
      (res) => {
        console.log("data " + res)
      },
      (err) => { console.log("errr here " + err) }
    )

  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }

  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }
}
