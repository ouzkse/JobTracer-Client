import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map, tap} from 'rxjs/operators';
import {LoadingDataService} from '../data/loading-service/loading.data.service';
import {ServiceErrorDataService} from '../data/service-error/service-error.data.service';
import {PopupCommonModel} from '../../models/popup/PopupCommonModel';
import {PopupModelId} from '../../models/popup/PopupModelId';

@Injectable()
export class Interceptor implements HttpInterceptor{

  protected totalNumberOfRetry = 3;

  constructor(
    private loadingDataService: LoadingDataService,
    private errorDataService: ServiceErrorDataService
  ) { }

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
      )
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

      if (error.status === 0 || error.status === 500) {
        const errorPopupModel = new PopupCommonModel(
          PopupModelId.serviceError,
          'Uyarı',
          'Servis bağlantısı sağlanamadı. Ana Sayfaya yönlendirileceksiniz.<br><br>Lütfen daha sonra tekrar deneyiniz.',
          '',
          'Tamam'
        );
        this.errorDataService.setServiceError(errorPopupModel);
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

}
