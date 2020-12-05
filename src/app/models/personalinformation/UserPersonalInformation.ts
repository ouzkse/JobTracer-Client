import {GenderType} from '../common/GenderCommonModel';

export class UserPersonalInformation {
  gender: GenderType;
  militaryServiceStatus: string;
  nationality: string;
  driverLicence: [string];

  constructor(gender: GenderType, militaryServiceStatus: string, nationality: string, driverLicence: [string]) {
    this.gender = gender;
    this.militaryServiceStatus = militaryServiceStatus;
    this.nationality = nationality;
    this.driverLicence = driverLicence;
  }
}

