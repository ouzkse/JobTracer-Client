import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CityCommonModel} from '../../models/common/CityCommonModel';
import {UserContactInformation} from '../../models/contact-information/UserContactInformation';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

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

  constructor(private commonService: CommonTaskService) { }

  ngOnInit() {
    this.getProvinces();
  }

  private getProvinces() {
    this.commonService.getProvinces().subscribe((data => this.provinces = data));
  }

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
