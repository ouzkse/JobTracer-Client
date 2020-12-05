import {Component, EventEmitter, Output} from '@angular/core';
import {GenderType, getDefaultGenderOptions} from '../../models/common/GenderCommonModel';
import {UserPersonalInformation} from '../../models/personalinformation/UserPersonalInformation';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['personalinformation.component.css']
})
export class PersonalInformationComponent {

  @Output() personalInformationEvent = new EventEmitter<UserPersonalInformation>();

  componentTitle = 'Kişisel Bilgiler';

  genderOptions = getDefaultGenderOptions();

  militaryStatusFormControl = new FormControl();
  militaryStatusOptions = ['Yaptım', 'Yapmadım', 'Tecilli'];

  driverLicenseFormControl = new FormControl();
  driverLicenseOptions = ['A', 'B', 'C', 'D', 'E', 'F'];

  isMilitaryStatusDisabled = true;
  selectedGender: GenderType = GenderType.undefined;
  nationality: string;

  selectGender(value) {
    this.selectedGender = value.type;
    this.evaluateMilitaryFieldVisibility();
  }

  private evaluateMilitaryFieldVisibility() {
    if (this.selectedGender !== GenderType.man) {
      this.isMilitaryStatusDisabled = true;
    } else {
      this.isMilitaryStatusDisabled = false;
    }
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
      this.nationality,
      this.driverLicenseFormControl.value
    );
    console.log(value);
    this.personalInformationEvent.emit(value);
  }
}
