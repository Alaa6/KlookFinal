import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { map } from 'rxjs/operators';
import { ICategory } from 'src/app/viewModels/icategory';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { IActivity } from 'src/app/viewModels/iactivity';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit  ,  AfterViewInit , OnChanges {

  categoryList : ICategory[] =[]
  category$ : Observable<ICategory[]>  |undefined
  city     : string ='cairo' 
  // @Input() city: string =''; 
  activityList : IActivity [] =[]

  @ViewChild ('testCity') testCity : ElementRef  = new ElementRef('input')


  @ViewChild (PopupComponent) popupComponent: any  ;



  constructor( private relaxService : RelaxServiceService ,
               public dialog: MatDialog) {
  
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
  }

  openPopup () {

    const dialogRef = this.dialog.open(PopupComponent  );
    dialogRef.afterClosed().subscribe(city => {

      // console.log(city);

     this.city =  city
    
    });
   
  }




}
