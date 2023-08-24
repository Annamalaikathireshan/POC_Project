import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  apiurl = "https://localhost:7169/api/";
  http: any;
  url: any;
    constructor(private httpClient:HttpClient) { }
  postProduct()
  {
    return this.http.post(this.url);
  }
}
