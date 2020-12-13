
import {UserContactInformation} from '../contact-information/UserContactInformation';
import {UserEducationInformation} from '../education-information/UserEducationInformation';
import {UserPersonalInformation} from '../personal-information/UserPersonalInformation';
import {UserWorkExperience} from '../work-experience-information/UserWorkExperience';
import {UserForeignLanguageInformation} from '../foreign-language-information/UserForeignLanguageInformation';

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
