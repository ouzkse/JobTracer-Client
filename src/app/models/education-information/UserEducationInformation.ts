import {EducationInformation} from './EducationInformation';

export class UserEducationInformation {
  educationInformation: Array<EducationInformation>;

  constructor(educationInformation: Array<EducationInformation>) {
    this.educationInformation = educationInformation;
  }
}
