import { Injectable } from '@angular/core';
import {ApiService} from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonTaskService {

  constructor(private requestService: ApiService) { }

  getProvinces() {
    return this.requestService.post('rest/common/getProvinces', null);
  }
}
