import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Welcome } from './date';
import { Detail } from './detail';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private asteroidListUrl = 'https://api.nasa.gov/neo/rest/v1/';

  constructor(private httpClient: HttpClient) {}

  getAsteroids(date): Observable<Welcome> {
    return this.httpClient.get<Welcome>(
      `${this.asteroidListUrl}feed?start_date=${date}&end_date=${date}&api_key=WKi3G8uKrwAuCkcjvUU3gf42VFdfbUmrpzD5ju2L`
    );
  }

  getAsteroidDetail(id): Observable<Detail> {
    return this.httpClient.get<Detail>(
      `${this.asteroidListUrl}neo/${id}?api_key=WKi3G8uKrwAuCkcjvUU3gf42VFdfbUmrpzD5ju2L`
    );
  }
}
