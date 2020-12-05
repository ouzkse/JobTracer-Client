import { Injectable } from '@angular/core';
import {CityCommonModel} from '../../../models/common/CityCommonModel';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BaseTaskService} from '../base/base.task.service';
import {ApiService} from '../../api/api.service';
import {EducationDetailModel} from '../../../models/educationinformation/EducationDetailModel';
import {LanguageCommonModel} from '../../../models/common/LanguageCommonModel';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService extends BaseTaskService{

  constructor(private requestService: ApiService) { super(); }

  getProvinces(): Observable<CityCommonModel[]> {
    return this.requestService.post<CityCommonModel[]>('rest/cities', null)
      .pipe(
        map(data => data.body),
        catchError(this.handleError),
        retry(this.totalNumberOfRetry)
      );
  }

  getEducationInformation(): Observable<EducationDetailModel> {
    return this.requestService.post<EducationDetailModel>('rest/unilist', null)
      .pipe(
        map(data => data.body),
        catchError(this.handleError),
        retry(this.totalNumberOfRetry)
      );
  }

  getDriverLicenseList(): Observable<[string]> {
    return this.requestService.post<[string]>('rest/driverlicencetypes', null)
      .pipe(
        map(data => data.body),
        catchError(this.handleError),
        retry(this.totalNumberOfRetry)
      );
  }

  getForeignLanguages(): Observable<Array<LanguageCommonModel>> {
    return this.requestService.post<Array<LanguageCommonModel>>('rest/languages', null)
      .pipe(
        map(data => data.body),
        catchError(this.handleError),
        retry(this.totalNumberOfRetry)
      );
  }
}
