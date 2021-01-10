import {UserContactInformation} from '../contact-information/UserContactInformation';
import {UserEducationInformation} from '../education-information/UserEducationInformation';
import {UserPersonalInformation} from '../personal-information/UserPersonalInformation';
import {UserWorkExperience} from '../work-experience-information/UserWorkExperience';
import {ForeignLanguageInformation} from '../foreign-language-information/ForeignLanguageInformation';

export class UserInformation {
  contactInformation: UserContactInformation;
  personalInformation: UserPersonalInformation;
  educationInformation: UserEducationInformation;
  foreignLanguageInformation: Array<ForeignLanguageInformation>;
  workExperiences: UserWorkExperience;
  matchingPriority: string;

  constructor(
    contactInformation: UserContactInformation,
    personalInformation: UserPersonalInformation,
    educationInformation: UserEducationInformation,
    foreignLanguageInformation: Array<ForeignLanguageInformation>,
    workExperiences: UserWorkExperience,
    matchingPriority: string
  ) {
    this.contactInformation = contactInformation;
    this.personalInformation = personalInformation;
    this.educationInformation = educationInformation;
    this.foreignLanguageInformation = foreignLanguageInformation;
    this.workExperiences = workExperiences;
    this.matchingPriority = matchingPriority;
  }
}
