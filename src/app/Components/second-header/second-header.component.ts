import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ISubCategory } from 'src/app/viewModels/isub-category';
import { ModalComponent } from '../modal/modal.component';

// var $: any;

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  public isMenuCollapsed = true;



  @ViewChild('CatModal') Category: ElementRef | undefined;
  city: string;
  allSubCategorey: ISubCategory[] = []


  constructor(private router: Router,
    private modalService: NgbModal,
    private relaxService: RelaxServiceService
  ) {
    this.city = 'Cairo'

  }



  ngOnInit(): void {

    this.relaxService.getSubCategory().subscribe((res) => {
      this.allSubCategorey = res.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
      // this.loading = false
    }, (err) => console.log(err))

  }


  goToExperiencesSubCategory(subCatName?: string) {

    if (subCatName != undefined) {
      this.router.navigate(['/experiences/cat/', this.city,subCatName])
    }
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
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

  // goToActivites(catEvent?: MouseEvent, activityCat?: ICategory , collectionName?: string) {

  //   console.log(activityCat, "activityCat goToActivites");

  //   if(activityCat && activityCat !== undefined)
  //   this.router.navigate(['/experiences/activities',{city : this.city , supCatName : this.subCatName ,activitesCategory: activityCat?.name }])
  //   }


}
