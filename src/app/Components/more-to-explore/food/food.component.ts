import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class FoodComponent implements OnInit, OnDestroy {
  FoodList: IFood[] = [];
  subscribtion: Subscription | null = null;
  totalRecords: number = 0;
  //page: number = 1;
  // name = 'Angular';
  // page = 1;
  // //pageSize = 12;
  // items = [];
  // maxSize = 2;
  // length = 24;
  // pageSize = 12;
  // pageIndex = 0;
  // pageSizeOptions = [5, 10, 25];
  // showFirstLastButtons = true;

  // handlePageEvent(event: PageEvent) {
  //   this.length = event.length;
  //   this.pageSize = event.pageSize;
  //   this.pageIndex = event.pageIndex;
  // }
  searchkey: string = '';
  subCatName: string = '';
  city: string = '';
  // toursSearch: ITour[] = []
  // jsoon: ICategory[] = []
  searchTerm: string = '';
  // toursSearchdisplay: ITour[] = []
  priceRangeValue: number;
  priceRangeMax: number;
  priceRangeMin: number;
  // tourList: ITour[] = []
  subCat: string = '';
  // cityList: ICity[] = []
  continentNameList: string[] = [];
  continentName: string = '';
  showCity: Boolean = false;
  activitesCategory: string = '';
  cityName: string = '';
  activCatName: string = '';
  collectionListName: string[] = [];
  collectionName: string = '';

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
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
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

    this.subscribtion = this.foodServics
      .getFoodCards('Categories', 'Section', 'Food', 'Other')
      .subscribe(
        (res) => {
          this.FoodList = res;
          this.totalRecords = res.length;
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
      },
      (e) => {
        console.log('cant find ' + e);
      }
    );
  }

  setCityName(cityName: string) {
    this.router.navigate([
      '/experiences/activities/',
      {
        city: cityName,
        supCatName: this.subCatName,
        activitesCategory: this.activitesCategory,
        collectionName: this.collectionName,
      },
    ]);
  }

  setActivCategoryName(activCate: string) {
    console.log(activCate);

    this.router.navigate([
      '/experiences/activities/',
      {
        city: this.city,
        supCatName: this.subCatName,
        activitesCategory: activCate,
        collectionName: this.collectionName,
      },
    ]);
  }
}
