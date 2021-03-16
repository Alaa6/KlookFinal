import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { Tours } from 'src/app/viewModels/tours';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  NearYou: Tours[] = [];

  
  constructor(private homeService: HomeService,private router: Router) { 

    this.homeService.getwish(localStorage.getItem('currentUserEmail')).subscribe((near) => {
      this.NearYou = near.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });

      // this.NearYou.map((tour) => {
      //   this.collectionListName.push(tour.Title);
      // });
    });
  }

  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }
  ngOnInit(): void {
  }

}
