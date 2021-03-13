import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ICity } from 'src/app/viewModels/icity';
import { ITour } from './../../viewModels/itour';
import { HomeService } from 'src/app/services/home.service';
import { Tours } from './../../viewModels/tours';
import { Hotels } from 'src/app/viewModels/hotels';
import { IFood } from 'src/app/viewModels/ifood';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit, OnChanges {

  AttractionsList: Tours[] = []
  HotelsList: Hotels[]=[]
  loading: boolean = true;
  count: number = 5
  cityList: ICity[] = [];
  FoodList: IFood[] = [];
  section: string = "";
  ID: string = "";
  Card: any = "";


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


  constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute, private router: Router,) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  let test = localStorage.getItem('city')

  this.homeService.getAttractionsDestinations().subscribe((near) => {
    this.AttractionsList = near.map(data => {
      return {
        id: data.payload.doc.id,
        ...data.payload.doc.data()
      }
    });
  })

  this.homeService.getHotelDestinations().subscribe((hotel) => {
    this.HotelsList = hotel.map(data => {
      return {
        id: data.payload.doc.id,
        ...data.payload.doc.data()
      }
    });
  })
  this.homeService.getFoodDestinations().subscribe((food) => {
    this.FoodList = food.map(data => {
      return {
        id: data.payload.doc.id,
        ...data.payload.doc.data()
      }
    });
  })

  this.activatedRoute.paramMap.subscribe((params) => {
    let Details: string | null = params.get('id');
    let sectioName: string | null = params.get('collectionName');
    this.section = (sectioName) ? sectioName : "";
    this.ID = (Details) ? Details : "";

    this.getDestination(this.ID, this.section);

    console.log("id " + this.ID);
  },

    (err) => { console.log(err) }
  );

  }
  private getDestination(ID: string, collection: string) {
    this.homeService.getDestinationDetails(ID, collection).then((res) => {
      this.Card = res;
      console.log(this.Card.City1)

    }).catch((err) => {
      console.log(err);
    });
  }
  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }



}
