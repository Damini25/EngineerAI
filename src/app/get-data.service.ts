import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http :HttpClient) { }

  getData(): any {
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story', { 'headers': null });
  }
}
