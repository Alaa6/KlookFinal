import { AfterViewInit, Component, ElementRef, OnInit, ViewChild , Input} from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// var $: any;

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('CatModal') Category: ElementRef | undefined;
    city : string ;

  constructor( private router : Router ,
    private modalService: NgbModal) {
    this.city ='Cairo'
  
   }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }



  ngOnInit(): void {
    
  } 

  setsubCategoryName (subCatName :string){
     this.router.navigate(['/experiences/cat/' ,this.city, subCatName  ])   
  }

  open() {
    const modalRef = this.modalService.open('Modal');
    modalRef.componentInstance.name = 'World';
  }
  // show() {
  //   this.Category?.nativeElement.modal({
  //     show: true,
  //     backdrop: false,
  //   })
  //   console.log('Show')
  //   console.log(this.Category?.nativeElement)
  // }
  // hide() {
  //   this.Category?.nativeElement.modal('hide')
  //   console.log('Hide')
  // }

  
  // showModal():void {
  //   // $("#CatModal").modal('show');
  //   this.Category?.nativeElement.modal('show')
  // }
//   showModal(): void {   
//     this.displayService.setShowModal(true); 
//     // communication to show the modal, I use a behaviour subject from a service layer here
// }

  // show() {
  //   $('#CatModal').modal({
  //     show: true,
  //     backdrop: false,
  //   })
  // }
  // hide() {
  //   $('#CatModal').modal('hide')
  // }
  

}
