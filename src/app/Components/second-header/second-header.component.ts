import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {


  subCategoryName : string ;
  
  constructor() {
    this.subCategoryName = "Tour"
   }

  ngOnInit(): void {
  }

  setsubCategoryName (subCatName :string){
     localStorage.setItem('experienceCat' ,subCatName)

     console.log(localStorage.getItem('experienceCat'));
     
  }

}
