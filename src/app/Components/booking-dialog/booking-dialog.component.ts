import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBooking } from 'src/app/viewModels/ibooking';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data: IBooking) { }

  ngOnInit(): void {
  }

}
