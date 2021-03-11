// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-book-train',
//   templateUrl: './book-train.component.html',
//   styleUrls: ['./book-train.component.scss'],
// })
// export class BookTrainComponent implements OnInit {
//   bookForm = this.fb.group({
//     class: ['', Validators.required],
//     date: ['', Validators.required],
//     passType: ['', Validators.required],
//     validity: ['', Validators.required],
//     quantity: [[], Validators.required],
//   });
//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {}
//   // export class BookTrainComponent  {

//   // constructor() { }

//   currentSection = 'section1';

//   onSectionChange(sectionId: string) {
//     this.currentSection = sectionId;
//     console.log(sectionId);
//   }

//   scrollTo(section) {
//     //   if(section == null){
//     //     document.querySelector('#' + this.currentSection)
//     //   .scrollIntoView();
//     //   }
//     //   else{
//     //     document.querySelector('#' + section)
//     //     .scrollIntoView();
//     //   }
//     document.querySelector('#' + section).scrollIntoView();
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-train',
  templateUrl: './book-train.component.html',
  styleUrls: ['./book-train.component.scss']
})
export class BookTrainComponent  {
  currentMenuId = "";

  constructor() { }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(sectionId)
  }

  // scrollTo(section) {
  // //   if(section == null){
  // //     document.querySelector('#' + this.currentSection)
  // //   .scrollIntoView();
  // //   } 
  // //   else{
  // //     document.querySelector('#' + section)
  // //     .scrollIntoView();  
  // //   }
  //   document.querySelector('#' + section)
  //   .scrollIntoView();
  // }


  

}