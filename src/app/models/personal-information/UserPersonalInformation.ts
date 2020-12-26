import {GenderCommonModel} from '../common/GenderCommonModel';

export class UserPersonalInformation {
  gender: GenderCommonModel;
  militaryServiceStatus: string;
  driverLicence: [string];

  constructor(gender: GenderCommonModel, militaryServiceStatus: string, driverLicence: [string]) {
    this.gender = gender;
    this.militaryServiceStatus = militaryServiceStatus;
    this.driverLicence = driverLicence;
  }
}

