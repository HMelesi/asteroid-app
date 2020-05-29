import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Welcome } from './date';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'https://api.nasa.gov/neo/rest/v1/feed';

  constructor(private httpClient: HttpClient) {}

  sendGetRequest(date): Observable<Welcome> {
    return this.httpClient.get<Welcome>(
      `${this.REST_API_SERVER}?start_date=${date}&end_date=${date}&api_key=WKi3G8uKrwAuCkcjvUU3gf42VFdfbUmrpzD5ju2L`
    );
  }
}
