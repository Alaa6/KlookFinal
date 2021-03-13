import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ICity } from 'src/app/viewModels/i-city';
import { Tours } from 'src/app/viewModels/tours';
// import { OwlOptions } from 'ngx-owl-carousel-o/ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges {
  NearYou: Tours[] = [];
  IncredibleDestinations: ICity[] = [];
  TopThings: Tours[] = [];
  Recommended: Tours[] = [];
  InspiredTaipei: Tours[] = [];
  InspiredHong: Tours[] = [];
  Inspired: Tours[] = [];
  collectionListName: string[] = [];
  tr: string = 'en';

  @ViewChild('hid') hid: any;
  @ViewChild('hid2') hid2: any;
  @ViewChild('demoVideo') demoVideo: any;

  constructor(
    private fs: AngularFirestore,
    private homeService: HomeService,
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageServiceService
  ) {
    this.translate.use(languageService.getLanguage());
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setLanguage();
    throw new Error('Method not implemented.');
    // this.setLanguage();
  }

  // getCityAr(){
  //   this.homeService.getCityArabic('1eUkI2JblEVbiYCGjXOy').subscribe(
  //     (data) => this.x = data.exists ? data.data().username : undefined
  //   }
  // }

  //////////////////////////////////////////////////////////
  // Create an initial document to update.
  // x :AngularFirestoreDocument<unknown>= this.fs.collection("ToursCollection").doc("1eUkI2JblEVbiYCGjXOy");

  //x.set({    name: "Frank",    favorites: { food: "Pizza", color: "Blue", subject: "recess" },    age: 12});
  // To update age and favorite
  //color:fs.collection("users").doc("frank").update({    "age": 13,    "favorites.color": "Red"});
  ///////////////////////////////////////////////////////////////////////
  ngAfterViewInit(): void {
    // let view = this.hid.nativeElement;
    // view.src = URL.createObjectURL(yourBlob);
  }
  ngOnInit(): void {
    this.tr = 'en';
    this.setLanguage();

    this.homeService.getNearYou().subscribe((near) => {
      this.NearYou = near.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });

      this.NearYou.map((tour) => {
        this.collectionListName.push(tour.Title);
      });
    });

    this.homeService.getIncredibleDestinations().subscribe((dis) => {
      this.IncredibleDestinations = dis.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });

    this.homeService.getTopThings().subscribe((top) => {
      this.TopThings = top.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });

    this.homeService.getInspired().subscribe((top) => {
      this.Inspired = top.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });

    // this.homeService.getInspiredTaipei()
    // .subscribe((top) => {
    //   this.InspiredTaipei = top.map(data => {
    //     return {
    //       id: data.payload.doc.id,
    //       ...data.payload.doc.data()
    //     }
    //   });
    // })

    // this.homeService.getInspiredHongKong()
    // .subscribe((top) => {
    //   this.InspiredHong = top.map(data => {
    //     return {
    //       id: data.payload.doc.id,
    //       ...data.payload.doc.data()
    //     }
    //   });
    // })

    this.homeService.getKlookRecommended().subscribe((rec) => {
      this.Recommended = rec.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });
  }

  customOptions: OwlOptions = {
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
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  TopThingsIn: OwlOptions = {
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
        items: 1,
      },
      479: {
        items: 1,
      },
      705: {
        items: 3,
      },
      740: {
        items: 3,
      },
      768: {
        items: 3,
      },
      940: {
        items: 4,
      },
      800: {
        items: 3,
      },
      // 940: {
      //   items: 4
      // },

      970: {
        items: 3,
      },
      1080: {
        items: 4,
      },
    },
    nav: true,
  };

  hide() {
    let view = this.hid.nativeElement;
    view.style.display = 'none';
  }

  hide2() {
    let view = this.hid2.nativeElement;
    view.style.display = 'none';
  }

  play() {
    console.log('play video');
    let video = this.demoVideo.nativeElement;
    video.src = './../../../assets/Home/klook.mp4';
  }

  pause() {
    console.log('Pause video');
    let video = this.demoVideo.nativeElement;
    video.src = '';
  }

  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }
  viewDestination(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/destination', collectionName, ID]);
  }
  
setLanguage() {
  // this.languageService.setLanguage(
    this.languageService.getLanguage() == 'ar'
      ? (this.tr = 'ar')
      : (this.tr = 'en')
  // );
  // this.translate.use(this.languageService.getLanguage());
  console.log("tr"+ this.tr);
  return this.tr;
}

search( searchTerm?:string) {
  
  

  this.router.navigate(['/experiences/activities', {searchKey : searchTerm}])
  

}





}
