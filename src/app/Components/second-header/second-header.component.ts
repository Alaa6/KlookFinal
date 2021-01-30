import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {

    city : string
  constructor( private router : Router) {
    this.city ='Cairo'
  
   }

  ngOnInit(): void {
    
  } 

  setsubCategoryName (subCatName :string){
     this.router.navigate(['/experiences/cat/' ,this.city, subCatName  ])   
  }

}
