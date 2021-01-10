import {Injectable} from '@angular/core';
import {CityCommonModel} from '../../../models/common/CityCommonModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../../api/api.service';
import {LanguageCommonModel} from '../../../models/common/LanguageCommonModel';
import {MatchResultInformation, MatchResultItem} from '../../../models/match-result/MatchResultInformation';
import {UserInformation} from '../../../models/user-information/UserInformation';
import {University} from '../../../models/education-information/University';
import {HttpParams} from '@angular/common/http';
import {Faculty} from '../../../models/education-information/Faculty';
import {Department} from '../../../models/education-information/Department';
import {PageModel} from '../../../models/match-result/PageModel';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService {

  constructor(private requestService: ApiService) {}

  getProvinces(): Observable<CityCommonModel[]> {
    return this.requestService.get<CityCommonModel[]>('rest/cities')
      .pipe(
        map(data => data)
      );
  }

  getUniversities(): Observable<University[]> {
    return this.requestService.get<University[]>('rest/universities')
      .pipe(
        map(data => data)
      );
  }

  getFaculties(universityId: string): Observable<Faculty[]> {
    return this.requestService.get<Faculty[]>('rest/faculties', new HttpParams().append('universityId', universityId))
      .pipe(
        map(data => data)
      );
  }

  getDepartments(universityId: string, facultyId: string): Observable<Department[]> {
    return this.requestService.get<Department[]>(
      'rest/departments',
      new HttpParams()
        .append('universityId', universityId)
        .append('facultyId', facultyId)
    ).pipe(
      map(data => data)
    );
  }

  getDriverLicenseList(): Observable<[string]> {
    return this.requestService.post<[string]>('rest/driverlicencetypes', null)
      .pipe(
        map(data => data.body)
      );
  }

  getForeignLanguages(): Observable<Array<LanguageCommonModel>> {
    return this.requestService.get<Array<LanguageCommonModel>>('rest/languages', null)
      .pipe(
        map(data => data)
      );
  }

  getProfessionList(): Observable<Array<string>> {
    return this.requestService.get<Array<string>>('rest/positions', null)
      .pipe(
        map(data => data)
      );
  }

  getResultList(userInformation: UserInformation): Observable<MatchResultInformation> {
    return this.requestService.post<MatchResultInformation>('rest/resumeInfo', userInformation)
      .pipe(
        map(data => data.body)
      );
  }

  getResultPageData(pageModel: PageModel): Observable<MatchResultInformation> {
    return this.requestService.post<MatchResultInformation>('rest/resumeInfoPage', pageModel)
      .pipe(
        map(data => data.body)
      );
  }
}
