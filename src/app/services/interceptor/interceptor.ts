import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {LoadingDataService} from '../data/loading-service/loading.data.service';

@Injectable()
export class Interceptor implements HttpInterceptor{

  protected totalNumberOfRetry = 3;

  constructor(private loadingDataService: LoadingDataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor--START');
    console.log(req.url);
    this.loadingDataService.onRequestStart();
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loadingDataService.onResponseReceived();
            console.log(event.body);
            map(data => event.body);
          }
        },
        (error: HttpErrorResponse) => {
          this.loadingDataService.resetLoading();
          this.handleError(error);
        }
      ),
      retry(this.totalNumberOfRetry)
    );
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );

      if (error.status === 500) {
        console.log('500 - popup - goto dashboard');
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

}
