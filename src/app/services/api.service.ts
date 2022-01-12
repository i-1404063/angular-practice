import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, map, Observable } from 'rxjs';
import { Restaurant } from 'src/restaurant.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postRestaurant(data: Restaurant, url: string): Observable<any> {
    return this.http.post(url, data).pipe(map((res) => res)); // return observable
  }

  getRestaurant(url: string): Observable<any> {
    return this.http.get(url).pipe(map((response) => response));
  }
}
