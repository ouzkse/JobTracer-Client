import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ROOT_URL;

  constructor(private httpClient: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080/';
  }

  private getRequestHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  get<T>(url: string, httpParams: HttpParams = null) {
    console.log(httpParams);
    return this.httpClient.get<T>(this.ROOT_URL + url, { params: httpParams });
  }

  post<T>(url: string, content: object) {
    const header = this.getRequestHeader();
    return this.httpClient.post<T>(
      this.ROOT_URL + url, content,
      {
        headers: header,
        observe: 'response',
        reportProgress: true
      }
    );
  }
}
