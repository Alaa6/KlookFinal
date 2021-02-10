import { Component, OnInit } from '@angular/core';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from '../../../viewModels/tours';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name: Tours[] = []
  constructor(private afth: RelaxServiceService) {

    this.afth.getall().subscribe(argg => {
      // this.BestSeller=argg
      // this.name=argg
      // console.log(argg)
    }
    )
  }

  ngOnInit(): void {
    console.log(new Date)
  }

}