import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 

@Injectable()


export class NewsListService {
  constructor(private http: HttpClient) { }

   configUrl = 'api/articles'

   getData(){
    return this.http.get(this.configUrl);
   }
}