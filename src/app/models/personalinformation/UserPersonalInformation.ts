
export class UserPersonalInformation {
  gender: string;
  militaryServiceStatus: string;
  nationality: string;
  driverLicence: [string];

  constructor(gender: string, militaryServiceStatus: string, nationality: string, driverLicence: [string]) {
    this.gender = gender;
    this.militaryServiceStatus = militaryServiceStatus;
    this.nationality = nationality;
    this.driverLicence = driverLicence;
  }
}

