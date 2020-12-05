import { Injectable } from '@angular/core';
import {CityCommonModel} from '../../../models/common/CityCommonModel';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BaseTaskService} from '../base/base.task.service';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService extends BaseTaskService{

  constructor() { super(); }

  getProvinces(): Observable<CityCommonModel[]> {
    return super.requestService.post<CityCommonModel[]>('rest/common/getProvinces', null)
      .pipe(
        map(data => data.body),
        catchError(super.handleError),
        retry(super.totalNumberOfRetry)
      );
  }
}
