import { Component, OnInit } from '@angular/core';
import { ICardsDash } from './../../../viewModels/icards-dash';

@Component({
  selector: 'app-dashboard-control-cards',
  templateUrl: './dashboard-control-cards.component.html',
  styleUrls: ['./dashboard-control-cards.component.scss']
})
export class DashboardControlCardsComponent implements OnInit {

  cardsBool:boolean=true

  Cards:ICardsDash[]=[
    {
    title:"Tours",
    NoDocument:"152",
    Icon:"fas fa-route material-icons",
    ColorBck:"card-header-warning"
},
{
  title:"Cities",
  NoDocument:"20",
  Icon:"fas fa-globe-americas material-icons",
  ColorBck:"card-header-success"
},
{
  title:"Activities",
  NoDocument:"30",
  Icon:"fas fa-snowboarding material-icons",
  ColorBck:"card-header-danger"
},
{
  title:"Hotel",
  NoDocument:"25",
  Icon:"fas fa-hotel material-icons",
  ColorBck:"card-header-info"
},

]
  // cardsdata:
  constructor() { }

  ngOnInit(): void {

  }

}
