import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CityCommonModel} from '../../models/common/CityCommonModel';
import {UserContactInformation} from '../../models/userinformation/UserContactInformation';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contactinformation.component.html',
  styleUrls: ['./contactinformation.component.css']
})
export class ContactInformationComponent {

  @Output() contactInformationEvent = new EventEmitter<UserContactInformation>();

  componentTitle = 'İletişim Bilgileri';

  date = new FormControl(new Date());
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  dateOfBirth: string;
  dateOfToday = new Date();
  minAge = new Date(this.dateOfToday.getFullYear() - 18, this.dateOfToday.getMonth(), this.dateOfToday.getDate());

  selectedProvince: CityCommonModel;
  provinces: Array<CityCommonModel> = [
    new CityCommonModel('17', 'Çanakkale'),
    new CityCommonModel('34', 'İstanbul'),
    new CityCommonModel('35', 'İzmir')
  ];

  selectProvince(province: CityCommonModel) {
    this.selectedProvince = province;
    console.log(province.zipCode + province.cityName);
  }

  getEmailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'E-posta adresi boş bırakılamaz.';
    }
    return this.emailControl.hasError('email') ? 'Geçerli bir e-posta adresi giriniz.' : '';
  }

  isAllFormsValidated() {
    return this.selectedProvince != null && !this.emailControl.invalid && this.dateOfBirth != null;
  }

  emitUserContactInformation() {
    const value = new UserContactInformation(this.emailControl.value, this.dateOfBirth, this.selectedProvince);
    this.contactInformationEvent.emit(value);
  }

  onBackPressed() {
    console.log('On Back Pressed - User Contact Information');
  }
}
