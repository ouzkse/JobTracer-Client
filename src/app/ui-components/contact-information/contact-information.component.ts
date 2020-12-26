import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Form, FormControl, Validators} from '@angular/forms';
import {CityCommonModel} from '../../models/common/CityCommonModel';
import {UserContactInformation} from '../../models/contact-information/UserContactInformation';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {ReplaySubject, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {MatSelect} from '@angular/material/select';
import {removeDialect} from '../../helpers/String';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() contactInformationEvent = new EventEmitter<UserContactInformation>();

  @ViewChild('multiSelectCity', { static: true }) multiSelectCity: MatSelect;

  componentTitle = 'İletişim Bilgileri';

  date = new FormControl(new Date());
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  multipleCityControl: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  multipleCityFilterControl: FormControl = new FormControl();

  dateOfBirth: string;
  dateOfToday = new Date();
  minAge = new Date(this.dateOfToday.getFullYear() - 18, this.dateOfToday.getMonth(), this.dateOfToday.getDate());

  selectedProvince: CityCommonModel;
  provinces: Array<CityCommonModel> = [
    new CityCommonModel('17', 'Çanakkale'),
    new CityCommonModel('34', 'İstanbul'),
    new CityCommonModel('35', 'İzmir'),
    new CityCommonModel('45', 'Abc')
  ];

  noEntriesFoundLabel = 'Eşleşme bulunamadı.';
  placeholderLabel = 'Arama';

  public _filteredMultipleCities: ReplaySubject<CityCommonModel[]> = new ReplaySubject<CityCommonModel[]>(1);
  private selectedCities: CityCommonModel[];

  protected _onDestroy = new Subject<void>();

  constructor(private commonService: CommonTaskService) { }

  ngOnInit() {
    this.getProvinces();
    // bunlar servis çağrısından sonra olmalı
    this._filteredMultipleCities.next(this.provinces);
    this.setObservers();
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  private getProvinces() {
    this.commonService.getProvinces().subscribe((data => {
      this.provinces = data;
      this._filteredMultipleCities.next(this.provinces);
      this.setObservers();
    }));
  }

  private setInitialValue() {
    this._filteredMultipleCities
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelectCity.compareWith = (a: CityCommonModel, b: CityCommonModel) => a && b && a.zipCode === b.zipCode;
      });
  }

  private setObservers() {
    this.multipleCityFilterControl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCities();
      });
  }

  protected filterCities() {
    if (!this.provinces) {
      return;
    }

    let search = this.multipleCityFilterControl.value;
    if (!search) {
      this._filteredMultipleCities.next(this.provinces.slice());
      return;
    } else {
      search = removeDialect(search.toLowerCase());
    }

    // There is a problem with remove dialect function, or localization of İ/I
    this._filteredMultipleCities.next(
      this.provinces.filter(city => removeDialect(city.cityName.toLowerCase()).includes(search))
    );
  }

  getEmailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'E-posta adresi boş bırakılamaz.';
    }
    return this.emailControl.hasError('email') ? 'Geçerli bir e-posta adresi giriniz.' : '';
  }

  isAllFormsValidated() {
    return !this.multipleCityControl.invalid &&
      !this.emailControl.invalid &&
      this.dateOfBirth != null;
  }

  emitUserContactInformation() {
    const value = new UserContactInformation(this.emailControl.value, this.dateOfBirth, this.multipleCityControl.value);
    console.log(value);
    this.contactInformationEvent.emit(value);
  }

  onBackPressed() {
    console.log('On Back Pressed - User Contact Information');
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
