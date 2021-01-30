import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { CarRental } from 'src/app/viewModels/car-rental';

@Component({
  selector: 'app-car-rentals',
  templateUrl: './car-rentals.component.html',
  styleUrls: ['./car-rentals.component.scss']
})
export class CarRentalsComponent implements OnInit {

  carServivedImage:CarRental[]=[];
  constructor( private carServ:CarsService) { }

  ngOnInit(): void {
    this.carServ.getAllCarServivedImages().subscribe((car)=>{
      this.carServivedImage=car;
    })
  }

}
