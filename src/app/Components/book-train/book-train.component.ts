import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-train',
  templateUrl: './book-train.component.html',
  styleUrls: ['./book-train.component.scss']
})
export class BookTrainComponent  {

  constructor() { }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(sectionId)
  }

  scrollTo(section) {
  //   if(section == null){
  //     document.querySelector('#' + this.currentSection)
  //   .scrollIntoView();
  //   } 
  //   else{
  //     document.querySelector('#' + section)
  //     .scrollIntoView();  
  //   }
    document.querySelector('#' + section)
    .scrollIntoView();
  }


  

}
