import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { Tours } from '../../../viewModels/tours';
import { DialogAdminComponent } from '../dialog-admin/dialog-admin.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  adminlogin:boolean=false
  name: Tours[] = []
  // activatedRoute: any;
  // loginBool: boolean;
  // signbool: boolean;
  // Signn: string;
  constructor(private afth: RelaxServiceService,
    // ,public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) {
    // const dialogRef = this.dialog.open(DialogAdminComponent, {
    //   disableClose:true,
    //   width: '550px'
      
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });

    this.afth.getall().subscribe(argg => {
      // this.BestSeller=argg
      // this.name=argg
      // console.log(argg)
    }
    )
  }

  ngOnInit(): void {
    console.log(new Date)
    
  }

  // subsign: string = '';

  //  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 

  //   this.subsign = String(params.get('adminstatus'))

  //   if(this.subsign=='login'){
  //     this.adminlogin=true
  //     }
  //     else 
  //     {
  //       const dialogRef = this.dialog.open(DialogAdminComponent, {
  //         disableClose:true,
  //         width: '550px'
          
  //       });
    
  //       dialogRef.afterClosed().subscribe(result => {
  //         console.log('The dialog was closed');
  //       });
  //       this.adminlogin=false
      
  //     }

  // })

}
