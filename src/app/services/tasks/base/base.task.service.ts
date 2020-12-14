import { Injectable } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

// Remove this class, Not Used after HTTP Interceptor imp.
@Injectable({
  providedIn: 'root'
})
export class BaseTaskService {

  protected totalNumberOfRetry = 3;

  constructor() { }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
