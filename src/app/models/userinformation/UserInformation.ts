
import {UserContactInformation} from '../contactinformation/UserContactInformation';
import {UserEducationInformation} from '../educationinformation/UserEducationInformation';
import {UserPersonalInformation} from '../personalinformation/UserPersonalInformation';
import {UserWorkExperience} from '../workexperienceinformation/UserWorkExperience';
import {UserForeignLanguageInformation} from '../foreignlanguageinformation/UserForeignLanguageInformation';

export class UserInformation {
  contactInformation: UserContactInformation;
  personalInformation: UserPersonalInformation;
  educationInformation: UserEducationInformation;
  foreignLanguageInformation: UserForeignLanguageInformation;
  workExperiences: UserWorkExperience;

  constructor(
    contactInformation: UserContactInformation,
    personalInformation: UserPersonalInformation,
    educationInformation: UserEducationInformation,
    foreignLanguageInformation: UserForeignLanguageInformation,
    workExperiences: UserWorkExperience
  ) {
    this.contactInformation = contactInformation;
    this.personalInformation = personalInformation;
    this.educationInformation = educationInformation;
    this.foreignLanguageInformation = foreignLanguageInformation;
    this.workExperiences = workExperiences;
  }
}
