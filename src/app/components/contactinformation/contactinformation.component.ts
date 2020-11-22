import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CityCommonModel} from '../../models/common/CityCommonModel';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contactinformation.component.html',
  styleUrls: ['./contactinformation.component.css']
})
export class ContactInformationComponent {
  componentTitle = 'İletişim Bilgileri';
  date = new FormControl(new Date());
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  dateOfBirth: string;
  today = new Date();
  minAge = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());

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
}
