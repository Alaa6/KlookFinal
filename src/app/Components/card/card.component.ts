import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from 'src/app/viewModels/icategory';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() categoryList: ICategory[] =[];

  constructor() { }

  ngOnInit(): void {
   
  }

}
