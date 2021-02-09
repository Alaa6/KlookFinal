import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { IFood } from 'src/app/viewModels/ifood';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit,OnDestroy {
  FoodList:IFood[]=[];
  subscribtion: Subscription|null=null;
  totalRecords:number=0;
  page:number=1;

  constructor(private foodServics:FoodServiceService) { }

  ngOnInit(): void {
    this.subscribtion=this.foodServics.getFoodCards("Categories","Section","Food","Other").subscribe(
      (res)=>{
        this.FoodList=res;
        this.totalRecords=res.length;
        console.log("ll"+this.totalRecords);
      },
      (err)=>{console.log("cant get food cards "+err)}
    )

    
  }


  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }
}
