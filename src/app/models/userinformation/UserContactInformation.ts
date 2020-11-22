import {CityCommonModel} from '../common/CityCommonModel';

export class UserContactInformation {
  emailAddress: string;
  dateOfBirth: string;
  city: CityCommonModel;

  constructor(emailAddress: string, dateOfBirth: string, city: CityCommonModel) {
    this.emailAddress = emailAddress;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
  }
}
