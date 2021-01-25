import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GenderCommonModel, GenderType, getDefaultGenderOptions} from '../../models/common/GenderCommonModel';
import {UserPersonalInformation} from '../../models/personal-information/UserPersonalInformation';
import {FormControl} from '@angular/forms';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  @Output() personalInformationEvent = new EventEmitter<UserPersonalInformation>();

  componentTitle = 'Kişisel Bilgiler';

  genderOptions = getDefaultGenderOptions();

  militaryStatusFormControl = new FormControl();
  militaryStatusOptions = ['Yaptım', 'Yapmadım', 'Tecilli'];

  driverLicenseFormControl = new FormControl();
  driverLicenseOptions = ['M', 'A1', 'A2', 'A', 'B1', 'B', 'BE', 'C1', 'C1E', 'C', 'CE', 'D1', 'D1E', 'D', 'DE', 'F', 'G'];

  isMilitaryStatusDisabled = true;
  selectedGender: GenderCommonModel;

  constructor(private commonService: CommonTaskService) { }

  ngOnInit() {
  }

  selectGender(value) {
    this.selectedGender = value;
    this.evaluateMilitaryFieldVisibility();
  }

  private evaluateMilitaryFieldVisibility() {
    this.isMilitaryStatusDisabled = this.selectedGender.type !== GenderType.man;
  }

  validationControl() {
    return !this.isMilitaryStatusDisabled && this.militaryStatusFormControl.invalid;
  }

  onBackPressed() {
    console.log('On Back Pressed - User Contact Information');
  }

  emitPersonalInformation() {
    console.log(this.selectedGender);
    const value = new UserPersonalInformation(
      this.selectedGender,
      this.militaryStatusFormControl.value,
      this.driverLicenseFormControl.value
    );
    console.log(value);
    this.personalInformationEvent.emit(value);
  }
}
