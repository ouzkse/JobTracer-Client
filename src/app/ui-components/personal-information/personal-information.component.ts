import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GenderCommonModel, GenderType, getDefaultGenderOptions} from '../../models/common/GenderCommonModel';
import {UserPersonalInformation} from '../../models/personal-information/UserPersonalInformation';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  @Output() personalInformationEvent = new EventEmitter<UserPersonalInformation>();

  componentTitle = 'Kişisel Bilgiler';

  genderOptions = getDefaultGenderOptions();

  militaryStatusFormControl = new FormControl('', [Validators.required]);
  militaryStatusOptions = ['Yaptım', 'Yapmadım', 'Tecilli'];

  driverLicenseFormControl = new FormControl();
  driverLicenseOptions = ['M', 'A1', 'A2', 'A', 'B1', 'B', 'BE', 'C1', 'C1E', 'C', 'CE', 'D1', 'D1E', 'D', 'DE', 'F', 'G'];

  isMilitaryStatusDisabled = true;
  selectedGender: GenderCommonModel;

  constructor() { }

  ngOnInit() {
    this.militaryStatusFormControl.disable();
  }

  selectGender(value) {
    this.selectedGender = value;
    this.evaluateMilitaryFieldVisibility();
  }

  private evaluateMilitaryFieldVisibility() {
    this.isMilitaryStatusDisabled = this.selectedGender.type !== GenderType.man;
    if (this.isMilitaryStatusDisabled) {
      this.militaryStatusFormControl.disable();
    } else {
      this.militaryStatusFormControl.enable();
    }
    this.validationControl();
  }

  validationControl() {
    return !this.isMilitaryStatusDisabled && !this.militaryStatusFormControl.disabled && this.militaryStatusFormControl.invalid;
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
