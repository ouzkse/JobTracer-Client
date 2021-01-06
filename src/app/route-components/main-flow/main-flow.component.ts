import {Component, OnInit} from '@angular/core';
import {UserContactInformation} from '../../models/contact-information/UserContactInformation';
import {UserPersonalInformation} from '../../models/personal-information/UserPersonalInformation';
import {UserEducationInformation} from '../../models/education-information/UserEducationInformation';
import {UserForeignLanguageInformation} from '../../models/foreign-language-information/UserForeignLanguageInformation';
import {UserWorkExperience} from '../../models/work-experience-information/UserWorkExperience';
import {UserInformation} from '../../models/user-information/UserInformation';
import {UserInformationDataService} from '../../services/data/user-information/user-information.data.service';
import {MainNavigationService} from '../../services/navigation/main/main.navigation.service';
import {MainNavigationEnum} from '../../models/navigation/MainNavigationEnum';
import {ForeignLanguageInformation} from '../../models/foreign-language-information/ForeignLanguageInformation';
import {GlobalVariables} from '../../helpers/GlobalVariables';

@Component({
  selector: 'app-main-flow',
  templateUrl: './main-flow.component.html',
  styleUrls: ['./main-flow.component.css']
})
export class MainFlowComponent implements OnInit {

  userContactInformation: UserContactInformation = null;
  userPersonalInformation: UserPersonalInformation = null;
  userEducationInformation: UserEducationInformation = null;
  userForeignLanguageInformation: Array<ForeignLanguageInformation> = null;
  userWorkExperiences: UserWorkExperience = null;
  matchingPriority: string = GlobalVariables.matchingPriority;

  constructor(private dataService: UserInformationDataService, private mainNavigationService: MainNavigationService) { }

  ngOnInit(): void {
  }

  setUserContactInformation(contactInformation: UserContactInformation) {
    console.log(this.userContactInformation);
    this.userContactInformation = contactInformation;
    console.log(this.userContactInformation);
  }

  setUserPersonalInformation(personalInformation: UserPersonalInformation) {
    this.userPersonalInformation = personalInformation;
    console.log(this.userPersonalInformation);
  }

  setUserEducationInformation(educationInformationArray: UserEducationInformation) {
    console.log(this.userEducationInformation);
    this.userEducationInformation = educationInformationArray;
    console.log(this.userEducationInformation);
  }

  setUserForeignLanguageInformation(foreignLanguageInformation: Array<ForeignLanguageInformation>) {
    console.log(this.userForeignLanguageInformation);
    this.userForeignLanguageInformation = foreignLanguageInformation;
    console.log(this.userForeignLanguageInformation);
  }

  setUserWorkExperiences(userWorkExperiences: UserWorkExperience) {
    console.log(this.userWorkExperiences);
    this.userWorkExperiences = userWorkExperiences;
    console.log(this.userWorkExperiences);
  }

  emitUserInformation() {
    const value = new UserInformation(
      this.userContactInformation,
      this.userPersonalInformation,
      this.userEducationInformation,
      this.userForeignLanguageInformation,
      this.userWorkExperiences,
      this.matchingPriority
    );
    this.dataService.setUserInformation(value);
    this.mainNavigationService.setEvent(MainNavigationEnum.result);
  }
}
