import { Component, OnInit } from '@angular/core';
import { ICity } from 'src/app/viewModels/icity';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  cityList: ICity[] = [];
  city: string
  constructor(private relaxServiceService: RelaxServiceService,
    private dialogRef: MatDialogRef<PopupComponent>) {

    this.city = 'bangkok'

  }

  ngOnInit(): void {
    this.relaxServiceService.getAllCities().subscribe((wifi) => {
      this.cityList = wifi.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    })
  }

  getCityName(city: string) {


    this.city = city
    localStorage.setItem("city", city)
    this.dialogRef.close(city);



  }

}
