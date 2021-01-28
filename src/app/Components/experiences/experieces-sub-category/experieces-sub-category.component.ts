import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICategory } from 'src/app/viewModels/icategory';
import { Observable, Subscription } from 'rxjs';
import { IActivity } from 'src/app/viewModels/iactivity';
import { PopupComponent } from '../../popup/popup.component';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-experieces-sub-category',
  templateUrl: './experieces-sub-category.component.html',
  styleUrls: ['./experieces-sub-category.component.scss']
})
export class ExperiecesSubCategoryComponent implements OnInit {


  @ViewChild ('testCity') testCity : ElementRef  = new ElementRef('input')
  @ViewChild (PopupComponent) popupComponent: any  ;


  categoryList : ICategory[] =[]
  category$ : Observable<ICategory[]>  |undefined
  city     : string ='cairo' 
  // @Input() city: string =''; 
  activityList : IActivity [] =[]
  
  subCatName : string ='Experience' ;




  constructor( private relaxService : RelaxServiceService ,
               public dialog: MatDialog ,
               private activatedRoute : ActivatedRoute) {
  
   }

  ngOnChanges(): void {
    console.log(this.city , 'on change ');
    let test = localStorage.getItem('city')
    console.log(test , "onchange");
    
  }


  ngAfterViewInit(): void {

    let popUpRef : PopupComponent = this.popupComponent

    // this.city = popUpRef.city

    console.log(this.city);

    let test = localStorage.getItem('city')

    console.log(test , "after view");
    console.log( this.testCity.nativeElement.value ,'aaa');
    
 
    
    

    this.category$ = this.relaxService.getCategoriesByCity (this.city) ;
 
    console.log(this.city , ' afterview');
    
  }
 
  ngOnInit(): void {
    this.category$ = this.relaxService.getCategoriesByCity (this.city) ;

    this.category$.subscribe((res) =>{
     
      this.categoryList =  res
  
    } ,(err)=>console.log(err)
    ) 

    this.relaxService.getAllActivities("Cairo").subscribe((res) =>{
    
      this.activityList =  res
  
    } ,(err)=>console.log(err)
    ) 

    let test = localStorage.getItem('city')

    console.log(test , "onInit");

    // getParam

    let routeSubscription :Subscription =  this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 
     
      this.subCatName = String (params.get('supCatName') )

      console.log(this.subCatName);
      

    },
      (err) => console.log(err)

    )   // return 7aga mn no3 subscription

  }

  openPopup () {

    const dialogRef = this.dialog.open(PopupComponent  );
    dialogRef.afterClosed().subscribe(city => {

      // console.log(city);

     this.city =  city
    
    });
   
  }



}
