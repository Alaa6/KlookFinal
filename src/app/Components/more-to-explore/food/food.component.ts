import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { IFood } from 'src/app/viewModels/ifood';
import { PageEvent } from '@angular/material/paginator';
import { IContinent } from 'src/app/viewModels/icontinent';
import { ISubCategory } from 'src/app/viewModels/isub-category';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ITour } from 'src/app/viewModels/itour';
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit, OnDestroy, OnChanges {
  FoodList: IFood[] = [];
  subscribtion: Subscription | null = null;
  totalRecords: number = 0;
  p: number = 1;

  // handlePageEvent(event: PageEvent) {
  //   this.length = event.length;
  //   this.pageSize = event.pageSize;
  //   this.pageIndex = event.pageIndex;
  // }
  searchkey: string = '';
  // subCatName: string = 'Food';
  city: string = '';
  //toursSearch: ITour[] = []
  // jsoon: ICategory[] = []
  searchTerm: string = '';
  // toursSearchdisplay: ITour[] = []
  priceRangeValue: number;
  priceRangeMax: number;
  priceRangeMin: number;
  tourList: ITour[] = [];
  subCat: string = 'Food';
  // cityList: ICity[] = []
  continentNameList: string[] = [];
  continentName: string = '';
  showCity: Boolean = false;
  activitesCategory: string = '';
  cityName: string = '';
  activCatName: string = '';
  collectionListName: string[] = [];
  collectionName: string = '';
  records: number;
  private _transformerCities = (node: IContinent, level: number) => {
    return {
      expandable: !!node.Cities && node.Cities.length > 0,
      name: node.Name,
      level: level,
    };
  };
  private _transformerCategories = (node: ISubCategory, level: number) => {
    return {
      expandable: !!node.ActivCategories && node.ActivCategories.length > 0,
      name: node.Name,
      level: level,
    };
  };

  treeControl: any = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattenerCities: any = new MatTreeFlattener(
    this._transformerCities,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.Cities
  );

  treeFlattenerCategories: any = new MatTreeFlattener(
    this._transformerCategories,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.ActivCategories
  );
  dataSourceCities: any = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattenerCities
  );

  dataSourceCatefories: any = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattenerCategories
  );

  constructor(
    private languageService: LanguageServiceService,
    private translate: TranslateService,
    private foodServics: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private relaxService: RelaxServiceService
  ) {
    this.translate.use(languageService.getLanguage());
    this.records = this.FoodList.length;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredCard();
    throw new Error('Method not implemented.');
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    console.log('Len ' + this.FoodList.length);
    //this.records = this.FoodList.length;
    this.relaxService.getContinentList().subscribe((res) => {
      this.dataSourceCities.data = res.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });

    this.relaxService.getSubCategory().subscribe((res) => {
      this.dataSourceCatefories.data = res.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
    });

    ////////////////////////////////////////////////////
    let routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        //if  the route parameter value  changes  (Observable)

        //  this.subCatName = String(params.get('supCatName'));
        this.city = String(params.get('city')).split('%20').join(' ');
        this.searchkey = String(params.get('searchKey')).split('%20').join(' ');
        this.activitesCategory = String(params.get('activitesCategory'))
          .split('%20')
          .join(' ');
        this.collectionName = String(params.get('collectionName'))
          .split('%20')
          .join(' ');
        ////////////////////////////////////////////

        // if (
        //   this.activitesCategory !== 'null' &&
        //   this.activitesCategory !== undefined
        // ) {

        //   //  this.relaxService.getFoodCards(this.city,undefined,'Food',this.activitesCategory).subscribe(
        //   //  )
        // }
        this.filteredCard();
      }
    );
    this.subscribtion = this.foodServics
      .getFoodCards('Categories', 'Section', 'Food', 'Other')
      .subscribe(
        (res) => {
          this.FoodList = res;
          this.totalRecords = this.setLength(this.FoodList);
          // this.totalRecords = this.FoodList.length;
          console.log('ll' + this.totalRecords);
        },
        (err) => {
          console.log('cant get food cards ' + err);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }
  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }
  filterByCity() {
    this.foodServics.searchForFood('Bangkook', 'Food').subscribe(
      (res) => {
        this.FoodList = res;
        this.totalRecords = this.setLength(this.FoodList);
      },
      (e) => {
        console.log('cant find ' + e);
      }
    );
  }

  setCityName(cityName: string) {
    this.router.navigate([
      '/moreToExplore/food&dining',
      {
        city: cityName,
        //supCatName: this.subCatName,
        // activitesCategory: this.activitesCategory,
        // collectionName: this.collectionName,
      },
    ]);
  }

  setActivCategoryName(activCate: string) {
    console.log(activCate);

    this.router.navigate([
      '/moreToExplore/food&dining',
      {
        city: this.city,
        // supCatName: this.subCatName,
        // activitesCategory: activCate,
        //collectionName: this.collectionName,
      },
    ]);
  }

  filteredCard() {
    console.log('inside filtered');
    this.relaxService.getFood(this.city).subscribe((res) => {
      this.FoodList = res.map((data) => {
        this.totalRecords = this.setLength(this.FoodList);
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
      //console.log(this.FoodList, "this.FoodList activitesCategory");
      console.log(res, 'res activitesCategory ');
    });
  }

  setLength(list: IFood[]) {
    return list.length;
  }
}
