import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER =
    'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=WKi3G8uKrwAuCkcjvUU3gf42VFdfbUmrpzD5ju2L';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
