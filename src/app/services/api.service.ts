// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { LanguageServiceService } from './language-service.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private route: Router,private http: HttpClient, private languageService: LanguageServiceService,
//     ) { }

//     private setHeaders(): HttpHeaders {

//       let headersConfig =
//         {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'language': this.languageService.getLanguage(),

//         };
//       return new HttpHeaders(headersConfig);
//     }
//     private setHeadersWithImage(): HttpHeaders {
//       let headersConfig =
//         {
//           'Accept': 'application/json',
//           'language': this.languageService.getLanguage(),

//         };
//       return new HttpHeaders(headersConfig);
//     }


//     get(path: string, params?: HttpParams) {
//       //console.log(environment.api_url+"/"+path);
//       //console.log("inside service api ");
//       return this.http.get( headers: this.setHeaders(), params ).pipe(catchError(er=>this.formatErrors(er)), map((res: ResultViewModel) => res));
//     }


//     getImages(path: string): Observable<Blob> {
//       //console.log(environment.api_url+"/"+path);
//       //console.log("inside service api ");
//       return this.http.get(`${environment.api_url}${path}`,{responseType:'blob'});
//     }


// }
