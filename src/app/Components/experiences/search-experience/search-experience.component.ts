import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RelaxServiceService } from 'src/app/services/relax-service.service';
import { ITour } from 'src/app/viewModels/itour';
import { Tours } from './../../../viewModels/tours';
import { ICategory } from './../../../viewModels/icategory';
import { ICity } from 'src/app/viewModels/icity';
import { IContinent } from 'src/app/viewModels/icontinent';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { ISubCategory } from 'src/app/viewModels/isub-category';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-search-experience',
  templateUrl: './search-experience.component.html',
  styleUrls: ['./search-experience.component.scss'],
})
export class SearchExperienceComponent implements OnInit, AfterViewInit {
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

  searchkey: string = '';
  subCatName: string = '';
  city: string = '';
  toursSearch: ITour[] = [];
  jsoon: ICategory[] = [];
  searchTerm: string = '';
  toursSearchdisplay: ITour[] = [];
  priceRangeValue: number;
  priceRangeMax: number;
  priceRangeMin: number;
  tourList: ITour[] = [];
  subCat: string = '';
  cityList: ICity[] = [];
  continentNameList: string[] = [];
  continentName: string = '';
  showCity: Boolean = false;
  activitesCategory: string = '';
  cityName: string = '';
  activCatName: string = '';
  collectionListName: string[] = [];
  collectionName: string = '';

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
    private activatedRoute: ActivatedRoute,
    private relaxService: RelaxServiceService,
    private router: Router
  ) {
    this.priceRangeValue = 6000;
    this.priceRangeMax = 6000;
    this.priceRangeMin = 0;
    this.relaxService.getall().subscribe((res) => {
      // this.jsoon=res
      console.log(this.jsoon);
    });
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

    let routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        //if  the route parameter value  changes  (Observable)

        this.subCatName = String(params.get('supCatName'));
        this.city = String(params.get('city')).split('%20').join(' ');
        this.searchkey = String(params.get('searchKey')).split('%20').join(' ');
        this.activitesCategory = String(params.get('activitesCategory'))
          .split('%20')
          .join(' ');
        this.collectionName = String(params.get('collectionName'))
          .split('%20')
          .join(' ');

        if (this.searchkey !== 'null') {
          if (
            (this.city != undefined && this.subCatName != undefined) ||
            this.city != null ||
            this.subCatName != null
          ) {
            this.relaxService
              .searchForTours(this.city, this.subCatName, this.collectionName)
              .subscribe((res) => {
                this.toursSearch = res;
                this.tourList = this.toursSearch.filter((res) => {
                  return res.Title.trim()
                    .toLocaleLowerCase()
                    .match(this.searchkey.trim().toLocaleLowerCase());
                });
              });
          } else {
            this.relaxService.searchForTours().subscribe((res) => {
              this.toursSearch = res;
              this.tourList = this.toursSearch.filter((res) => {
                return res.Title.trim()
                  .toLocaleLowerCase()
                  .match(this.searchkey.trim().toLocaleLowerCase());
              });
            });
          }
          this.activitesCategory = 'search';
        } else if (
          this.activitesCategory !== 'null' &&
          this.activitesCategory !== undefined
        ) {
          this.relaxService
            .getAllTours(
              this.city,
              undefined,
              this.subCatName,
              this.activitesCategory
            )
            .subscribe((res) => {
              this.tourList = res.map((data) => {
                return {
                  id: data.payload.doc.id,
                  ...data.payload.doc.data(),
                };
              });
              console.log(this.tourList, 'this.tourList activitesCategory');
              console.log(res, 'res activitesCategory ');
            });
        }
      }
    );

    this.relaxService.getAllCities().subscribe((res) => {
      this.cityList = res.map((data) => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data(),
        };
      });
      // this.cityList  =  [... new Set(cities)];
      // let continentName: string[] = []
      // this.cityList.map((city) => {
      //   continentName.push(city.continent)

      // })

      // this.continentNameList = [... new Set(continentName)]
    });
  }

  ngAfterViewInit(): void {}

  search(searchTerm: string) {
    // this.relaxService.searchForTours(this.city, this.subCatName).subscribe(res => {
    //   this.toursSearch = res
    //   this.toursSearchdisplay = this.toursSearch.filter(res => {
    //     return res.Title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
    //   })
    // })

    this.router.navigate([
      '/experiences/activities/',
      {
        city: this.city,
        supCatName: this.subCatName,
        searchKey: searchTerm,
        collectionName: this.collectionName,
      },
    ]);
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
  viewDetails(ID: string | undefined, collectionName: string) {
    this.router.navigate(['/activityDetails', collectionName, ID]);
  }
}
