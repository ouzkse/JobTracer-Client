import {GenderCommonModel, GenderType} from '../common/GenderCommonModel';

export class UserPersonalInformation {
  gender: GenderCommonModel;
  militaryServiceStatus: string;
  nationality: string;
  driverLicence: [string];

  constructor(gender: GenderCommonModel, militaryServiceStatus: string, nationality: string, driverLicence: [string]) {
    this.gender = gender;
    this.militaryServiceStatus = militaryServiceStatus;
    this.nationality = nationality;
    this.driverLicence = driverLicence;
  }
}

