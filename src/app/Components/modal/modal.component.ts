import { Component, OnInit , Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
 
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
// import { Component, OnInit } from '@angular/core';
// import { Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent implements OnInit {
//   video: string | undefined;

//   constructor( public dialog: MatDialog) { 
    
//   }
//   openDialog(): void {
//     const dialogRef = this.dialog.open(SignUpComponent, {
//       width: '70em',
//       height:'40em',
//       data: {video: this.video}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.video = result;
//     });
//   }

//   ngOnInit(): void {
//   }

// }
