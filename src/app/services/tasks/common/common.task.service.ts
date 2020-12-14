import { Injectable } from '@angular/core';
import {CityCommonModel} from '../../../models/common/CityCommonModel';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BaseTaskService} from '../base/base.task.service';
import {ApiService} from '../../api/api.service';
import {EducationDetailModel} from '../../../models/education-information/EducationDetailModel';
import {LanguageCommonModel} from '../../../models/common/LanguageCommonModel';
import {MatchResultInformation} from '../../../models/match-result/MatchResultInformation';
import {UserInformation} from '../../../models/user-information/UserInformation';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService extends BaseTaskService{

  constructor(private requestService: ApiService) { super(); }

  getProvinces(): Observable<CityCommonModel[]> {
    return this.requestService.post<CityCommonModel[]>('rest/cities', null)
      .pipe(
        map(data => data.body)
      );
  }

  getEducationInformation(): Observable<EducationDetailModel> {
    return this.requestService.post<EducationDetailModel>('rest/unilist', null)
      .pipe(
        map(data => data.body)
      );
  }

  getDriverLicenseList(): Observable<[string]> {
    return this.requestService.post<[string]>('rest/driverlicencetypes', null)
      .pipe(
        map(data => data.body)
      );
  }

  getForeignLanguages(): Observable<Array<LanguageCommonModel>> {
    return this.requestService.post<Array<LanguageCommonModel>>('rest/languages', null)
      .pipe(
        map(data => data.body)
      );
  }

  getProfessionList(): Observable<Array<string>> {
    return this.requestService.post<Array<string>>('rest/GetProfessions', null)
      .pipe(
        map(data => data.body)
      );
  }

  getResultList(userInformation: UserInformation): Observable<MatchResultInformation> {
    return this.requestService.post<MatchResultInformation>('url/url/getResult', userInformation)
      .pipe(
        map(data => data.body)
      );
  }
}
