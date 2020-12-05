import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {getDefaultLanguageLevels, getDummyLanguages} from '../../models/common/LanguageCommonModel';
import {MatTableDataSource} from '@angular/material/table';
import {ForeignLanguageInformation} from '../../models/foreignlanguageinformation/ForeignLanguageInformation';

@Component({
  selector: 'app-foreign-language-information',
  templateUrl: './foreignlanguageinformation.component.html',
  styleUrls: ['foreignlanguageinformation.component.css']
})
export class ForeignLanguageInformationComponent {

  componentTitle = 'Yabancı Dil Bilgileri';

  @Output() foreignLanguageEvent = new EventEmitter<Array<ForeignLanguageInformation>>();

  displayedColumns: string[] = ['name', 'level', 'action'];
  dataTableSource: MatTableDataSource<ForeignLanguageInformation> = new MatTableDataSource<ForeignLanguageInformation>();

  foreignInformationList: Array<ForeignLanguageInformation> = new Array<ForeignLanguageInformation>();
  count = 0;

  isAddingInfo = false;
  isNewInfoValid = false;

  newLanguageLevelFormControl = new FormControl('', [Validators.required]);
  languageLevelOptions = getDefaultLanguageLevels();

  newLanguageFormControl = new FormControl('', [Validators.required]);
  foreignLanguages = getDummyLanguages();

  addNewInfo() {
    this.isAddingInfo = true;
  }

  cancelAddOperation() {
    this.isAddingInfo = false;
    this.resetNewLanguageOptions();
  }

  private resetNewLanguageOptions() {
    this.languageLevelOptions = getDefaultLanguageLevels();
    this.foreignLanguages = getDummyLanguages();
    this.filterForeignLanguages();
  }

  filterForeignLanguages() {
    const addedLanguages = this.foreignInformationList.map(x => x.name);
    this.foreignLanguages = this.foreignLanguages.filter(x => !addedLanguages.includes(x.name));
  }

  checkAddOperationValidation() {
    this.isNewInfoValid = this.isAddingInfo && !this.newLanguageFormControl.invalid && !this.newLanguageLevelFormControl.invalid;
  }

  saveLanguageInformation() {
    const value = new ForeignLanguageInformation(
      this.count, this.newLanguageFormControl.value.name, this.newLanguageLevelFormControl.value
    );
    this.foreignInformationList.push(value);
    this.count = this.count + 1;
    this.setTableData();
    this.isAddingInfo = false;
    this.resetNewLanguageOptions();
  }

  private setTableData() {
    this.dataTableSource = new MatTableDataSource(this.foreignInformationList);
  }

  deleteEntry(id) {
    this.foreignInformationList = this.foreignInformationList.filter(x => x.id !== id);
    this.setTableData();
  }

  onBackPressed() {
    console.log('On Back Pressed - User Contact Information');
  }

  emitForeignLanguageInformation() {
    console.log(this.foreignInformationList);
    this.foreignLanguageEvent.emit(this.foreignInformationList);
  }
}
